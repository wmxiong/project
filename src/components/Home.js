import React from 'react'
import {Link} from 'react-router-dom'
import './HomePage.css';

function Home() {
  return (
    <div className='HomePage'>
        {/* <Link to='/'>Home</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/Register'>Register</Link>  */}
         <body>
            <header className='homeheader'>.</header>
        </body>
        <Link to='/'><button className='homebutton'>HOME</button></Link>
        <Link to='/Login'><button className= 'loginbutton'>PROFILE</button></Link>
        <Link to='/Register'><button className= 'registerbutton'>CALENDAR</button></Link>
    </div>
  )
}

export default Home