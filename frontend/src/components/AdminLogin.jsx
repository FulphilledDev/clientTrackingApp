import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSignInAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { loginAdmin, reset } from '../features/auth/adminAuthSlice'
import Spinner from './Spinner'

function AdminLogin() {
  const [adminFormData, setAdminFormData] = useState({
    adminEmail: '',
    adminPassword: ''
  })

  const { adminEmail, adminPassword } = adminFormData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {admin, isLoading, isSuccess, isError, message} = useSelector(state => state.auth)

  // Admin useEffect
  useEffect(() => {
    if (isError) {
        toast.error(message)
    }

    // Redirect admin when logged in
    if (isSuccess || admin) {
        navigate('/admin')
    }

    dispatch(reset())
  }, [isError, isSuccess, admin, message, navigate, dispatch])

  const onChangeAdmin = (e) => {
    setAdminFormData((prevState) => ({
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

    dispatch(loginAdmin(adminData))
  }

  if(isLoading) {
    return <Spinner />
  }

  

  return (
    <>
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
    </>

  )
}

export default AdminLogin