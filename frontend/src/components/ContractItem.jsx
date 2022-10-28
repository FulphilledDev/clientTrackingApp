import { useState } from 'react';

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
        <button onClick={onToggle} className='rounded-md border border-transparent bg-cyan-700 py-1 px-2 text-sm font-medium text-white hover:bg-cyan-600'> 
            View
        </button>
      </div>
    </div>
  )
}

export default ContractItem