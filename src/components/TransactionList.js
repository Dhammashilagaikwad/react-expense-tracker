import React, { useEffect, useState } from 'react'

export default function TransactionList() {
    const [transactions, setTransactions] = useState([]);


    useEffect(() => {
        const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
        const savedIncome = JSON.parse(localStorage.getItem('income')) || [];
        // console.log("savedExpense",savedExpense)
        const expensesWithType = savedExpenses.map((item) => ({
            ...item,
            Type: 'Expense',
            SourceOrCategory: item.Category,
        }));

        const incomeWithType = savedIncome.map((item) => ({
            ...item,
            Type: 'Income',
            SourceOrCategory: item.Source,
        }));
        const allTransactions = [...expensesWithType, ...incomeWithType];
        setTransactions(allTransactions);
    }, []);
    return (
        <>
            <h3 className='text-center text-info-emphasis pt-5 pb-3'>Transaction List</h3>


            {transactions.length == 0 ? (
                <p>No Expenses Record yet</p>
            ) : (
              <div className='container'>
                  <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th className='text-info-emphasis'>Type</th>
                            <th className='text-info-emphasis'>Source / Category</th>
                            <th className='text-info-emphasis'>Date</th>
                            <th className='text-info-emphasis'>Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            transactions.map((val) => (

                                <tr>
                                    <td>{val.Type}</td>
                                    <td>{val.SourceOrCategory}</td>
                                    <td>{val.Date}</td>
                                    <td>{val.Amount}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
              </div>
            )}
        </>
    )
}
