import ExpenseItem from './ExpenseItem';

import styles from './ExpensesList.module.css';

const ExpensesList = (props) => {
    if (props.expenses.length === 0) {
        return (
            <h2 className={styles['expenses-list__fallback']}>
                No expenses found.
            </h2>
        );
    }

    return (
        <ul className={styles['expenses-list']}>
            {props.expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;
