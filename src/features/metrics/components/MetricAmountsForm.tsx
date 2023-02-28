import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import InputText from "../../../components/form/InputText";
import Button from "../../../components/ui/Button";

const FormGroup = styled.div`
    padding: 1rem;

    .amount-row {
       display: flex;
       margin: 1rem;
       justify-content: space-around;

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

        button {
            margin: 0 1rem;
        }
    }
`;

interface MetricAmountsFormProps {
    amounts: number[];
    onCancel: () => void;
    onSubmit: (amounts: number[]) => void;
}

const MetricAmountsForm: FunctionComponent<MetricAmountsFormProps> = (props) => {
    const [amounts, setAmounts] = useState<number[]>(props.amounts || []);

    const onSubmit = (event: any) => {
        event.preventDefault();
        props.onSubmit(amounts);
    };

    const updateMetricAmountHandler = (value: string, index: number) => {
        setAmounts((prev: number[]) => {
            const result = [...prev];
            result.splice(index, 1, Number(value));
            return result;
        })
    }

    const handleAddNewAmount = () => {
        setAmounts((prev: number[]) => [...prev, 0]);
    }

    const handleDeleteAmount = (index: number) => {
        setAmounts((prev: number[]) => {
            const result = [...prev];
            result.splice(index, 1);
            return result;
        })
    }

    return (
        <FormGroup>
            <form onSubmit={onSubmit}>
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
                    <Button handleClick={handleAddNewAmount} label="Add New " />
                    <Button label="Save" type="submit"></Button>
                </div>
            </form>
        </FormGroup>
    );
}

export default MetricAmountsForm;