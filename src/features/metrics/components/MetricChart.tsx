import React, { FunctionComponent } from "react";
import ReactECharts from 'echarts-for-react';
import { Metric } from "../models/metric";

interface MetricChartProps {
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
        <div>
            {metric.amounts?.length
                ? <ReactECharts option={{...options}} />
                : <div>No Amounts yet!</div>
            }
        </div>
    );
}

export default MetricChart;