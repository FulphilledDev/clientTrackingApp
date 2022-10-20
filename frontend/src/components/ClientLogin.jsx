import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { loginClient } from '../features/auth/authSlice'


function ClientLogin() {
  const [clientFormData, setClientFormData] = useState({
    clientEmail: '',
    clientPassword: ''
  })

  const { clientEmail, clientPassword } = clientFormData

  const dispatch = useDispatch()

  const { client, isLoading, isSuccess, message} = useSelector(state => state.auth)

  const onChangeClient = (e) => {
    setClientFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmitClient = (e) => {
    e.preventDefault()

    const clientData = {
      clientEmail,
      clientPassword
    }

    { clientData && dispatch(loginClient(clientData))}

  }

  return (
    <>
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

export default ClientLogin