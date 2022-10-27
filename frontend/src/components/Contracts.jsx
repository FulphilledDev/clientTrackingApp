import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getContracts, reset } from '../features/contracts/contractSlice'
import { toast } from 'react-toastify'
import Spinner from './Spinner'

const Contracts = () => {
  const { contracts, isLoading, isSuccess } = useSelector((state) => state.contract)

  const dispatch = useDispatch()

  useEffect(() => {
    // For displays toast.success even when the startDate is not correct via model
    if(isSuccess && contracts) {
      dispatch(reset())
      toast.success('Got all contracts!')
    }

    if (!contracts) {
      toast.error('Oops! Something went wrong.')
    }
  }, [dispatch, isSuccess])

  useEffect(()=> {
    dispatch(getContracts())
  }, dispatch)

  if (isLoading) {
    return <Spinner />
  }


  return (
    <h1>
      Contracts
    </h1>
  )
}

export default Contracts
