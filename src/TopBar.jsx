import React, {useContext} from "react";
import { UserInfoContext } from "./contextsfolder/UserInfoContext";
import styled from "styled-components";
import { Contexto } from "./Context";
import { useNavigate } from "react-router-dom";
export default function TopBar(){
    const contexto = useContext(Contexto)
    const userContexto = useContext(UserInfoContext);
    const navigate = useNavigate()
    function resetLogin(){
        contexto.setLoginFB(false)
        navigate('/')
        contexto.setNewHabit('')
        contexto.reset(false)   
    }
    return(
    <Header data-test='header'>
        <Logo onClick={resetLogin}> TrackIt </Logo>
        <ProfileImg data-test='avatar' src={userContexto.image}></ProfileImg>
    </Header>
    )
}
const Header = styled.div`
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

const Logo = styled.p`
    font-family: 'Playball';
    font-size: 39px;
    line-height: 49px;
    color: white;
    margin-left: 18px;
`

const ProfileImg = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 100%;
    background-color: white;
    margin-right: 18px;
`