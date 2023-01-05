import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    const titleChangeHandler = (event) => {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                enteredTitle: event.target.value,
            };
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                enteredAmount: event.target.value,
            };
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                enteredDate: event.target.value,
            };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        });

        props.onSaveExpense(userInput);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        maxLength="30"
                        value={userInput.enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={userInput.enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2023-12-31"
                        value={userInput.enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
