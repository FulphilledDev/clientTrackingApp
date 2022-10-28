import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getContracts, reset } from '../features/contracts/contractSlice'
import Spinner from './Spinner'
import ContractItem from './ContractItem'

const Contracts = () => {
  const { contracts, isLoading, isSuccess } = useSelector((state) => state.contract)

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
    <div className='grid md:grid-cols-[1fr_3fr] grid-cols-1 md:grid-rows-1 grid-rows-[180px_1fr] px-4 py-2 h-full gap-2'>
      <div className='text-center'>
        <h1>
          Contracts
        </h1>
        <div className='overflow-auto border rounded-md px-2 py-2'>
          {contracts.map((contract) => (
          <ContractItem key={contract._id} contract={contract}/>
        ))}
        </div>
        
        </div>
    </div>
    </>
  )
}

export default Contracts
