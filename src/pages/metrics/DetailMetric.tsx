import React, { FunctionComponent, useState } from "react";
import { LoaderFunctionArgs, useLoaderData, useNavigate } from "react-router-dom";
import { NotFoundError } from "../../models/error";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import MetricChart from "../../features/metrics/components/MetricChart";
import { Metric } from "../../features/metrics/models/metric";
import metricService from "../../features/metrics/services/metric-service";
import MetricAmountsForm from "../../features/metrics/components/MetricForm";
import styled from "styled-components";

export async function retrieveMetric({ params }: LoaderFunctionArgs): Promise<Metric> {
    if (!params.id) {
        throw new Error("Expected params.id");
    }
    const metric = await metricService.getMetric(params.id);
    if (!metric) {
        throw new NotFoundError(`Uh oh, I couldn't find a metric with id "${params.id}"`);
    }
    return metric;
}

export const ButtonsGroup = styled.div`
    display: flex;

    button {
        margin: 0 1rem;
    }
`;

const DetailMetric: FunctionComponent = () => {
    const navigate = useNavigate();
    let metric = useLoaderData() as Metric;

    const [currentMetric, setCurrentMetric] = useState<Metric>(metric);
    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    const handleBackToList = () => {
        navigate("/metrics");
    }

    const handleEditMetric = (value: boolean) => {
        setIsEditMode(value);
    }

    const handleDeleteMetric = async () => {
        await metricService.deleteMetric(metric.id);
        handleBackToList();
    }

    const handleUpdateMetric = async (metric: Metric) => {
        await metricService.updateMetric(new Metric(currentMetric.id, metric.code, metric.amounts, currentMetric.date));
        const updatedMetric = await metricService.getMetric(currentMetric.id);
        if (!updatedMetric) {
            navigate("/error");
            return;
        }
        setCurrentMetric(updatedMetric);
        handleEditMetric(false);
    }

    const viewModeActions = (
        <ButtonsGroup>
            <Button label="Back To List" onClick={handleBackToList}></Button>
            <Button label="Edit Metric" onClick={handleEditMetric.bind(null, true)}></Button>
            <Button label="Delete Metric" onClick={handleDeleteMetric}></Button>
        </ButtonsGroup>
    );

    const metricChart = (<MetricChart metric={currentMetric}></MetricChart>);
    const amountsForm = (
        <MetricAmountsForm
            metric={currentMetric}
            onCancel={handleEditMetric.bind(null, false)}
            onSubmit={handleUpdateMetric} />
    )
    return (
        <>
            <Card footer={!isEditMode && viewModeActions}>
                <div>
                    {isEditMode ? amountsForm : metricChart}
                </div>
            </Card>
        </>
    );
}

export default DetailMetric;