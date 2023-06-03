import { useContext } from "react";
import styled from "styled-components";
import { Contexto } from "./Context";

export default function Input(){
    const contexto = useContext(Contexto);
    return(
        <InputBase value={contexto.value} marginTop={contexto.marginTop} marginBot={contexto.marginBot} id={contexto.type} type={contexto.type} onChange={contexto.onChange}  disabled={contexto.disabled} placeholder={contexto.text} required></InputBase>
    )
}

const InputBase = styled.input`
    width: 290px;
    height: 43px;
    display: block;
    padding-left: 11px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    margin-bottom: ${x => x.marginBot ? x.marginBot : '6px'};
    margin-top: ${x => x.marginTop ? x.marginTop : '0'};
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;

    ::placeholder{color: #dbdbdb;};
    background-color: ${x=>x.disabled ? '#F2F2F2': 'white'};


`