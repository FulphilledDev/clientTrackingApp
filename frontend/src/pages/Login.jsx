import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { loginAdmin, loginClient } from '../features/auth/authSlice'


function Login() {
  const [adminFormData, setAdminFormData] = useState({
    adminEmail: '',
    adminPassword: ''
  })
  const [clientFormData, setClientFormData] = useState({
    clientEmail: '',
    clientPassword: ''
  })

  const { adminEmail, adminPassword } = adminFormData
  const { clientEmail, clientPassword } = clientFormData

  const dispatch = useDispatch()

  const {admin, client, isLoading, isSuccess, message} = useSelector(state => state.auth)

  const onChangeAdmin = (e) => {
    setAdminFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onChangeClient = (e) => {
    setClientFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmitAdmin = (e) => {
    e.preventDefault()

    const adminData = {
      adminEmail,
      adminPassword
    }

    { adminData && dispatch(loginAdmin(adminData))}

  }

  const onSubmitClient = (e) => {
    e.preventDefault()

    const clientData = {
      clientEmail,
      clientPassword
    }

    { clientData && dispatch(loginAdmin(clientData))}

  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt />Login
        </h1>
      </section>

      <section className="form">
        <form onSubmit={onSubmitAdmin}>
          <div className="form-group">
            <input 
              type="email" 
              className="form-control" 
              id='adminEmail' 
              name='adminEmail'
              value={adminEmail} 
              onChange={onChangeAdmin} 
              placeholder='Email'
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              className="form-control" 
              id='adminPassword' 
              name='adminPassword'
              value={adminPassword} 
              onChange={onChangeAdmin} 
              placeholder='Password'
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

      <section className="form">
        <form onSubmit={onSubmitClient}>
          <div className="form-group">
            <input 
              type="email" 
              className="form-control" 
              id='clientEmail' 
              name='clientEmail'
              value={clientEmail} 
              onChange={onChangeClient} 
              placeholder='Email'
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              className="form-control" 
              id='clientPassword' 
              name='clientPassword'
              value={clientPassword} 
              onChange={onChangeClient} 
              placeholder='Password'
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

export default Login