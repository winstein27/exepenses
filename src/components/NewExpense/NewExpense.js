import styles from './NewExpense.module.css';

import { useState } from 'react';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseHandler = (enteredExpense) => {
        const newExpense = {
            id: Math.random().toString(),
            title: enteredExpense.enteredTitle,
            amount: Number.parseFloat(enteredExpense.enteredAmount),
            date: new Date(enteredExpense.enteredDate),
        };

        props.onAddExpense(newExpense);
        closeFormHandler();
    };

    const closeFormHandler = () => {
        setShowForm(false);
    };

    const openFormHandler = () => {
        setShowForm(true);
    };

    return (
        <div className={styles['new-expense']}>
            {!showForm && (
                <button onClick={openFormHandler}>Add New Expense</button>
            )}
            {showForm && (
                <ExpenseForm
                    onSaveExpense={saveExpenseHandler}
                    onCancel={closeFormHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
