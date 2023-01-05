import styles from './Expenses.module.css';

import { useState } from 'react';

import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2023');

    const filterHandler = (year) => {
        setFilterYear(year);
    };

    const filteredExpenses = props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === filterYear
    );

    return (
        <Card className={styles.expenses}>
            <ExpensesFilter onFilterChange={filterHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
