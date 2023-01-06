import { render, screen } from '@testing-library/react';

import Chart from '../../components/Chart/Chart';

describe('Chart component', () => {
    test('renders labels correctly', () => {
        const dataPoints = [
            { label: 'jan', value: 0 },
            { label: 'feb', value: 0 },
            { label: 'mar', value: 0 },
            { label: 'apr', value: 0 },
            { label: 'may', value: 0 },
            { label: 'jun', value: 0 },
            { label: 'jul', value: 0 },
            { label: 'aug', value: 0 },
            { label: 'sep', value: 0 },
            { label: 'oct', value: 0 },
            { label: 'nov', value: 0 },
            { label: 'dec', value: 0 },
        ];

        render(<Chart dataPoints={dataPoints} />);

        expect(screen.getByText('jan')).toBeInTheDocument;
        expect(screen.getByText('feb')).toBeInTheDocument;
        expect(screen.getByText('mar')).toBeInTheDocument;
        expect(screen.getByText('apr')).toBeInTheDocument;
        expect(screen.getByText('may')).toBeInTheDocument;
        expect(screen.getByText('jun')).toBeInTheDocument;
        expect(screen.getByText('jul')).toBeInTheDocument;
        expect(screen.getByText('aug')).toBeInTheDocument;
        expect(screen.getByText('sep')).toBeInTheDocument;
        expect(screen.getByText('oct')).toBeInTheDocument;
        expect(screen.getByText('nov')).toBeInTheDocument;
        expect(screen.getByText('dec')).toBeInTheDocument;
    });
});
