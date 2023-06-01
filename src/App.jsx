import { useState } from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Cadastro from './pages/Cadastro/Cadastro'
import Habitos from './pages/Habitos/Habitos'
import { useNavigate } from 'react-router-dom'

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [bool, setBool] = useState(false);
  const [habitsArray, setHabitsArray] = useState([]);
  const [newHabit, setNewHabit] = useState('');
  const [selectedWeekDays, setSelectedWeekDays] = useState([]);
  const [selectedIDs, setSelectedIDs] = useState([]);
  const [addingHabit, setAddingHabit] = useState(false)    
  
  function handleEmail(x){
    const wrote = x.target.value;
    setEmail(wrote);
  }

  function handlePassword(x){
    const wrote = x.target.value;
    setPassword(wrote);
  }

  function handleName(x){
    const wrote = x.target.value;
    setName(wrote);
  }

  function handleImage(x){
    const wrote = x.target.value;
    setImage(wrote);
  }

  function sendLogin(event){
    event.preventDefault();
    const x = {email: email, password: password}
    console.log('O login enviado foi: \n Login: ' + x.email + "\n Senha: " + x.password);
    setBool(true)

  }

  function sendRegister(event){
    event.preventDefault();
    const x = {email: email, password: password, name: name, image: image}
    console.log('O login enviado foi: \n Login: ' + x.email + "\n Senha: " + x.password + "\n Nome: " + x.name + "\n Foto: " + x.image)
    setBool(true)

  }

  function resetInputs(){
    setEmail('')
    setImage('')
    setName('')
    setPassword('')
  }

  function handleHabit(x){
    const wrote = x.target.value;
    setNewHabit(wrote);
  }

  function handleWeekDays(x){
    const obj = {weekday: x.target.innerText , id: x.target.id};
    
    if (selectedIDs.includes(x.target.id)){
      
      selectedIDs.splice(selectedIDs.indexOf(x.target.id), 1)
      selectedWeekDays.splice(selectedWeekDays.indexOf(x.target.innerText), 1);
      console.log(selectedWeekDays)
      console.log(selectedIDs)
    } else{
      const newArrayID = [...selectedIDs, x.target.id]
      const newArrayDay = [...selectedWeekDays, x.target.innerText];
      setSelectedWeekDays(newArrayDay);
      setSelectedIDs(newArrayID);
      console.log(newArrayDay)
      console.log(newArrayID)
    }
  }

  function resetAddingHabit(){
    /*setSelectedWeekDays([]);
    setSelectedIDs([]);*/
    setAddingHabit(false);
  }

  function createNewHabit(){
      setAddingHabit(true);

  }

  function postHabit(e){

    e.preventDefault(); //apagar antes de entregar
    if (selectedWeekDays.length > 0){
      console.log(
      'Foi enviado com sucesso: \n IDs: ' + selectedIDs + '\n Weekdays: '+selectedWeekDays+'\n .')
    } else{
      alert('Faltou selecionar os dias da semana!')
    }
  }

  return (
    <> 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage resetInputs={resetInputs} bool={bool} handleEmail={handleEmail} handlePassword={handlePassword} sendLogin={sendLogin} />}></Route>
      <Route path="/cadastro" element={<Cadastro resetInputs={resetInputs} bool={bool} handleEmail={handleEmail} handlePassword={handlePassword} handleName={handleName} handleImage={handleImage} sendRegister={sendRegister}/>}></Route>
      <Route path="/habitos" element={<Habitos postHabit={postHabit} newHabit={createNewHabit} addingHabit={addingHabit} reset={resetAddingHabit} IDs={selectedIDs} handleWeekDays={handleWeekDays} selectedWeekDays={selectedWeekDays} handleHabit={handleHabit} habitsArray={habitsArray} setHabitsArray={setHabitsArray} resetInputs={resetInputs} bool={bool} handleEmail={handleEmail} handlePassword={handlePassword} handleName={handleName} handleImage={handleImage} sendRegister={sendRegister}/>}></Route>
    </Routes>
  </BrowserRouter>
    </>
  )
}


