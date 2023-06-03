import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../../InputBase";
import { Contexto } from "../../Context";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";


export default function Cadastro(props){
 const navigate = useNavigate();

 function registrar(){
    props.cadastro ? navigate('/') : ''
 }
useEffect(()=> {
    registrar();
},[props.cadastro])
  
    return (
    
        <Pagina>
            
            <Logo src="https://trackit-teal.vercel.app/static/media/logo.cb6031c1a7782aa4e40b.png"></Logo>
            
            <form onSubmit={(e) => props.sendRegister(e)}>
            <Contexto.Provider value={{type:'email' ,text: 'email', onChange: props.handleEmail, disabled: props.bool}}>
                <Input datatest='email-input'/>
            </Contexto.Provider>
            <Contexto.Provider value={{type:'password' ,text: 'senha', onChange: props.handlePassword, disabled: props.bool}}>
                <Input datatest='password-input'/>
            </Contexto.Provider>
            <Contexto.Provider value={{type:'text' ,text: 'nome', onChange: props.handleName, disabled: props.bool}}>
                <Input datatest='user-name-input'/>
            </Contexto.Provider>
            <Contexto.Provider value={{type:'url' ,text: 'foto', onChange: props.handleImage, disabled: props.bool}}>
                <Input datatest='user-image-input' />
            </Contexto.Provider>
            
            <Contexto.Provider value={{margin: false, text:'Cadastrar', width: '305px' , height: '47px', disabled: props.bool}}>

            <Button datatest='signup-btn'></Button>    

            </Contexto.Provider>
            </form>

        
            <AccountLess data-test='login-link' onClick={() => navigate('/')}>Já tem uma conta? Faça login!</AccountLess>
            
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
