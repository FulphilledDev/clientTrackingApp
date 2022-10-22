import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
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
    }, [isError, isSuccess, user, message, navigate, useDispatch])

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
        <section className='heading'>
            <h1>
                <FaUser /> Register
            </h1>
            <p>Please create an account</p>
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input 
                        className='form-control'
                        type="text"
                        id='firstName'
                        name='firstName'
                        value={firstName} 
                        onChange={onChange}
                        placeholder='Enter your first name'
                        required
                    />
                    <input 
                        className='form-control'
                        type="text"
                        id='lastName'
                        name='lastName'
                        value={lastName} 
                        onChange={onChange}
                        placeholder='Enter your last name'
                        required
                    />
                    <input 
                        className='form-control'
                        type="email"
                        id='email'
                        name='email'
                        value={email} 
                        onChange={onChange}
                        placeholder='Enter your email'
                        required
                    />
                    <input 
                        className='form-control'
                        type="password"
                        id='password'
                        name='password'
                        value={password} 
                        onChange={onChange}
                        placeholder='Enter password'
                        required
                    />
                    <input 
                        className='form-control'
                        type="password"
                        id='password2'
                        name='password2'
                        value={password2} 
                        onChange={onChange}
                        placeholder='Confirm password'
                        required
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-block">Submit</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Register