import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from "react";

export default function Menu(){
    const [completedHabits, setCompletedHabits] = useState(3)
    const percentage = (completedHabits / 5)*100
    return(<>
        <Enfeite>
        <MenuBar>
        <Option>Hábitos</Option>

        <Option>Histórico</Option>
        </MenuBar>
        </Enfeite>
        <ProgressBarContainer>
        <CircularProgressbar value={percentage} text='Hoje' background backgroundPadding={6} styles={buildStyles({
            pathColor: `rgba(255, 255, 255)`,
            textColor: '#fff',
            trailColor: '#52B6FF',
            backgroundColor: '#52B6FF',
        })}/>
        </ProgressBarContainer>
        </>
    )
}

const ProgressBarContainer = styled.div`
    width: 91px;
    height: 91px;
    position: fixed;
    bottom: 10px;
    z-index: 1;
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