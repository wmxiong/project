import  React,  {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
// import component1 from './Components/component1';


function App(){
  let [name, setName] = useState('');
  let [password, setPassword] = useState('');
  let [loggedIn, setLoggedIn] = useState(false);
  // let [validUsers, setValidUsers] = useState([{}]);
  let validUsers = 'Wendy'
  let validPassword = 'Xiong'

  function handleClick(){
    if(name === '' || password === '' ){
      alert('There is no username or no password');
    } else if (name === validUsers && validPassword){
      setLoggedIn(true);
      
    } else {
      alert('Your username or password is incorrect');
    }
    // setLoggedIn(true);
    // alert(`My name is ${name} and my password is ${password}, ${loggedIn}`);
  }

  function handleName(e){
    setName(e.target.value)
  }

  function handlePassword(e){
    setPassword(e.target.value)
}

  function handleLogOut(e){
    setLoggedIn(false);
    setName('');
    setPassword('');
  }

  if(loggedIn === false){
   return(
    <div className='App'>
      {/* <h1 className='HelloKitty'>.</h1> */}
      <input className='username' placeholder= 'Enter Your Username' onChange={handleName}/>
      <br />
      <input placeholder= 'Enter Your Password' onChange={handlePassword} type= 'password' pattern= '[0-9]' inputMode='numeric'/>
      <br />
      <button className='LoginButton' onClick={handleClick}>LOGIN</button>
      <h1>{name}</h1>
    </div>
  )
} else {
  return(
    <body>
    <div>
      {/* <h1 className= 'LoggedInUsername'>My username is: {name}</h1> */}
      <button className= 'LoggedOutButton' onClick={handleLogOut}>LOGOUT</button>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </Router>
      <h1 className= 'LoggedInPassword'> Calendar </h1>
    </div>
    </body>
  )
}

}





export default App; 