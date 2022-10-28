import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getContracts, reset } from '../features/contracts/contractSlice'
import { toast } from 'react-toastify'
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
    <h1>
      Contracts
    </h1>
    <div className="grid-container">
        <div className='grid-item-1'>Created</div>
        <div className='grid-item-2'>Recipient</div>
        <div className='grid-item-3'>Service</div>
        <div className='grid-item-4'>Started</div>
        <div className='grid-item-5'>Length</div>
        <div className='grid-item-7'>Status</div>
        <div className='grid-item-8'>View</div>
    </div>
    {contracts.map((contract) => (
          <ContractItem key={contract._id} contract={contract}/>
        ))}
    </>
  )
}

export default Contracts
