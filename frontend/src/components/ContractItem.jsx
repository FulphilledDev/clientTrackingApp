import { Link }  from 'react-router-dom'

function ContractItem({contract}) {

  
    
  return (
    <div className="contract-item">
      <div className="grid-container">
        <div className='grid-item'>{new Date(contract.createdAt).toLocaleString('en-us')}</div>
        <div className='grid-item'>{contract.recipient}</div>
        <div className='grid-item'>{contract.service}</div>
        <div className='grid-item'>{contract.started}</div>
        <div className='grid-item'>{contract.length}</div>
        <div className={`status status-${contract.status} grid-item`}>
            {contract.status}
        </div>
        <Link to={`/contract/${contract._id}`} className='btn btn-reverse btn-sm'> 
            View
        </Link>
      </div>
    </div>
  )
}

export default ContractItem