import { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaPenAlt, FaHandPaper } from 'react-icons/fa'
import AdminRegister from '../components/AdminRegister';
import AdminLogin from '../components/AdminLogin';


function Home() {
  const [ showAdminBtns, setShowAdminBtns ] = useState(false)
  const [ showAdminLoginForm, setShowAdminLoginForm ] = useState(false)
  const [ showAdminRegisterForm, setShowAdminRegisterForm ] = useState(false)
  const [ showClientBtns, setShowClientBtns ] = useState(false)
  const [ showClientLoginForm, setShowClientLoginForm ] = useState(false)

  // Admin Buttons Toggle
  const toggleAdminBtns = ()=> {
    if (showAdminBtns === false) {
      setShowAdminBtns(true)
    } else {
      setShowAdminBtns(false)
    }
  }

  // Admin Login Toggle
  const toggleAdminLoginForm = () => {
    if (showAdminLoginForm === false) {
      setShowAdminLoginForm(true)
    } else {
      setShowAdminLoginForm(false)
    }
  }

  // Admin Register Toggle
  const toggleAdminRegisterForm = () => {
    if (showAdminRegisterForm === false) {
      setShowAdminRegisterForm(true)
    } else {
      setShowAdminRegisterForm(false)
    }
  }

  // Client Buttons Toggle
  const toggleClientBtns = ()=> {
    if (showClientBtns === false) {
      setShowClientBtns(true)
    } else {
      setShowClientBtns(false)
    }
  }

  // Client Login Toggle
  const toggleClientLoginForm = () => {
    if (showClientLoginForm === false) {
      setShowClientLoginForm(true)
    } else {
      setShowClientLoginForm(false)
    }
  }

  // Client Register Toggle
  

  return (
    <>
      <section className="heading">
        <h1>Hello and Welcome!</h1>
        <h4>Are you a client or coach?</h4>
        <p>Please choose one below</p>
      </section>

      <button onClick={toggleAdminBtns} className='btn btn-block'>
        <FaPenAlt />Admin
      </button>
      { showAdminBtns 
        ? (<>
          <button onClick={toggleAdminLoginForm} className='btn btn-reverse'>
            Login
          </button>
          <button onClick={toggleAdminRegisterForm} className='btn btn-reverse'>
            Register
          </button>

          { showAdminLoginForm ? <AdminLogin /> : null}
          { showAdminRegisterForm ? <AdminRegister /> : null}
        </>) 
        : null
      }

      <button onClick={toggleClientBtns} className='btn btn-block btn-reverse'>
        <FaHandPaper />Client
      </button>
      { showClientBtns 
        ? (<>
          <button onClick={toggleClientLoginForm} className='btn'>
            Login
          </button>
          <button className='btn'>
            Register
          </button>

          { showClientLoginForm ? <ClientLogin /> : null}
        </>) 
        : null
      }
    </>
  )
}



export default Home