import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getContracts, reset } from '../features/contracts/contractSlice'
import { FaFolderOpen } from 'react-icons/fa';
import Spinner from './Spinner'
import ContractItem from './ContractItem'

const Contracts = ({contracts, isLoading, isSuccess, currentContract, setCurrentContract}) => {

  const dispatch = useDispatch()

  useEffect(() => {

    return(()=> {
        // if(isSuccess) {
        //   dispatch(reset())
        // }
    })
  }, [dispatch, isSuccess])

  useEffect(()=> {
    dispatch(getContracts())
  }, [dispatch])

  if (isLoading) {
    return <Spinner />
  }


  return (
    <>
      <div className='text-center'>
        
          <div className='relative fixed flex justify-center items-center rounded-t-md border-transparent bg-zinc-900 py-2 px-4 text-sm font-medium text-white focus:outline-none gap-2'>
                    <FaFolderOpen /> Contracts
          </div>
          <div className='border rounded-b-md px-2 py-2 overflow-y-auto'>
          {contracts.map((contract) => (
            <ContractItem 
              key={contract._id} 
              contract={contract} 
              currentContract={currentContract}
              setCurrentContract={setCurrentContract}
            />
          ))}
        </div>
        
        </div>
    </>
  )
}

export default Contracts
