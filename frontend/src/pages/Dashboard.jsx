import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { FaPenAlt, FaFolderOpen } from 'react-icons/fa'

function Dashboard() {
  return (
    <>
        <section className='heading'>
            <h1>
                Dashboard
            </h1>
            <p>Welcome Back!</p>
        </section>

        <Link to='/new-contract' className='btn btn-reverse btn-block'>
            <FaPenAlt /> Create New Contract
        </Link>
        <Link to='/contracts' className='btn btn-block'>
            <FaFolderOpen /> View My Contracts
        </Link>
    </>
  )
}

export default Dashboard