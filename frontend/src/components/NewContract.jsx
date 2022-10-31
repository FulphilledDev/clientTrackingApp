import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createContract } from '../features/contracts/contractSlice'
import Spinner from './Spinner'
import Moment from 'react-moment'


function NewContract() {
  const { user } = useSelector((state) => state.auth)
  const { contract, isLoading, isError, isSuccess, message} = useSelector((state) => state.contract)

  const [ receiver, setReceiver ] = useState('')
  const [ service, setService ] = useState('Nutrition Coaching')
  const [ startDate, setStartDate ] = useState('')
  const [ completionDate, setCompletionDate ] = useState('')
  const [ paymentInterval, setPaymentInterval ] = useState('Monthly')
  const [ paymentAmount, setPaymentAmount ] = useState(Number)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=> {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess && contract) {
      navigate('/dashboard')
    }

    if (!contract) {
      toast.error('Oops! Something went wrong.')
    }

    
  }, [ isError, isSuccess, message, contract, navigate, dispatch])


  // For Moment display in UI
  const dateNow = Date.now()
  const filterIn = (d) => d.slice(2)
  
  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createContract(
      {
        receiver,
        service, 
        startDate, 
        completionDate, 
        paymentInterval, 
        paymentAmount, 
      }
    ))

    setReceiver('')
    setService('Nutrition Coaching')
    setStartDate('')
    setCompletionDate('')
    setPaymentInterval('Monthly')
    setPaymentAmount(0)
  }

  if(isLoading) {
    return <Spinner />
  }


  return (
    <>
    <section className='flex min-h-full items-center justify-center py-4 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-1'>
        <p className='mt-6 text-center text-2xl font-bold tracking-tight text-gray-800'>Please fill out the form below</p>
        <form onSubmit={onSubmit} className='mt-8 space-y-6'>
          <div>
            <label htmlFor="sender">Contractor Email</label>
            <input 
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm" 
              type='email' 
              value={user.email} 
              disabled/>
          </div>
          <div>
            <label htmlFor="receiver">Recipient Email</label>
            <input 
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm" 
              type='email'
              placeholder='example@example.com' 
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="service">Service</label>
            <select 
              className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm'
              name="service" 
              id="service" 
              value={service} 
              onChange={(e) => setService(e.target.value)}>
              <option value="Nutrition Coaching">Nutrition Coaching</option>
              <option value="Life Performance Coaching">Life Performance Coaching</option>
              <option value="Mental Performance Coaching">Mental Performance Coaching</option>
            </select>
          </div>
          <div>
            <label htmlFor="startDate">Start Date</label>
            <input 
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm" 
              type='date' 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}/>
          </div>
          <div>
            <label>Completion Date</label>
            <input 
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm" 
              type='date' 
              value={completionDate}
              onChange={(e) => setCompletionDate(e.target.value)}/>
          </div>
          <div>
            <label className='block'>Length of Contract</label>
            <div className='flex gap-3'>
              <div className="relative appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm">
                  <Moment to={completionDate} filter={filterIn}>{startDate}</Moment>
              </div>
            </div>
          </div>
          <div>
            <label>Payment Amount (USD)</label>
            <input 
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm" 
              type='number' 
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              />
          </div>
          <div >
            <label>Payment Interval</label>
            <select 
            className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm'
              name="paymentInterval" 
              id="paymentInterval" 
              value={paymentInterval} 
              onChange={(e) => setPaymentInterval(e.target.value)}>
                <option value="Weekly">Weekly</option>
                <option value="Bi-Weekly">Bi-Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Bi-Yearly">Bi-Yearly</option>
                <option value="Yearly">Yearly</option>
            </select>
          </div>
          <div>
            <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-zinc-900 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">Submit</button>
          </div>
        </form>
      </div>
    </section>
    </>
  )
}

export default NewContract