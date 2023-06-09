import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Contexto } from "../../Context";
import Menu from "../../Menu";
import HabitosCriados from "../Habitos/HabitosCriados";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import { UserInfoContext } from "../../contextsfolder/UserInfoContext";
import TopBar from "../../TopBar";
const arrayDiaDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

export default function Hoje(props){
    const userContexto = useContext(UserInfoContext)
    const navigate = useNavigate();
    const [arrayDeHabitos, setArrayDeHabitos] = useState([])
    const [hide, setHide] = useState('')
    const [Dsemana, setDsemana] = useState('')
    const [Dmes, setDmes] = useState('')
    const [mes, setMes] = useState('')
    const [doneHabits, setDoneHabits] = useState('');
    const [arrayDoneHabitsID, setArrayDoneHabitsID] = useState([])
    const [bool, setBool] = useState(false);

    useEffect(() => {
        const diaDaSemana = dayjs().get('day');
        const mesRecebido =( dayjs().get('month') + 1);
        setDsemana(arrayDiaDaSemana[diaDaSemana]);
        dayjs().get('date') < 10 ? setDmes( '0' + dayjs().get('date')) : setDmes(dayjs().get('date'))
        mesRecebido < 10 ? setMes( '0' + mesRecebido) : setMes(mesRecebido)
    }, [])


    function definePercentageDone(array){
        let contador = 0;
        array.map(x => {
            x.done ? contador++ : ''
        })
        setDoneHabits(parseFloat(contador/array.length).toFixed(2) * 100)
    }




    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
            headers: {
              'Authorization': `Bearer ${userContexto.token}`
            }
          });
        promise.then(res => {
            console.log(res);
            setArrayDeHabitos(res.data)
            setHide('hide')
            definePercentageDone(res.data)
            setArrayDoneHabitsID([])
            
            res.data.map(x => {
                if(x.done){
                    arrayDoneHabitsID.push(x.id);
                }

                setArrayDoneHabitsID(arrayDoneHabitsID)
            })
        }) .catch(res => console.log(res)) .finally(res => {
            props.setReload(false)
        })
    
    }, [props.reload,userContexto.token])

    function madeTheHabit(x){
        const habitID = x.target.id;
        setBool(true)
        if (!bool){
            if (arrayDoneHabitsID.includes(parseInt(habitID))){
                const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/"+habitID+"/uncheck", {}, {
                headers: {
                    'Authorization': `Bearer ${userContexto.token}`
                }
                });
                promise.then(res => {
                    console.log(res);
                    props.setReload(true)
                    


                }) .catch(res => {
                console.log(res);
                
                }) .finally(() => {setBool(false); console.log('bul voltou')})
            } else{
                const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/"+habitID+"/check", {}, {
                headers: {
                    'Authorization': `Bearer ${userContexto.token}`
                }
                });
                promise.then(res => {
                    console.log(res);
                    props.setReload(true)
                    

                }) .catch(res => {
                console.log(res);
   
                }) .finally(() => {setBool(false); console.log('bul voltou')})
            } 
        }else {
            console.log('muito rápido!')
        }
    }

    return(
        <Pagina>
            <TopBar />

            <Header>
                <MeusHabitos data-test='today'>
                    {Dsemana}, {Dmes}/{mes}
                </MeusHabitos>
                <DayStatus green={doneHabits} data-test='today-counter'>
                    {doneHabits > 0 ? doneHabits + '% dos hábitos concluídos' : 'Nenhum hábito concluído ainda'}
                </DayStatus>
            </Header>
            <HabitsContainer>
                {arrayDeHabitos.map((x) => {
                   return <HabitosCriados datatestCONTAINER={'today-habit-container'} datatestNAME={'today-habit-name'} onClick={madeTheHabit} key={x.id} id={x.id} name={x.name} highestSequence={x.highestSequence} currentSequence={x.currentSequence} record={x.record} done={x.done} weekdays={hide}/>
                })}
                
                

            </HabitsContainer>


 
        <Menu reload={props.reload} setReload={props.setReload}/>

        </Pagina>
    )
}
const DayStatus = styled.h2`
    width: 100%;
    height: 22px;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: ${x => x.green > 0 ? '#8FC549' : '#BABABA'};
`
const HabitsContainer = styled.div`
    box-sizing: border-box;
    height: auto;
    width: 100%;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: initial;
    margin-top: 10px;
    padding-left: 17px;
    padding-right: 18px;
    margin-bottom: 100px;

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

const MeusHabitos = styled.h1`
    font-family: 'Lexend Deca', sans-serif;
    width: 100%;
    font-size: 23px;
    color: #126BA5;
    align-self: center;
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