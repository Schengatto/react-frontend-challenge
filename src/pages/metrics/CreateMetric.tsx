import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/ui/Card";
import MetricAmountsForm from "../../features/metrics/components/MetricForm";
import { Metric } from "../../features/metrics/models/metric";
import metricService from "../../features/metrics/services/metric-service";

const Component = styled.div`
    margin: 1rem;
`;

const CreateMetric: FunctionComponent = () => {
    const navigate = useNavigate();
    const handleCancel = () => {
        navigate("/metrics");
    };

    const handleCreateMetric = async(metric: Metric) => {
        await metricService.addMetric(metric);
        handleCancel();
    };

    const createForm = (
        <MetricAmountsForm
            onCancel={handleCancel}
            onSubmit={handleCreateMetric} />
    );

    return (
        <Component>
            <Card>
                {createForm}
            </Card>
        </Component>
    );
};

export default CreateMetric;