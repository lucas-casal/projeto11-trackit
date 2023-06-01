import styled from "styled-components"
import { Contexto } from "../../Context"
import { useState, useContext, useEffect } from "react"
import React from "react"
export default function WeekDay(props){
    const contexto = useContext(Contexto)

    const [clicked, setClicked] = useState(false)
    const [array, setArray] = useState([1, 2])
    const [confere, setConfere] = useState(false)


    
        /*useEffect(atualizar, [contexto.addingHabit])*/
    function fazNada(){}
    function clicar(x){
        contexto.add(x)
        clicked ? setClicked(false) : setClicked(true)
    }


    /*function atualizar(){
       contexto.addingHabit ? '': setClicked(false);
    }*/

    return(
    <Box id={parseInt(props.id)} clicked={clicked} days={contexto.selected} onClick={(x) => contexto.add ? clicar(x) : fazNada()}>{props.day}</Box>
    )
}
const Box = styled.div`
    width: 30px;
    height: 30px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    background-color: ${x=> (x.days.includes(x.id) || x.clicked) ? '#CFCFCF' : 'white'};
    border: solid 1px #d4d4d4;
    border-radius: 4px;
    color: ${x=> (x.days.includes(x.id) || x.clicked) ? 'white' : '#d4d4d4'};
    display: flex;
    align-items: center;
    justify-content: center;

    `