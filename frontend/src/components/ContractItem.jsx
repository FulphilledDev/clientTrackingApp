import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

function ContractItem({contract, currentContract, setCurrentContract}) {
  const { user } = useSelector((state) => state.auth)
  
  const [currentContractId, setCurrentContractId] = useState('')

  const contractId = contract._id

  useEffect(()=> {
    if (currentContract !== undefined) {
      setCurrentContractId(currentContract._id)
    }
  }, [currentContract])

  return (
    <>
    {
       currentContractId === contractId ? (
        <div 
          onClick={() => {
            setCurrentContract(contract)
            setCurrentContractId(contractId)
          }
          }
          className='hover:cursor-pointer container mx-auto p-3 mb-2 rounded-md shadow-inner shadow-cyan-700 grid grid-rows-[60px_60px)]'
          >
          {contract.users.receiver.email === user.email ? (
            <div className="flex justify-center" >
              <img
              className='object-cover h-40 w-40 rounded-full' 
              src={contract.users.sender.profileImage} alt="profileImage" />
            </div>
          ) : (
            <div className="flex justify-center" >
            <img
              className='object-cover h-40 w-40 rounded-full' 
              src={contract.users.receiver.profileImage} alt="profileImage"/>
            </div>
          )}
          <div className={`status status-${contract.status}`}>
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
      ) : (
        <div 
          onClick={() =>
            {setCurrentContract(contract)
            setCurrentContractId(contractId)}
          } 
          className='hover:cursor-pointer container mx-auto p-3 mb-2 rounded-md shadow hover:shadow-lg grid grid-rows-[60px_60px)]'
          >
        {contract.users.receiver.email === user.email ? (
          <div className="flex justify-center" > 
          <img
            className='object-cover h-40 w-40 rounded-full' 
            src={contract.users.sender.profileImage} alt="profileImage"/>
          </div>
        ) : (
          <div className="flex justify-center" > 
          <img
            className='object-cover h-40 w-40 rounded-full' 
            src={contract.users.receiver.profileImage} alt="profileImage"/>
          </div>
        )}
        <div className={`status status-${contract.status}`}>
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
      )
    }
    </>
      
  )
}

export default ContractItem