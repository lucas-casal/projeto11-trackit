import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../Button";
import { Contexto } from "../../Context";
import Input from "../../InputBase";
import WeekDay from "./WeekDay";
import Menu from "../../assets/Menu";
import HabitosCriados from "./HabitosCriados";

//INICIO PARA TESTES
const arrayDeHabitos = [
	{
		id: 1,
		name: "Nome do hábito 1",
		days: [1, 3, 5]
	},
	{
		id: 2,
		name: "Nome do hábito 2",
		days: [1, 3, 4, 6]
	},
    {
		id: 3,
		name: "Nome do hábito 3",
		days: [2, 4, 6]
	},
	{
		id: 4,
		name: "Nome do hábito 4",
		days: [1, 3, 5, 6]
	}

]
//FINAL PARA TESTES


export default function Habitos(props){
    const contexto = useContext(Contexto);
    const [thereIsHabits, setThereIsHabits] = useState(false)
    useEffect(() => {if (arrayDeHabitos.length > 0){ 
        setThereIsHabits(true)
    }}, [])

    return(
        <Pagina>
            <TopBar>
                <Logo> TrackIt </Logo>
                <ProfileImg src='https://static.todamateria.com.br/upload/le/ao/leaojuba-cke.jpg'></ProfileImg>
            </TopBar>
            <Header>
                <MeusHabitos>
                    Meus hábitos
                </MeusHabitos>
                <Contexto.Provider value={{margin: true, text:'+', width: '40px' , height: '35px', disabled: false}}>
                <Button onClick={props.newHabit}></Button>
                </Contexto.Provider>
            </Header>
            <HabitsContainer>
            
            <CreatingHabit addingHabit={props.addingHabit}>
                <form onSubmit={props.postHabit}>
                    <Contexto.Provider value={{marginTop: '9px', marginBot: '0' ,type: 'text', text:'nome do hábito', onChange: props.handleHabit, disabled: props.bool}}>
                    <Input required></Input>
                    </Contexto.Provider>

                    <WeekDaysSelector>
                        <Contexto.Provider value={{addingHabit: props.addingHabit, IDs: props.IDs, add: props.handleWeekDays, selected: props.selectedWeekDays}}>
                        <WeekDay id = "1" day="D" />
                        <WeekDay id = "2" day="S" />
                        <WeekDay id = "3" day="T" />
                        <WeekDay id = "4" day="Q" />
                        <WeekDay id = "5" day="Q" />
                        <WeekDay id = "6" day="S" />
                        <WeekDay id = "7" day="S" />                        
                        </Contexto.Provider>
                    </WeekDaysSelector>

                    <FormFooter>
                        <CancelForm onClick={props.reset} type='button' /*type="reset"*/ value="Cancelar"/>
                        <Contexto.Provider value={{fontSize: '16px', margin: false, text:'Salvar', width: '84px' , height: '35px', disabled: false}}>
                        <Button></Button>
                        </Contexto.Provider>
                    </FormFooter>
                </form>
                </CreatingHabit>
            
                <HabitsPlaceHolder thereIsHabits={thereIsHabits}>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </HabitsPlaceHolder> 

                {arrayDeHabitos.map((x) => {
                   return <HabitosCriados key={x.id} name={x.name} weekdays={x.days}/>
                })}
                
            </HabitsContainer>

        <Menu />
        </Pagina>
    )
}
const FormFooter = styled.div`
width: 100%;
height: 35px;
margin-top: 38px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: end;
`
const CancelForm = styled.input`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
    text-decoration-line: underline;
    margin-right: 23px;
    background-color: white;
    border: 0;
`
const WeekDaysSelector = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    width: 234px;
    height: 30px;
    margin-top: 8px;
`
const CreatingHabit = styled.div`
    display: ${x => x.addingHabit ? 'flex' : 'none'};
    width: 100%;
    max-width: 500px;
    height: 180px;
    background-color: white;
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
`
const HabitsContainer = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: initial;
    margin-top: 10px;
    padding-left: 17px;
    padding-right: 18px;
    `
const HabitsPlaceHolder = styled.p`
    width: 90%;
    height: 74px;
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 18px;
    display: ${x => x.thereIsHabits ? 'none' : 'block'}
`
const Header = styled.div`
    width: 100%;
    height: 35px;
    background-color: #F2F2F2;
    margin-top: 98px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    font-size: 23px;
    color: #126BA5;
    margin-left: 18px;
    align-self: center;
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
`

const Logo = styled.p`
    font-family: 'Playball';
    font-size: 39px;
    line-height: 49px;
    color: white;
    margin-left: 18px;
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

`