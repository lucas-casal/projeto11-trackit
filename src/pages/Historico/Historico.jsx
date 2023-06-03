import { useContext, useState } from "react";
import styled from "styled-components";
import Menu from "../../Menu";
import { Contexto } from "../../Context";
import { useNavigate } from "react-router-dom";

export default function Historico(props){
    const contexto = useContext(Contexto)
    const navigate = useNavigate()
    function resetLogin(){
        props.setLoginFB(false)
        navigate('/')
        props.setNewHabit('')
        props.reset(false)
    }

    return(
        <Pagina>
        <TopBar>
        <Logo onClick={resetLogin}> TrackIt </Logo>
        <ProfileImg src={props.image}></ProfileImg>
        </TopBar>

        <Header>
                <MeusHabitos>
                   Histórico
                </MeusHabitos>
                <DayStatus x={''}>
                    {false ? '' : 'Em breve você poderá ver o histórico dos seus hábitos aqui!'}
                </DayStatus>
        </Header>
        
        <Contexto.Provider value={{token: props.token}}>      
        <Menu reload={props.reload} setReload={props.setReload}/>
        </Contexto.Provider>
        </Pagina>
    )
}
const Header = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    background-color: #F2F2F2;
    margin-top: 98px;
    display: flex;
    flex-direction: column;
    justify-content: initial;
    padding-left: 17px;
`
const DayStatus = styled.h2`
    width: 100%;
    height: 22px;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin-top: 17px;
    color: #666666;
`
const Logo = styled.p`
    font-family: 'Playball';
    font-size: 39px;
    line-height: 49px;
    color: white;
    margin-left: 18px;
`
const TopBar = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    z-index:5;
`
    const Pagina = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    gap: 6px;
    background-color: #F2F2F2;
    overflow-y: scroll;
`
const ProfileImg = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 100%;
    background-color: white;
    margin-right: 18px;
`
const MeusHabitos = styled.h1`
    font-family: 'Lexend Deca', sans-serif;
    width: 100%;
    font-size: 23px;
    color: #126BA5;
    align-self: center;
`