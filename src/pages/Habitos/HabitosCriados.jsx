import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { Contexto } from "../../Context"
import WeekDay from "./WeekDay"

export default function HabitosCriados(props) {
const contexto = useContext(Contexto)


    return (
        <Habit>
            <HabitName>
            {props.name}
            </HabitName>

            <WeekDaysSelector>
                <Contexto.Provider value={{selected: props.weekdays}}>
                    <WeekDay id="1" day="D" />
                    <WeekDay id="2" day="S" />
                    <WeekDay id="3" day="T" />
                    <WeekDay id="4" day="Q" />
                    <WeekDay id="5" day="Q" />
                    <WeekDay id="6" day="S" />
                    <WeekDay id="7" day="S" />
                </Contexto.Provider>
            </WeekDaysSelector>

            <DeleteIcon src="src/assets/Group.svg"/>
        </Habit>
    )
}

const HabitName = styled.h2`
    width: 100%;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #666666;
    margin-left: 18px;
    margin-top: 13px;
    align-items: initial;
`

const WeekDaysSelector = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
gap: 4px;
height: 30px;
margin-top: 8px;
margin-left: 18px;

`
const Habit = styled.div`
display: flex;
width: 100%;
max-width: 500px;
height: 91px;
background-color: white;
margin-top: 10px;
flex-direction: column;
align-items: center;
border-radius: 5px;
position: relative;
`

const DeleteIcon = styled.img`
    width: 13px;
    position: absolute;
    right: 10px;
    top: 11px;
`