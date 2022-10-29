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
        <section>
            <h1 className='mt-6 text-center text-4xl font-bold tracking-tight text-zinc-900'>Hello and Welcome!</h1>
            <p className='mt-2 text-center text-md text-gray-600'>We look forward to working with you!</p>
        </section>
        <section className='flex max-h-auto items-center justify-center py-4 px-4 sm:px-6 lg:px-8 gap-5'>
            <button onClick={onToggleLogin} className='inline-flex gap-1 items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-cyan-700 hover:cursor-pointer'>
                <FaSignInAlt /> Sign-In
            </button>
            <button onClick={onToggleRegister} className='inline-flex gap-1 items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-cyan-700 hover:cursor-pointer'>
                <FaPenAlt /> Register
            </button>
        </section>
        <section className='mt-6 text-center text-2x1 tracking-tight text-gray-800'>
            { toggleRegister === 'open' && <Register />}
            { toggleLogin === 'open' && <Login />}
        </section>
    </>
  )
}

export default Home