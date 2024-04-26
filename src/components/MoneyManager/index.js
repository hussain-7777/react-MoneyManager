import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
    transactionsList: [],
  }

  updateTitle = event => {
    this.setState({title: event.target.value})
  }

  updateAmount = event => {
    this.setState({amount: event.target.value})
  }

  changeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, optionId} = this.state
    const transactionType = transactionTypeOptions.find(
      eachOption => eachOption.optionId === optionId,
    )
    const {displayText} = transactionType
    const newTransaction = {
      id: v4(),
      title,
      amount: parseInt(amount),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      title: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const updatedTransactionsList = transactionsList.filter(
      eachTransaction => eachTransaction.id !== id,
    )
    this.setState({transactionsList: updatedTransactionsList})
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let income = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        income += eachTransaction.amount
      }
    })
    return income
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expenses = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expenses += eachTransaction.amount
      }
    })
    return expenses
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let balance = 0
    let income = 0
    let expenses = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        income += eachTransaction.amount
      } else {
        expenses += eachTransaction.amount
      }
    })
    balance = income - expenses
    return balance
  }

  render() {
    const {title, amount, transactionsList, optionId} = this.state
    const balance = this.getBalance()
    const income = this.getIncome()
    const expenses = this.getExpenses()

    return (
      <div className="app-bgcon">
        <div className="app-con">
          <div className="header-con">
            <h1 className="heading">Hi, Richard</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
          <div className="transactionNhistory-con">
            <div className="transaction-form-con">
              <form className="form-con" onSubmit={this.addTransaction}>
                <h2>Add Transaction</h2>
                <label htmlFor="title">TITLE</label>
                <input
                  id="title"
                  value={title}
                  className="input"
                  type="text"
                  placeholder="TITLE"
                  onChange={this.updateTitle}
                />
                <label htmlFor="amount">AMOUNT</label>
                <input
                  id="amount"
                  value={amount}
                  className="input"
                  type="text"
                  placeholder="AMOUNT"
                  onChange={this.updateAmount}
                />
                <label htmlFor="select">TYPE</label>
                <select
                  id="select"
                  className="select input"
                  value={optionId}
                  onChange={this.changeOptionId}
                >
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      value={eachOption.optionId}
                      key={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
                <button type="submit" className="submit-button">
                  Add
                </button>
              </form>
            </div>
            <div className="history-con">
              <h2>History</h2>
              <ul className="transaction-table-con">
                <li className="table-row">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                </li>
                <hr />
                {transactionsList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
