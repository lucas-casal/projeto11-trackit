import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Contexto } from "./Context";
import axios from "axios";

export default function Menu(props){
    const contexto = useContext(Contexto);
    const [completedHabits, setCompletedHabits] = useState(0)
    const [todayHabits, setTodayHabits] = useState(0)
    const navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
            headers: {
              'Authorization': `Bearer ${contexto.token}`
            }
          });
        promise.then(res => {
            console.log(res);
            let contador = 0;
            res.data.map(x => {
                x.done ? contador++ : ''
            })

            setCompletedHabits(contador);
            setTodayHabits(res.data.length)

        }) .catch(res => console.log(res)) .finally(() => {
            props.setReload(false);
   
        })
    }, [props.reload,contexto.token])


    const percentage = completedHabits*100/todayHabits;
    return(<>
        <Enfeite data-test='menu' >
        <MenuBar>
        <Option data-test='habit-link' onClick={() => navigate('/habitos')}>Hábitos</Option>

        <Option data-test='history-link' onClick={() => {navigate('/historico')}}>Histórico</Option>
        </MenuBar> 
       
        <ProgressBarContainer data-test='today-link' onClick={() => {navigate('/hoje')}}>
        <CircularProgressbar value={percentage} text='Hoje' background backgroundPadding={6} styles={buildStyles({
            pathColor: `rgba(255, 255, 255)`,
            textColor: '#fff',
            trailColor: '#52B6FF',
            backgroundColor: '#52B6FF',
        })}/>
        </ProgressBarContainer>
        </Enfeite>
        </>

    )
}

const ProgressBarContainer = styled.div`
    width: 91px;
    height: 91px;
    position: fixed;
    bottom: 10px;
    z-index: 5;
`
const Enfeite = styled.div`
    width: 100%;
    height: 70px;
    background-color: white;
    display: flex;
    align-items: end;
    justify-content: center;
    position: fixed;
    bottom: 0;
`
const MenuBar = styled.div`
    width: 100%;
    max-width: 500px;
    height: 70px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
`

const Option = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: #52B6FF;
    margin-left: 31px;
    margin-right: 31px;
`