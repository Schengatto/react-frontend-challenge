import React, { FunctionComponent } from "react";
import ReactECharts from 'echarts-for-react';
import { Metric } from "../models/metric";
import styled from "styled-components";

const Component = styled.div`
    .empty-data {
        width: 100%;
        text-align: center;
        padding: 2rem 0;
        text-align: center;
    }
`;

export interface MetricChartProps {
    metric: Metric;
}

const MetricChart: FunctionComponent<MetricChartProps> = ({ metric }) => {

    const series = metric.amounts?.map((amount, index) => ({
        name: `Amount ${index}`,
        data: [amount],
        type: "bar",
        stack: 'x',
        smooth: true,
        label: {
            show: true
        },
        emphasis: {
            focus: 'series'
        },
    })) || [];

    const options = {
        xAxis: {
            type: "value"
        },
        yAxis: {
            type: "category",
            data: [metric.code]
        },
        series: [...series],
        tooltip: {
            trigger: "axis"
        }
    }

    return (
        <Component>
            {metric.amounts?.length
                ? <ReactECharts option={{ ...options }} data-test="MetricChart__Chart" />
                : <div className="empty-data" data-test="MetricChart__Empty">No Amounts yet!</div>
            }
        </Component>
    );
}

export default MetricChart;