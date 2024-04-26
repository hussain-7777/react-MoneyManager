// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <ul className="money-detailsList-con">
      <li className="balance-con md-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="details-image"
          alt="balance"
        />
        <div className="text-con">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balance}</p>
        </div>
      </li>
      <li className="income-con md-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="details-image"
          alt="income"
        />
        <div className="text-con">
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {income}</p>
        </div>
      </li>
      <li className="expenses-con md-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="details-image"
          alt="expenses"
        />
        <div className="text-con">
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expenses}</p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
