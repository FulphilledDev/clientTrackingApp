import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { FaPenAlt } from 'react-icons/fa';
import NewContract from '../components/NewContract';
import Contracts from '../components/Contracts';
import Contract from '../components/Contract';

function Dashboard() {
    const [ toggle, setToggle ] = useState('closed')
    const [ className, setClassName ] = useState('group relative flex w-full justify-center rounded-md border border-transparent bg-cyan-700 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2')

    const { contracts, contract,  isLoading, isSuccess } = useSelector((state) => state.contract)

    const { user } = useSelector((state) => state.auth)
    const [currentContract, setCurrentContract] = useState(contract)

    useEffect(() => {
        setCurrentContract(contract)
    }, [contract])

    const onToggle = () => {
        if(toggle === 'closed') {
            setToggle('open')
            setClassName('group relative flex w-full justify-center rounded-md border border-transparent bg-zinc-700 py-2 px-4 text-sm font-medium text-white hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2')
        } else {
            setToggle('closed')
            setClassName('group relative flex w-full justify-center rounded-md border border-transparent bg-cyan-700 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2')
        }
    }

  return (
    <>
        <section className='grid md:grid-cols-[1fr_3fr] grid-cols-1 md:grid-rows-1 grid-rows-[180px_1fr] px-4 py-2 h-full gap-2 border rounded-lg'>
            <div className='flex flex-col gap-2'>
                <button 
                    onClick={() => setCurrentContract({})} 
                    className='group relative flex w-full justify-center items-center rounded-md border border-transparent bg-cyan-700 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 gap-2'>
                    <FaPenAlt /><span>New Contract</span>
                </button>
                <Contracts 
                    contracts={contracts}
                    contract={contract}
                    isLoading={isLoading}
                    isSuccess={isSuccess}
                    currentContract={currentContract}
                    setCurrentContract={setCurrentContract}
                />
            </div>
            <div className='grid grid-rows-1'>
            {!currentContract._id ? (
                <div className='border rounded-md h-full py-2 overflow-auto'>
                    <NewContract />
                </div>
            ) : (
                <div className='border rounded-md h-full py-2 overflow-auto'>
                    <Contract key={currentContract._id} contract={currentContract}/>
                </div>
            )}
            </div>
        </section>
        
    </>
  )
}

export default Dashboard