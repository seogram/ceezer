import React from 'react';
import { render } from '@testing-library/react';
import CustomError from './Error';

describe('CustomError component', () => {
  it('renders without crashing', () => {
    render(<CustomError />);
  });

  it('displays the error message', () => {
    const { getByText } = render(<CustomError />);
    expect(getByText(/Something went wrong.../i)).toBeInTheDocument();
  });

  it('applies the correct color', () => {
    const { getByText } = render(<CustomError />);
    const errorMessage = getByText(/Something went wrong.../i);
    expect(errorMessage).toHaveStyle('color: rgb(211, 47, 47)');
  });
});