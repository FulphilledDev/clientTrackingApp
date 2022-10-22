import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify'

function Register() {
    const [ formData, setFormData ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: ''
    })

    const { firstName, lastName, email, password, password2 } = formData

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
        }
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