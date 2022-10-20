import { Link } from 'react-router-dom';
import { FaPen, FaCheck } from 'react-icons/fa'

function AdminDashboard() {
  return (
    <>
    <section className="heading">
        <h1>Welcome back!</h1>
    </section>

    <Link to='/new-client' className='btn btn-reverse btn-block'>
        <FaPen /> Create New Client
    </Link>
    <Link to='/clients' className='btn btn-block'>
        <FaCheck /> View My Clients
    </Link>
    </>
  )
}

export default AdminDashboard