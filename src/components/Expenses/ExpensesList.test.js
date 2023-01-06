import { render, screen } from '@testing-library/react';

import ExpensesList from './ExpensesList';

describe('ExpensesList component', () => {
    test('renders the expected number of expense items', () => {
        const expenses = [
            { id: 'e1', date: new Date(), title: 'Expense 1', amount: 10 },
            { id: 'e2', date: new Date(), title: 'Expense 2', amount: 20 },
        ];

        render(<ExpensesList expenses={expenses} />);

        expect(screen.getAllByRole('listitem').length).toBe(2);
    });

    test('renders "No expenses found." when there are no expenses', () => {
        const expenses = [];

        render(<ExpensesList expenses={expenses} />);

        expect(screen.getByText('No expenses found.')).toBeInTheDocument;
        expect(screen.queryAllByRole('listitem')).toBeNull;
    });

    test('does not render "No expenses found." when the are some expenses', () => {
        const expenses = [
            { id: 'e1', date: new Date(), title: 'Expense 1', amount: 10 },
            { id: 'e2', date: new Date(), title: 'Expense 2', amount: 20 },
        ];

        render(<ExpensesList expenses={expenses} />);

        expect(screen.queryByText('No expenses found.')).toBeNull;
    });
});
