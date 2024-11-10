import styled from "styled-components";


const Navbar = styled.h3`
    color: var(--textColor);
    background-color: var(--bgColor);
    margin: 0px;
    height: 40px;
    display: flex;
    align-items: center;
`

const Button = styled.button`
    height: 40px;
    padding: 10px;
    color: ${props => props.color || 'white'};
    box-shadow: grey 8px 6px 3px;
    border: none;
    font-family: monospace;
    font-weight: 900;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 10px;
    margin : 0 10px;
    background-color: ${props => props.bgColor};
`

const Input = styled.input.attrs({ type: 'text' })`
    height: 25px;
    padding: 5px 10px;
    border: 2px solid black;
    background: var(--bgColor);
    color: var(--textColor);
    font-family: monospace;
    border-radius: 10px;
    flex-grow: 1;
`

const Table = styled.table`
    width: 100vw;
    padding: 0 50px;
`

const Status_Button = styled.button`
    height: 40px;
    width: 80px;
    font-weight: bold;
    color: white;
    background-color: ${props => props.color};
    border-radius: 10px;
    border: none;
    font-size: 1rem;
`

const InputBox = styled.div`
    display: flex;
    margin: 30px 250px;
`

const Heading = styled.h1`
    font-size: 2rem;
    text-align: center;
`

export { Navbar,
    Button,
    Input,
    Table,
    Status_Button,
    Heading,
    InputBox
 };