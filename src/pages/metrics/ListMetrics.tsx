import React, { FunctionComponent } from "react";
import Table from "../../components/ui/Table";
import { Metric } from "../../features/metrics/models/metric";
import metricService from "../../features/metrics/services/metric-service";
import { useNavigate, useLoaderData } from 'react-router-dom';
import Button from "../../components/ui/Button";
import styled from "styled-components";

export async function retrieveMetrics(): Promise<Metric[]> {
    return await metricService.getMetrics();
}

const Component = styled.div`
    margin: 1rem;
`;


const ListMetrics: FunctionComponent = () => {
    const navigate = useNavigate();
    const metrics = useLoaderData() as Metric[];

    const headers = [
        { key: "id", label: "ID" },
        { key: "code", label: "Code" },
        { key: "date", label: "Date", parseFunction: (date: Date) => date.toLocaleDateString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' }) }
    ];

    const handleMetricClick = (metricId: string) => navigate(`/metrics/${metricId}`);

    const handleAddNewMetric = () => navigate(`/metrics/create`);

    return (
        <Component>
            <div>
            <Table title='Metrics'
                items={metrics}
                headers={headers}
                searchKey="code"
                onRowClick={handleMetricClick} />
            </div>
            <div>
                <Button label="Add New Metric" handleClick={handleAddNewMetric}></Button>
            </div>
        </Component>
    );
}

export default ListMetrics;