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
    <header className='hidden items-center justify-start md:flex md:flex-1 lg:w-0'>
        {user ? (
          <>
            <Link to ='/dashboard'>
              <div className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 hover:cursor-pointer">
                Dashboard
              </div>
            </Link>
            <div>
                <Link to='/' className='ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-cyan-700 hover:cursor-pointer' onClick={onLogout}>
                  <FaSignOutAlt /> Logout
                </Link>
            </div>
          </>
        ): 
        <div>
          <Link to ='/' className='ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-cyan-700 hover:cursor-pointer'>Home</Link>
        </div>}
    </header>
  )
}

export default Header