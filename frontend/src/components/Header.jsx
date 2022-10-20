import { FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutAdmin , reset } from '../features/auth/adminAuthSlice'
import { logoutClient } from '../features/auth/clientAuthSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { admin } = useSelector((state) => state.auth)
  const { client } = useSelector((state) => state.auth)

  const onLogoutAdmin = () => {
    dispatch(logoutAdmin())
    dispatch(reset())
    navigate('/')
  }

  const onLogoutClient = () => {
    dispatch(logoutClient())
  }

  return (
    <header className='header'>
        <div className="logo">
            <Link to ='/'>Home</Link>
        </div>
        <ul>
            { admin ? 
              (<li>
                <button className='btn' onClick={onLogoutAdmin}><FaSignOutAlt /> Logout</button>
              </li>)
              : null
            }
            { client ?
              (<li>
                <button className='btn' onClick={onLogoutClient}><FaSignOutAlt /> Logout</button>
              </li>)
              : null 
            }
        </ul>
    </header>
  )
}

export default Header