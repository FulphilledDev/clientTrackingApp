import { FaSignOutAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import{ useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/api')
  }

  return (
    <header className='header'>
        {user ? (
          <>
            <div className="logo">
              <Link to ='/dashboard'>Dashboard</Link>
            </div>
            <div>
                <Link to='/api' className='btn' onClick={onLogout}>
                  <FaSignOutAlt /> Logout
                </Link>
            </div>
          </>
        ) : null}
    </header>
  )
}

export default Header