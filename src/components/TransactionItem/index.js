// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteTranaction = () => {
    deleteTransaction(id)
  }

  return (
    <li>
      <div className="transaction-table-rows-con">
        <p>{title}</p>
        <p>Rs {amount}</p>
        <p>{type}</p>
        <button
          className="delete-button"
          onClick={onDeleteTranaction}
          data-testid="delete"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default TransactionItem
