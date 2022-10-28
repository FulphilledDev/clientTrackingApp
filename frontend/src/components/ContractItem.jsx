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
    <div>
      <div>
        <div>{contract.users.receiver}</div>
        <div className={`status status-${contract.status}`}>
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