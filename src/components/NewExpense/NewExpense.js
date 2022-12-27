import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseHandler = enteredExpense => {
        const newExpense = {
            id: Math.random().toString(),
            title: enteredExpense.enteredTitle,
            amount: Number.parseFloat(enteredExpense.enteredAmount),
            date: new Date(enteredExpense.enteredDate)
        };

        props.onAddExpense(newExpense);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={saveExpenseHandler} />
        </div>
    );
};

export default NewExpense;
