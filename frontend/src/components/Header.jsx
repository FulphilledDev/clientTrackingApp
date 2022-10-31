import { FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
  }

  return (
    <>

        {user ? (
          <>
          <div className='flex min-h-full items-center justify-between py-4 px-4 sm:px-6 lg:px-8'>
            <Link to ='/dashboard'>
              <div className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 hover:cursor-pointer">
                Dashboard
              </div>
            </Link>
            <button 
              onClick={onLogout}
              className='flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-cyan-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-cyan-800 hover:cursor-pointer' >
                <FaSignOutAlt /> Logout
            </button>
          </div>
          </>
        ): (
          <Link to ='/'>
            <div className='flex min-h-full items-center justify-between py-4 px-4 sm:px-6 lg:px-8'>
                <div className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 hover:cursor-pointer">
                  Home
                </div>
            </div>
          </Link>
          
        )
        }
        </>
  )
}

export default Header