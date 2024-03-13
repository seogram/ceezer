import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header';

describe('Header component', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });

  it('displays mini shopping cart', () => {
    const { getByText,queryByTestId } = render(<Header />);
    expect(getByText(/Ceezer/i)).toBeInTheDocument();

    const miniCartIcon = queryByTestId("mini-cart-icon")
    expect(miniCartIcon).toBeInTheDocument();
  });

  it('not displays mini shopping cart when noCart flag passes', () => {
    const { queryByTestId } = render(<Header noCart/>);

    const miniCartIcon = queryByTestId("mini-cart-icon")
    expect(miniCartIcon).not.toBeInTheDocument();
  });

});