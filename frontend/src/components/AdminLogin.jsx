import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { loginAdmin } from '../features/auth/authSlice'

function AdminLogin() {
  const [adminFormData, setAdminFormData] = useState({
    adminEmail: '',
    adminPassword: ''
  })

  const { adminEmail, adminPassword } = adminFormData

  const dispatch = useDispatch()

  const {admin, isLoading, isSuccess, message} = useSelector(state => state.auth)

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

    { adminData && dispatch(loginAdmin(adminData))}
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