import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getContract, reset } from '../features/contracts/contractSlice'
import Spinner from './Spinner'


function Contract({contract, isLoading, isError}) {



  if(isLoading) {
    return <Spinner />
  }

  if(isError) {
    return <h3>Something didn't go right</h3>
  }

  return (
    <>
    <div className="hidden sm:block" aria-hidden="true">
      <div className="py-5 px-5">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Contract Information</h3>
        <div className="border-t border-gray-200" />
      </div>
    </div>
    <form className="flex min-h-full items-start justify-center py-4 px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden shadow sm:rounded-md">
        <div className="bg-white px-4 py-5 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            {/* <div className="col-span-6 sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div> */}

            <div className="col-span-6 sm:col-span-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
                {/* 
                  {contract.users.receiver === user.email ? (
                    <>{contract.users.sender}</>
                  ) : (
                    <>{contract.users.receiver}</>
                  )} 
                */}
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                value={contract.users.receiver}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label className="block text-sm font-medium text-gray-700">
                Service
              </label>
              <input
                type="text"
                name="service"
                id="service"
                value={contract.details.service}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                name="startDate"
                id="startDate"
                value={contract.details.startDate}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Completion Date
              </label>
              <input
                type="text"
                name="completionDate"
                id="completionDate"
                value={contract.details.completionDate}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label className="block text-sm font-medium text-gray-700">
                Length
              </label>
              <input
                type="text"
                name="length"
                id="length"
                value={contract.details.length}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Payment Amount
              </label>
              <input
                type="number"
                name="paymentAmount"
                id="paymentAmount"
                value={contract.details.paymentAmount}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Payment Interval
              </label>
              <input
                type="text"
                name="paymentInterval"
                id="paymentInterval"
                value={contract.details.paymentInterval}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
        {contract.status === 'pending' ?
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-yellow-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
            >
              Pending
            </button>
          </div> 
          : null}
        {contract.status === 'approved' ?
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-green-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            >
              Active
            </button>
          </div> 
          : null}
        
        {contract.status === 'denied' ?
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-red-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
            >
              Denied
            </button>
          </div> 
          : null}
        {contract.status === 'inactive' ?
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-slate-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2"
            >
              Inactive
            </button>
          </div> 
          : null}
      </div>
    </form>
    </>
  )
}

export default Contract