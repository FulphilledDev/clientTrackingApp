import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { registerAdmin, registerClient } from '../features/auth/authSlice'


function AdminRegister() {
  const [adminFormData, setAdminFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: ''
  })

  const { firstName, lastName, email, password, password2 } = adminFormData

  const dispatch = useDispatch()

  const {admin, client, isLoading, isSuccess, message} = useSelector(state => state.auth)

  const onChange = (e) => {
    setAdminFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const adminData = {
        firstName, 
        lastName,
        email,
        password
      }

      dispatch(registerAdmin(adminData))
    }
  }

  return (
    <>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              id='firstName' 
              name='firstName'
              value={firstName} 
              onChange={onChange} 
              placeholder='First name'
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              id='lastName' 
              name='lastName'
              value={lastName} 
              onChange={onChange} 
              placeholder='Last name'
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              className="form-control" 
              id='email' 
              name='email'
              value={email} 
              onChange={onChange} 
              placeholder='Email'
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              className="form-control" 
              id='password' 
              name='password'
              value={password} 
              onChange={onChange} 
              placeholder='Password'
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              className="form-control" 
              id='password2' 
              name='password2'
              value={password2} 
              onChange={onChange} 
              placeholder='Confirm password'
              required 
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default AdminRegister