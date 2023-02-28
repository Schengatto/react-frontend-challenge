import React, { FunctionComponent } from "react";
import Table from "../../components/ui/Table";
import { Metric } from "../../features/metrics/models/metric";
import metricService from "../../features/metrics/services/metric-service";
import { useNavigate, useLoaderData } from 'react-router-dom';

export async function retrieveMetrics(): Promise<Metric[]> {
    return await metricService.getMetrics();
}

const ListMetrics: FunctionComponent = () => {
    const navigate = useNavigate();
    const metrics = useLoaderData() as Metric[];

    const headers = [
        { key: "id", label: "ID" },
        { key: "code", label: "Code" },
        { key: "date", label: "Date", parseFunction: (date: Date) => date.toLocaleDateString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' }) }
    ];

    const handleMetricClick = (metricId: string) => navigate(`/metrics/${metricId}`);

    return (
        <>
            <Table title='Metrics'
                items={metrics}
                headers={headers}
                searchKey="code"
                onRowClick={handleMetricClick} />
        </>
    );
}

export default ListMetrics;