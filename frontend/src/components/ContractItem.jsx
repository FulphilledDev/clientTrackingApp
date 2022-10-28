import { useState } from 'react';
import Contract from './Contract'

function ContractItem({contract}) {
  const [ toggleView, setToggleView ] = useState('closed')

  const onToggle = () => {
        if(toggleView === 'closed') {
            setToggleView('open')
        } else {
            setToggleView('closed')
        }
    }
  
    
  return (
    <div className="contract-item">
      <div className="grid-container">
        <div className='grid-item'>{new Date(contract.createdAt).toLocaleString('en-us')}</div>
        <div className='grid-item'>{contract.users.receiver}</div>
        <div className='grid-item'>{contract.details.length}</div>
        <div className={`status status-${contract.status} grid-item`}>
            {contract.status}
        </div>
        <button onClick={onToggle} className='btn btn-reverse btn-sm'> 
            View
        </button>
      </div>
      <div>
          { toggleView === 'open' && <Contract contract={contract}/>}
      </div>
    </div>
  )
}

export default ContractItem