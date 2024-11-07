import styled from "styled-components";


const Heading = styled.h3`
    color: var(--textColor);
    background-color: var(--bgColor);

    margin: 0px;
`

const Button = styled.button`
    height: 40px;
    padding: 10px;
    color: var(--textColor);
    background: var(--bgColor);
    box-shadow: grey 8px 6px 3px;
    border: 4px solid;
    font-family: monospace;
    font-weight: 900;
`

const Input = styled.input.attrs({ type: 'text' })`
    height: 25px;
    padding: 5px 10px;
    border: 2px solid black;
    background: var(--bgColor);
    color: var(--textColor);
    font-family: monospace;
    border-radius: 10px;
`

export { Heading,
    Button,
    Input
 };