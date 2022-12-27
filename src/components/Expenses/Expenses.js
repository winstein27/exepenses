import './Expenses.css';

import { useState } from 'react';

import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2023');

  const filterHandler = year => {
    setFilterYear(year);
  };

  const FilteredExpenses = props.expenses.filter(expense => 
    expense.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className='expenses'>
      <ExpensesFilter onFilterChange={filterHandler} />
      <ExpensesList expenses={FilteredExpenses} />
    </Card>
  );
};

export default Expenses;
