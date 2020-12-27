import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import EightBall from './EightBall';

it('should render without crashing', () => {
    render(<EightBall />);
})

it('should match snapshot', () => {
    const {asFragment} = render(<EightBall />);
    expect(asFragment()).toMatchSnapshot();
})

it('should render new EightBall response', () => {
    const { getByText } = render(<EightBall />);
    let advice = getByText('Think of a Question');
    expect(advice).toBeInTheDocument();
    expect(advice).toHaveClass('EightBall-text');
    fireEvent.click(getByText('Shake'));
    expect(advice).not.toHaveTextContent('Think of a Question')
})