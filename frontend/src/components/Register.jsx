import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import Spinner from './Spinner'

function Register() {
    const [ formData, setFormData ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: ''
    })

    const { firstName, lastName, email, password, password2 } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isLoading, isSuccess, isError, message } = useSelector(state => state.auth)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        // Redirect if user isSuccess (created)
        if(isSuccess || user) {
            navigate('/dashboard')
        }

        dispatch(reset())
    }, [isError, isSuccess, message, user, navigate, useDispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(password !== password2) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                firstName,
                lastName,
                email,
                password
            }

            dispatch(register(userData))
        }
    }

    if(isLoading) {
        return <Spinner />
    }

  return (
    <>
        <section className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-8 bg-gray-100 px-5 py-5 rounded-md'>
            <p className='mt-6 text-center text-2xl font-bold tracking-tight text-gray-800'>Please create an account</p>
            <form onSubmit={onSubmit} className='mt-8 space-y-6'>
                <div className="-space-y-px rounded-md shadow-sm">
                    <input 
                        className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm'
                        type="text"
                        id='firstName'
                        name='firstName'
                        value={firstName} 
                        onChange={onChange}
                        placeholder='Enter your first name'
                        required
                    />
                    <input 
                        className='relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm'
                        type="text"
                        id='lastName'
                        name='lastName'
                        value={lastName} 
                        onChange={onChange}
                        placeholder='Enter your last name'
                        required
                    />
                    <input 
                        className='relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm'
                        type="email"
                        id='email'
                        name='email'
                        value={email} 
                        onChange={onChange}
                        placeholder='Enter your email'
                        required
                    />
                    <input 
                        className='relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm'
                        type="password"
                        id='password'
                        name='password'
                        value={password} 
                        onChange={onChange}
                        placeholder='Enter password'
                        required
                    />
                    <input 
                        className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm'
                        type="password"
                        id='password2'
                        name='password2'
                        value={password2} 
                        onChange={onChange}
                        placeholder='Confirm password'
                        required
                    />
                </div>
                <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-cyan-700 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
                    <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                        <LockClosedIcon className="h-5 w-5 text-zinc-400 group-hover:text-zinc-300" aria-hidden="true" />
                    </span>
                        Submit
                </button>
            </form>
        </div>
        </section>
    </>
  )
}

export default Register