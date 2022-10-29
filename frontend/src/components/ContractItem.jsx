import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

function ContractItem({contract, setCurrentContract}) {
  const { user } = useSelector((state) => state.auth)
  
  const currentContract = useSelector((state) => state.contract.contract)
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
          {contract.users.receiver === user.email ? (
            <div>{contract.users.sender}</div>
          ) : (
            <div>{contract.users.receiver}</div>
          )}
          <div className={`status status-${contract.status}`}>
              {contract.status}
          </div>
        </div>
      ) : (
        <div 
          onClick={() =>
            {setCurrentContract(contract)
            setCurrentContractId(contractId)}
          } 
          className='hover:cursor-pointer container mx-auto p-3 mb-2 rounded-md shadow hover:shadow-lg grid grid-rows-[60px_60px)'
          >
        {contract.users.receiver === user.email ? (
          <div>{contract.users.sender}</div>
        ) : (
          <div>{contract.users.receiver}</div>
        )}
        <div className={`status status-${contract.status}`}>
            {contract.status}
        </div>
      </div>
      )
    }
    </>
      
  )
}

export default ContractItem