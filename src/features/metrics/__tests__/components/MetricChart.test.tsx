import React from 'react';
import { render } from '@testing-library/react';
import MetricChart, { MetricChartProps } from '../../components/MetricChart';
import { Metric } from '../../models/metric';

jest.mock('echarts-for-react', () => ({
    __esModule: true,
    namedExport: jest.fn(),
    default: () => <div data-test="MetricChart__Chart"/>,
}));

const makeSut = (props: MetricChartProps) => {
    return render(<MetricChart {...props} />);
};

test('Should render correctly', () => {
    const metric = new Metric("AAA", "Test Metric", [10, 20], new Date(1677680641));
    const { getByTestId } = makeSut({ metric });

    expect(getByTestId("MetricChart__Chart")).toBeInTheDocument();
});
