import './ExpensesList.css';

import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';

const ExpensesList = (props) => {
  const [filterYear, setFilterYear] = useState('2023');

  const filterHandler = year => {
    setFilterYear(year);
  };

  const expenses = props.expenses.filter(expense => 
    expense.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className='expenses'>
      <ExpensesFilter onFilterChange={filterHandler} />
      {expenses.map(expense =>
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )}
    </Card>
  );
};

export default ExpensesList;
