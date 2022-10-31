import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { modifyContract, approveContract, denyContract } from '../features/contracts/contractSlice'
import Moment from 'react-moment'


function Contract({contract}) {
  const [ editMode, setEditMode ] = useState(false)

  // For modifying contract, this populates current information into respective fields
  const [ receiver, setReceiver ] = useState(contract.users.sender.email)
  const [ service, setService ] = useState(contract.details.service)
  const [ startDate, setStartDate ] = useState(contract.details.startDate)
  const [ completionDate, setCompletionDate ] = useState(contract.details.completionDate)
  const [ paymentInterval, setPaymentInterval ] = useState(contract.details.paymentInterval)
  const [ paymentAmount, setPaymentAmount ] = useState(contract.details.paymentAmount)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)


  // For Moment display in UI
  const dateNow = Date.now()
  const filterIn = (d) => d.slice(2)

  // Approve Contract Submission
  const onApproveContract = (e) => {
      if(window.confirm('Approve Contract?')) {
        dispatch(approveContract(
        {
          id: contract._id,
          status: "approve"
        }
      ))
    }
    navigate('/dashboard')
  }

  // Deny Contract Submission
  const onDenyContract = (e) => {
      if(window.confirm('Deny Contract?')) {
        dispatch(denyContract(
          {
            id: contract._id,
            status: "deny"
          }
        ))
      }
    navigate('/dashboard')
  }


  // Modify Contract Submission
  const onModifySubmit = (e) => {
    e.preventDefault()

    dispatch(modifyContract(
      {
        id: contract._id,
        receiver: receiver,
        service: service, 
        startDate: startDate, 
        completionDate: completionDate, 
        paymentInterval: paymentInterval, 
        paymentAmount: paymentAmount
      }
    ))
  }

  return ( 
  <>
    { !editMode ? 
      (<>
    <div className="hidden sm:block" aria-hidden="true">
      <div className="py-5 px-5">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Contract Information: {contract._id}</h3>
        <div className="border-t border-gray-200" />
      </div>
    </div>
    <section 
      className="flex min-h-full items-start justify-center py-4 px-4 sm:px-6 lg:px-8">
        <div className="shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <span className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm">{contract.users.receiver.email === user.email ? (
                      <>{contract.users.sender.email}</>
                    ) : (
                      <>{contract.users.receiver.email}</>
                    )} </span>
              </div>
              <div className="col-span-3 text-center">
                <label className="block text-sm font-medium text-gray-700">
                    Current Status
                </label>
                <div>
                  {contract.status === 'pending' ?
                      <span
                        className="mt-1 block w-full sm:text-sm text-yellow-700 font-extrabold"
                      >
                        Pending
                      </span>
                    : null}
                  {contract.status === 'approve' ?
                      <span
                        className="mt-1 block w-full sm:text-sm text-green-700 font-extrabold"
                      >
                        Active
                      </span>
                    : null}
                  {contract.status === 'deny' ?
                      <span
                        className="mt-1 block w-full sm:text-sm text-red-700 font-extrabold"
                      >
                        Denied
                      </span>
                    : null}
                </div>
              </div>

              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Service
                </label>
                <span className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                > {service} </span>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Start Date
                </label>
                <span className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                >{startDate.split('T')[0]}</span>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Completion Date
                </label>
                <span className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                > {completionDate.split('T')[0]} </span>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label className='block text-sm font-medium text-gray-700'>Length of Contract</label>
                  <span className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm">
                      <Moment to={completionDate} filter={filterIn}>{startDate}</Moment>
                  </span>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Time Left
                </label>
                <span className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                ><Moment to={completionDate} filter={filterIn}>{dateNow}</Moment></span>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Payment Amount
                </label>
                <span className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                >
                  {paymentAmount}
                </span>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Payment Interval
                </label>
                <span className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                >
                  {paymentInterval}
                </span>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Update Status
                </label>
                <div className="block flex justify-around w-full mt-1 focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm gap-5"
                >
                  <button
                    onClick={onApproveContract}
                    className="mt-1 block w-full sm:text-sm text-green-700 font-extrabold"
                  >
                    Approve
                  </button>
                  <button
                    onClick={onDenyContract}
                    className="mt-1 block w-full sm:text-sm text-red-700 font-extrabold"
                  >
                    Deny
                  </button>
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex justify-end">
                <button
                    onClick={() => setEditMode(true)}
                    className="justify-center rounded-md border border-transparent bg-gray-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
                  >
                    Modify
                  </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    ) : (
      ///////////////////////////////
      //
      // MODIFY CONTRACT in Edit Mode
      //
      ///////////////////////////////
      <>
    <div className="hidden sm:block" aria-hidden="true">
      <div className="py-5 px-5">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Modify Contract: {contract._id}</h3>
        <div className="border-t border-gray-200" />
      </div>
    </div>
    <form onSubmit={onModifySubmit} className="flex min-h-full items-start justify-center py-4 px-4 sm:px-6 lg:px-8">
      <div className="shadow sm:rounded-md">
        <div className="bg-white px-4 py-5 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <span className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
              >{contract.users.receiver === user.email ? (
                    <>{contract.users.sender.email}</>
                  ) : (
                    <>{contract.users.receiver.email}</>
                  )} </span>
            </div>
            <div className="col-span-3 text-center">
                <label className="block text-sm font-medium text-gray-700">
                    Current Status
                </label>
                <div>
                  {contract.status === 'pending' ?
                      <span
                        className="mt-1 block w-full focus:border-cyan-500 sm:text-sm text-yellow-700 font-extrabold"
                      >
                        Pending
                      </span>
                    : null}
                  {contract.status === 'approve' ?
                      <span
                        className="mt-1 block w-full focus:border-cyan-500 sm:text-sm text-green-700 font-extrabold"
                      >
                        Active
                      </span>
                    : null}
                  
                  {contract.status === 'deny' ?
                      <span
                        className="mt-1 block w-full focus:border-cyan-500 sm:text-sm text-red-700 font-extrabold"
                      >
                        Denied
                      </span>
                    : null}
                </div>
              </div>
           

            <div className="col-span-6">
              <label className="block text-sm font-medium text-gray-700">
                Service
              </label>
              <select
                type="text"
                name="service"
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
              >
                <option value="Nutrition Coaching">Nutrition Coaching</option>
              <option value="Life Performance Coaching">Life Performance Coaching</option>
              <option value="Mental Performance Coaching">Mental Performance Coaching</option>
              </select>
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type='date'
                value={startDate.split('T')[0]}
                onChange={(e) => setStartDate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Completion Date
              </label>
              <input
                type='date'
                value={completionDate.split('T')[0]}
                onChange={(e) => setCompletionDate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
              />
            </div>

            <div className='col-span-6'>
              <label className='block text-sm font-medium text-gray-700'>Length of Contract</label>
              <div className='flex gap-3'>
                <div className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm">
                    <Moment to={completionDate} filter={filterIn}>{startDate}</Moment>
                </div>
              </div>
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Payment Amount
              </label>
              <input
                type='number'
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
              />
            </div>
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Payment Interval
              </label>
              <select
                type="text"
                value={paymentInterval}
                onChange={(e) => setPaymentInterval(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
              ><option value="Weekly">Weekly</option>
                <option value="Bi-Weekly">Bi-Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Bi-Yearly">Bi-Yearly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-zinc-900 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 mt-5"
            >
              Request Modifications
            </button>
          </div>
        </div>
      </div>
    </form>
    </>
    )}
    </>
  )
}

export default Contract