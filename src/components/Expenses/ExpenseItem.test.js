import { render, screen } from '@testing-library/react';

import ExpenseItem from './ExpenseItem';

describe('ExpenseItem component', () => {
    test('renders item correctly', () => {
        const props = {
            date: new Date(2020, 2, 20),
            title: 'Car wash',
            amount: 50.25,
        };

        render(<ExpenseItem {...props} />);

        expect(screen.getAllByText('March')).toBeInTheDocument;
        expect(screen.getAllByText('20')).toBeInTheDocument;
        expect(screen.getAllByText('2020')).toBeInTheDocument;
        expect(screen.getAllByText('Car wash')).toBeInTheDocument;
        expect(screen.getAllByText('$50.25')).toBeInTheDocument;
    });
});
