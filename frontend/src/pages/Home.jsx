import { useState } from 'react';
import { FaSignInAlt, FaPenAlt } from 'react-icons/fa'
import Login from '../components/Login'
import Register from '../components/Register'

function Home() {
    const [ toggleRegister, setToggleRegister ] = useState('closed')
    const [ toggleLogin, setToggleLogin] = useState('closed')

    const onToggleRegister = () => {
        if(toggleRegister === 'closed') {
            setToggleRegister('open')
        } else {
            setToggleRegister('closed')
        }
    }

    const onToggleLogin = () => {
        if(toggleLogin === 'closed') {
            setToggleLogin('open')
        } else {
            setToggleLogin('closed')
        }
    }
  return (
    <>
        <section className="heading">
            <h1>Hello and Welcome!</h1>
            <p>We look forward to working with you!</p>
        </section>
        <ul>
            <li>
                <button onClick={onToggleLogin} className='btn btn-reverse btn-block'>
                    <FaSignInAlt /> Login
                </button>
                <div>
                    { toggleLogin === 'open' && <Login />}
                </div>
            </li>
            <li>
                <button onClick={onToggleRegister} className='btn btn-block'>
                    <FaPenAlt /> Register
                </button>
                <div>
                    { toggleRegister === 'open' && <Register />}
                </div>
            </li>
        </ul>
    </>
  )
}

export default Home