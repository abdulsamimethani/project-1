import React, { useContext } from 'react';
import GlobalContext from './GlobalContext';

export default function Expense() {
    let { transactions } = useContext(GlobalContext);

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }


    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }


    return (
        <div>
            <div className="balance">
                <h3>Your Balance</h3>
                <h1>{getIncome()+getExpense()}Rs</h1>
            </div>
            <div className="expense">
                <h3>INCOME<br /><span className="income-container">{getIncome()}Rs</span></h3>
                <h3>EXPENSE<br /><span className="expense-container">{getExpense()}Rs</span></h3>
            </div>
        </div>
    )
}