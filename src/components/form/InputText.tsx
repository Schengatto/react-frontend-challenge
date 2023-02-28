import React, { FunctionComponent } from "react"
import styled from "styled-components";

const Component = styled.div`
.input-text__input-group
{
    position: relative;

    input
    {
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #c9cbcd;
        padding: 1.25rem 0.75rem 0.5rem;
        font-size: 1rem;

        &:focus {
            border-color: #191238;
        }
    }
    label
    {
        position: absolute;
        top: 0.75rem;
        left: 0.75rem;
        font-size: 1rem;
        color: #666;
        transition: 0.3s;
        pointer-events: none;

        &.valued {
            font-size: 0.75rem;
            top: 0.5rem;
            color: #777188;
        }
    }
    input:focus + label
    {
        font-size: 0.75rem;
        top: 5px;
        color: #777188;
    }
}
.input-text__description {
    padding: 0.25rem 0;
    font-size: 0.75rem;
}
`;


interface InputTextProps {
    label: string;
    description?: string;
}

const InputText: FunctionComponent<InputTextProps> = ({ label, description }) => {

    const styleClass = false ? "valued" : "";

    return (
        <Component>
            <div className="input-text__input-group">
                <input id={label} type="text"></input>
                <label className={styleClass} htmlFor={label}>{label}</label>
            </div>
            {description && <div className="input-text__description">{description}</div>}
        </Component>
    );
}

export default InputText;