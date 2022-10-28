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
      <div className='text-center'>
        <h1 className='group relative flex w-full justify-center rounded-md border border-transparent bg-cyan-700 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2'>
          Contracts
        </h1>
        <div className='overflow-auto border rounded-md px-2 py-2'>
          {contracts.map((contract) => (
          <ContractItem key={contract._id} contract={contract}/>
        ))}
        </div>
        
        </div>
    </>
  )
}

export default Contracts
