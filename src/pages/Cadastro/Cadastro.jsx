import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../../InputBase";
import { Contexto } from "../../Context";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";


export default function Cadastro(props){
 const navigate = useNavigate();
useEffect(()=> {
    props.resetInputs();
},[])
  
    return (
    
        <Pagina>
            
            <Logo src="./src/assets/Logo.png"></Logo>
            
            <form onSubmit={() => {props.sendRegister;   navigate('/habitos')}}>
            <Contexto.Provider value={{type:'email' ,text: 'email', onChange: props.handleEmail, disabled: props.bool}}>
                <Input />
            </Contexto.Provider>
            <Contexto.Provider value={{type:'password' ,text: 'senha', onChange: props.handlePassword, disabled: props.bool}}>
                <Input />
            </Contexto.Provider>
            <Contexto.Provider value={{type:'text' ,text: 'nome', onChange: props.handleName, disabled: props.bool}}>
                <Input />
            </Contexto.Provider>
            <Contexto.Provider value={{type:'url' ,text: 'foto', onChange: props.handleImage, disabled: props.bool}}>
                <Input />
            </Contexto.Provider>
            
            <Contexto.Provider value={{margin: false, text:'Cadastrar', width: '305px' , height: '47px', disabled: props.bool}}>

            <Button></Button>    

            </Contexto.Provider>
            </form>

            <Link to={'/'}>
            <AccountLess>Já tem uma conta? Faça login!</AccountLess>
            </Link>
        </Pagina>
    
    )
}

const Logo = styled.img`
    width: 180px;
    height: 180px;
    margin-bottom: 26px;
`
const Pagina = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;

`
const AccountLess = styled.p`
    font-family: Lexend Deca;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    color: #52B6FF;
    text-decoration-line: underline;
    margin-top: 19px;
`
