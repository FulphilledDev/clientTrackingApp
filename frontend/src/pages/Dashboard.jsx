import { useState } from 'react';
import { useSelector } from 'react-redux'
import { FaPenAlt, FaFolderOpen } from 'react-icons/fa';
import NewContract from '../components/NewContract';
import Contracts from '../components/Contracts';

function Dashboard() {
    const [ toggle, setToggle ] = useState('closed')
    const [ toggleContracts, setToggleContracts] = useState('closed')

    const { user } = useSelector((state) => state.auth)

    const onToggle = () => {
        if(toggle === 'closed') {
            setToggle('open')
        } else {
            setToggle('closed')
        }
    }

    const onToggleContracts = () => {
        if(toggleContracts === 'closed') {
            setToggleContracts('open')
        } else {
            setToggleContracts('closed')
        }
    }

  return (
    <>
        <section className='heading'>
            <h1>
                Dashboard
            </h1>
            <p>Welcome Back {user ? user.firstName : null}!</p>
        </section>

        <button onClick={onToggle} className='btn btn-reverse btn-block'>
            <FaPenAlt /> Create New Contract
        </button>
        <div>
            { toggle === 'open' && <NewContract />}
        </div>
        <button onClick={onToggleContracts} className='btn btn-block'>
            <FaFolderOpen /> View My Contracts
        </button>
        <div>
            { toggleContracts === 'open' && <Contracts />}
        </div>
    </>
  )
}

export default Dashboard