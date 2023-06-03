import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { Contexto } from "../../Context"
import WeekDay from "./WeekDay"

export default function HabitosCriados(props) {
const contexto = useContext(Contexto)
const [hide, setHide] = useState('')
useEffect(() =>{
    props.weekdays === 'hide' ? setHide(true) : setHide(false);
}, [ , props.weekdays])


    return (
        <Habit key={props.id}>
            <HabitName>
            {props.name}
            </HabitName>

            <WeekDaysSelector weekdays = {props.weekdays}>
                <Contexto.Provider value={{selected: (props.weekdays ? props.weekdays : '')}}>
                    <WeekDay id="0" day="D" />
                    <WeekDay id="1" day="S" />
                    <WeekDay id="2" day="T" />
                    <WeekDay id="3" day="Q" />
                    <WeekDay id="4" day="Q" />
                    <WeekDay id="5" day="S" />
                    <WeekDay id="6" day="S" />
                </Contexto.Provider>
            </WeekDaysSelector>

            <HabitSubtitle hide={!hide} >Sequência atual: <DestaqueA currentSequence={props.currentSequence} highestSequence={props.highestSequence} done={props.done}>{props.currentSequence}</DestaqueA> <br/>
                            Seu recorde: <DestaqueB currentSequence={props.currentSequence} highestSequence={props.highestSequence} >{props.highestSequence}</DestaqueB>
            </HabitSubtitle>

            <Icon hide={hide} onClick={(x) => {props.deleteHabit(x)}} id={props.id} src="src/assets/Group.svg"/>

            <Icon check={true} id={props.id} onClick={(x) => props.onClick(x)} done={props.done} hide={!hide} src="src/assets/Group2.svg" />
        
        </Habit>
    )
}
const HabitSubtitle = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    width: 100%;
    height: auto;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    margin-left: 15px;
    margin-top: 7px;
    letter-spacing: 0em;
    text-align: left;
    display: ${x => x.hide ? 'none' : 'auto'};;

`
const DestaqueA = styled.strong`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    color: ${x => (x.done) ? '#8FC549' : 'black'};
    text-align: left;

`
const DestaqueB = styled.strong`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    color: ${x => (x.currentSequence > 0 && x.currentSequence >= x.highestSequence) ? '#8FC549' : 'black'};
    text-align: left;

`

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
    display: ${x => (x.weekdays === 'hide') ? 'none' : 'flex'};
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

const Icon = styled.img`
    width: ${x => x.check ? '35px' : '13px'};
    height: ${x => x.check ? '35px' : 'auto'};
    padding: ${x => x.check ? '20px 15px 20px 19px' : '0 0 0 0 '};
    border-radius: 5px;
    position: absolute;
    right: 10px;
    top: 11px;
    background-color: ${x => x.check ? (x.done ? '#8FC549' : '#EBEBEB') : ''};
    display: ${x => x.hide ? 'none' : 'auto'};

`