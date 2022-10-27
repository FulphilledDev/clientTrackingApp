import { Link }  from 'react-router-dom'

function ContractItem({contract}) {
    
  return (
    <div className="ticket">
        <div>{new Date(contract.createdAt).toLocaleString('en-us')}</div>
        <div>{contract.recipient}</div>
        <div >{contract.service}</div>
        <div>{contract.started}</div>
        <div>{contract.length}</div>
        <div>{contract.timeLeft}</div>
        <div className={`status status-${contract.status}`}>
            {contract.status}
        </div>
        <Link to={`/contract/${contract._id}`} className='btn btn-reverse btn-sm'> 
            View
        </Link>
    </div>
  )
}

export default ContractItem