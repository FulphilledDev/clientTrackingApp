import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getContract, reset } from '../features/contracts/contractSlice'
import Spinner from './Spinner'


function Contract({contract}) {

  return (
    <div>{contract.status}</div>
  )
}

export default Contract