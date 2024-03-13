import React from 'react';
import { render, within } from '@testing-library/react';
import FullCart from './FullCart';
import { MockCartItemData } from "../Projects/data";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn()
}));

describe('Error component', () => {
  it('renders without crashing', () => {
    render(<FullCart {...MockCartItemData}/>);
  });

  it('displays the total cost correctly', () => {
    const { getByTestId } = render(<FullCart {...MockCartItemData}/>);
    const { getByText } = within(getByTestId("total-cost"))

    expect(getByText(/Total Cost : €750.00/i)).toBeInTheDocument()

  });
});