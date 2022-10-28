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
        <section className=''>
            
                <button onClick={onToggleLogin} className='ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-cyan-700 hover:cursor-pointer'>
                    <FaSignInAlt /> Login
                </button>
                <div>
                    { toggleLogin === 'open' && <Login />}
                </div>
                
            
            
                <button onClick={onToggleRegister} className='ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-cyan-700 hover:cursor-pointer'>
                    <FaPenAlt /> Register
                </button>
                <div>
                    { toggleRegister === 'open' && <Register />}
                
                </div>
        </section>
    </>
  )
}

export default Home