import { useState } from 'react';
import { useSelector } from 'react-redux'
import { FaPenAlt, FaFolderOpen } from 'react-icons/fa';
import NewContract from '../components/NewContract';
import Contracts from '../components/Contracts';

function Dashboard() {
    const [ toggle, setToggle ] = useState('closed')
    const [ className, setClassName ] = useState('btn btn-reverse btn-block')

    const { user } = useSelector((state) => state.auth)

    const onToggle = () => {
        if(toggle === 'closed') {
            setToggle('open')
            setClassName('btn btn-block')
        } else {
            setToggle('closed')
            setClassName('btn btn-reverse btn-block')
        }
    }

  return (
    <>
        <section className='heading'>
            <p>Welcome Back {user ? user.firstName : null}!</p>
        </section>

        <button onClick={onToggle} className={className}>
            <FaPenAlt /> Create New Contract
        </button>
        <div>
            { toggle === 'open' && <NewContract />}
        </div>
        <div>
            <Contracts />
        </div>
    </>
  )
}

export default Dashboard