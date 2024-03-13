import React from 'react';
import { render } from '@testing-library/react';
import CustomeLink from './CustomeLink';

describe('Link component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<CustomeLink href="/test">my link</CustomeLink>);
    expect(getByText("my link")).toBeInTheDocument();

  });



 
});