import React, { useEffect, useState } from 'react';
import { PieChart,  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
 } from 'recharts';

export default function Summary() {
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const income = JSON.parse(localStorage.getItem('income')) || [];
    

    const totalExp = expenses.reduce((sum, e) => sum + parseInt(e.Amount), 0);
    const totalInc = income.reduce((sum, i) => sum + parseInt(i.Amount), 0);

    setTotalExpense(totalExp);
    setTotalIncome(totalInc);
  }, []);
  const remaining = totalIncome - totalExpense;

  const pieData = [
    {name:'Expenses', value: totalExpense},
    {name:'Income', value: totalIncome},
    {name:'Remaining', value: remaining}
  ]

const COLORS = ['#FF8042', '#00C49F', '#0088FE'];

  return (
    <>
      <h2 className="text-center pt-5 mb-5 text-info-emphasis">Summary & Transaction</h2>
      <div className="container ">
        <div className="row text-center justify-content-between">
          <div className="col-4 card shadow-lg p-5">
            <h5 className='text-info-emphasis'>Total Expenses</h5>
            <div>{totalExpense}</div>
          </div>
          <div className="col-4 card shadow-lg p-5">
            <h5 className='text-info-emphasis'>Total Income</h5>
            <div>{totalIncome}</div>
          </div>
          <div className="col-4 card shadow-lg p-5">
            <h5 className='text-info-emphasis'>Remaining</h5>
            <div>{remaining}</div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <h5 className="text-center mb-3">Expense vs Remaining</h5>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}
