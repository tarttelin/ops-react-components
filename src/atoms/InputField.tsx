import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`

border: 0;
border-bottom: 2px darkgreen solid;
background-color: transparent;
outline: none;
line-height: 1.5em;
margin-bottom: 0.25rem;
width: 100%;
padding: 0.25rem 0 0.375rem 0


&:hover {
    border-color: lightgreen;
}

&:focus {
    border-color: lightgreen;
}
`;

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

class InputField extends React.Component<InputFieldProps> {
  render() {
    const { id, type = "text" } = this.props;
    return <StyledInput type={type} id={id} />;
  }
}

export default InputField;
