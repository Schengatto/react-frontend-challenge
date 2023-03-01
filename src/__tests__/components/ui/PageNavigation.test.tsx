import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import PageNavigator, { PageNavigatorProps } from '../../../components/ui/PageNavigator';

const makeSut = (props: PageNavigatorProps) => {
    return render(<PageNavigator {...props} />);
};

test("Should render successfully", async () => {
    const spy = jest.fn();

    const { getByText } = makeSut({ pageCount: 1, onPageChange: spy, pageNumber: 1, pageSize: 10 });

    expect(getByText("of 1")).toBeInTheDocument();
});