import { useContext, useState } from "react";
import styled from "styled-components";
import Menu from "../../Menu";
import { Contexto } from "../../Context";
import { useNavigate } from "react-router-dom";
import { UserInfoContext} from "../../contextsfolder/UserInfoContext";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import TopBar from "../../TopBar";

export default function Historico(props){
    const userContexto = useContext(UserInfoContext)
    const contexto = useContext(Contexto)
    const navigate = useNavigate()
    function resetLogin(){
        contexto.setLoginFB(false)
        navigate('/')
        contexto.setNewHabit('')
        contexto.reset(false)
    }

    
    return(
        <Pagina>
        <TopBar />
        <Header>
                <MeusHabitos>
                   Histórico
                </MeusHabitos>
                <DayStatus x={''}>
                    {false ? '' : 'Em breve você poderá ver o histórico dos seus hábitos aqui!'}
                </DayStatus>
        </Header>
        <Contexto.Provider value={{token: userContexto.token}}>      
        <Menu reload={props.reload} setReload={props.setReload}/>
        </Contexto.Provider>
        </Pagina>
    )
}
const Calendario = styled(Calendar)`
   height: 402px; 
   width: 335px !important;
   & button {
    margin-top: 7px !important;
    width: 50px;
    height: 50px;
    border-radius: 50%;
   }
`
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

const MeusHabitos = styled.h1`
    font-family: 'Lexend Deca', sans-serif;
    width: 100%;
    font-size: 23px;
    color: #126BA5;
    align-self: center;
`