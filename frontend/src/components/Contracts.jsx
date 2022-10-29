import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getContracts, reset } from '../features/contracts/contractSlice'
import Spinner from './Spinner'
import ContractItem from './ContractItem'

const Contracts = ({contracts, contract, isLoading, isSuccess, setCurrentContract}) => {

  const dispatch = useDispatch()

  useEffect(() => {

    return(()=> {
        if(isSuccess) {
          dispatch(reset())
        }
    })
  }, [dispatch, isSuccess])

  useEffect(()=> {
    dispatch(getContracts())
  }, dispatch)

  if (isLoading) {
    return <Spinner />
  }


  return (
    <>
      <div className='text-center overflow-y-scroll'>
        <div className='border rounded-md px-2 py-2'>
          {contracts.map((contract) => (
          <ContractItem 
            key={contract._id} 
            contract={contract} 
            setCurrentContract={setCurrentContract}
          />
        ))}
        </div>
        
        </div>
    </>
  )
}

export default Contracts
