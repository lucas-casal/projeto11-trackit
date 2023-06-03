import { useState } from 'react'
import { Navigate, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Cadastro from './pages/Cadastro/Cadastro'
import Habitos from './pages/Habitos/Habitos'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import Hoje from './pages/Hoje/Hoje'
axios.defaults.headers.common['Authorization'] = 'bv0Ks8i80MPdXuLLvCVzJc8f';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFB, setLoginFB] = useState('')
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [token, setToken] = useState('');
  const [registerFB, setRegisterFB] = useState('')
  const [bool, setBool] = useState(false);
  const [habitsArray, setHabitsArray] = useState([]);
  const [newHabit, setNewHabit] = useState('');
  const [selectedWeekDays, setSelectedWeekDays] = useState([]);
  const [selectedIDs, setSelectedIDs] = useState([]);
  const [addingHabit, setAddingHabit] = useState(false) 
  const [reload, setReload] = useState(false);  
  

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

    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {email: email, password: password});
    promise.then(res => {
        console.log(res);
        setLoginFB(true)
        setBool(false)
        setEmail(res.data.email)
        setName(res.data.name)
        setImage(res.data.image)
        setToken(res.data.token)

    }) .catch(res => {
      console.log(res)
      setLoginFB(false)
      alert(res.response.data.message === 'Campo "body" inválido!'? 'O e-mail digitado é inválido': res.response.data.message )
      setBool(false)
     
    }) .finally()

  }

  function sendRegister(event){
    event.preventDefault();
    const x = {email: email, password: password, name: name, image: image}
    console.log('O login enviado foi: \n Login: ' + x.email + "\n Senha: " + x.password + "\n Nome: " + x.name + "\n Foto: " + x.image)
    setBool(true)

    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {email: email, name: name, image: image, password: password});
    promise.then(res => {
        console.log(res);
        setRegisterFB(true);
        setBool(false)

    }) .catch(res => {
      console.log(res);
      setRegisterFB(false);
      alert(res.response.data.message === 'Campo "body" inválido!'? 'O e-mail digitado é inválido': res.response.data.message )
      setBool(false)
    })
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
      const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
      {
          name: newHabit,
          days: selectedIDs
      },
      {headers: {
          'Authorization': `Bearer ${token}`
        }
      }) 
      promise.then(res => {
        console.log(res);
        setReload(true);
        resetAddingHabit();
        setSelectedWeekDays([]);
        setSelectedIDs([]);
        setNewHabit('');
      }).catch(res => alert(res.response.data.message))

    } else{
      alert('Faltou selecionar os dias da semana!')
    }


console.log(selectedWeekDays)
console.log(newHabit)
  }

  return (
    <> 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage setRegisterFB={setRegisterFB} login={loginFB} resetInputs={resetInputs} bool={bool} handleEmail={handleEmail} handlePassword={handlePassword} sendLogin={sendLogin} />}></Route>
      <Route path="/cadastro" element={<Cadastro cadastro={registerFB} resetInputs={resetInputs} bool={bool} handleEmail={handleEmail} handlePassword={handlePassword} handleName={handleName} handleImage={handleImage} sendRegister={sendRegister}/>}></Route>
      <Route path="/habitos" element={<Habitos setReload={setReload} reload={reload} setNewHabit={setNewHabit} image={image} token={token} setLoginFB={setLoginFB} postHabit={postHabit} newHabit={newHabit} createNewHabit={createNewHabit} addingHabit={addingHabit} reset={resetAddingHabit} IDs={selectedIDs} handleWeekDays={handleWeekDays} selectedWeekDays={selectedWeekDays} handleHabit={handleHabit} habitsArray={habitsArray} setHabitsArray={setHabitsArray} resetInputs={resetInputs} bool={bool} handleEmail={handleEmail} handlePassword={handlePassword} handleName={handleName} handleImage={handleImage} sendRegister={sendRegister}/>}></Route>
      <Route path="/hoje" element={<Hoje setReload={setReload} reload={reload} setNewHabit={setNewHabit} image={image} token={token} setLoginFB={setLoginFB} postHabit={postHabit} newHabit={newHabit} createNewHabit={createNewHabit} addingHabit={addingHabit} reset={resetAddingHabit} IDs={selectedIDs} handleWeekDays={handleWeekDays} selectedWeekDays={selectedWeekDays} handleHabit={handleHabit} habitsArray={habitsArray} setHabitsArray={setHabitsArray} resetInputs={resetInputs} bool={bool} handleEmail={handleEmail} handlePassword={handlePassword} handleName={handleName} handleImage={handleImage} sendRegister={sendRegister}/>}></Route>
    </Routes>
  </BrowserRouter>
    </>
  )
}


