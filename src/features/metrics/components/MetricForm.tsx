import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import InputText from "../../../components/form/InputText";
import Button from "../../../components/ui/Button";
import { generateRandomString } from "../../../utils/string-utils";
import { Metric } from "../models/metric";

const FormGroup = styled.div`
    padding: 1rem;

    h3 {
        margin: 1rem;
    }

    .amount-row {
       display: flex;
       justify-content: space-around;
       margin: 1rem;

       .amount-actions {
            display: flex;
            width: 100px;
       }

       div {
            width: 100%;
       }
    }

    .form-actions {
        display: flex;
        margin: 2rem 0 1rem 0;
        justify-content: space-around;

        button {
            margin: 0 1rem;
        }
    }
`;

interface MetricFormProps {
    metric?: Metric;
    onCancel: () => void;
    onSubmit: (metric: Metric) => void;
}

const MetricAmountsForm: FunctionComponent<MetricFormProps> = (props) => {
    const [amounts, setAmounts] = useState<number[]>(props.metric?.amounts || []);
    const [code, setCode] = useState<string>(props.metric?.code || "");

    const onSubmit = (event: any): void => {
        event.preventDefault();

        const metric = props.metric
            ? new Metric(props.metric.id, code, amounts, props.metric.date)
            : new Metric(generateRandomString(3), code, amounts, new Date())

        props.onSubmit(metric);
    };

    const updateMetricAmountHandler = (value: string, index: number): void => {
        setAmounts((prev: number[]) => {
            const result = [...prev];
            result.splice(index, 1, Number(value));
            return result;
        })
    }

    const handleAddNewAmount = (): void => setAmounts((prev: number[]) => [...prev, 0]);

    const handleDeleteAmount = (index: number): void => {
        setAmounts((prev: number[]) => {
            const result = [...prev];
            result.splice(index, 1);
            return result;
        })
    }

    const updateMetricCodeHandler = (value: string): void => setCode(value);

    return (
        <FormGroup>
            <form onSubmit={onSubmit}>
                <h3>Info</h3>
                <div className="amount-row">
                    <InputText
                        label={`Code`}
                        type="text"
                        value={code}
                        required
                        onChange={(e) => updateMetricCodeHandler(e.target.value)} />
                </div>

                <h3>Amounts</h3>
                {amounts.map((amount, index) =>
                    <div key={index} className="amount-row">
                        <InputText label={`Amount ${index}`}
                            type="number"
                            value={amount}
                            onChange={(e) => updateMetricAmountHandler(e.target.value, index)} />
                        <div className="amount-actions">
                            <Button handleClick={handleDeleteAmount.bind(null, index)} label="Delete" />
                        </div>
                    </div>
                )}
                <div className="form-actions">
                    <Button label="Cancel" handleClick={props.onCancel}></Button>
                    <Button handleClick={handleAddNewAmount} label="Add New Amount" />
                    <Button label="Save" type="submit" disabled={!code}></Button>
                </div>
            </form>
        </FormGroup>
    );
}

export default MetricAmountsForm;