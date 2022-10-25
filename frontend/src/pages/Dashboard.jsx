import { useState } from 'react';
import { FaPenAlt, FaFolderOpen } from 'react-icons/fa';
import NewContract from '../components/NewContract';

function Dashboard() {
    const [ toggle, setToggle ] = useState('closed')

    const onToggle = () => {
        if(toggle === 'closed') {
            setToggle('open')
        } else {
            setToggle('closed')
        }
    }
  return (
    <>
        <section className='heading'>
            <h1>
                Dashboard
            </h1>
            <p>Welcome Back!</p>
        </section>

        <button onClick={onToggle} className='btn btn-reverse btn-block'>
            <FaPenAlt /> Create New Contract
        </button>
        <div>
            { toggle === 'open' && <NewContract />}
        </div>
        {/* <button onClick={onToggle} className='btn btn-block'>
            <FaFolderOpen /> View My Contracts
        </button>
        <div>
            { toggle === 'open' && <MyContracts />}
        </div> */}
    </>
  )
}

export default Dashboard