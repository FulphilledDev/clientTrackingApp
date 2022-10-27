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
    <div className="tickets">
      <div className="ticket-headings">
        <div>Created</div>
        <div>Service</div>
        <div>Started</div>
        <div>Length</div>
        <div>Time Left</div>
        <div>Status</div>
        <div>View</div>
        {contracts.map((contract) => (
          <ContractItem key={contract._id} contract={contract}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default Contracts
