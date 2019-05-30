import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'

class AccountContainer extends Component {

  state = {
    transactions: [],
    currentCategory: ''
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then((response) => {
      return response.json();
    }).then((transData) => {
      this.setState({
        transactions: transData
      })
    })
  }

  handleChange = (category) => {
    this.setState({
      currentCategory: category
    })
  }

  render() {

    return (
      <div className="ui grid container">

        <CategorySelector handleChange={this.handleChange} activeCategory={this.state.currentCategory}/>

        <TransactionsList currentCategory={this.state.currentCategory} transactions={this.state.transactions}/>

      </div>
    )
  }
}

export default AccountContainer
