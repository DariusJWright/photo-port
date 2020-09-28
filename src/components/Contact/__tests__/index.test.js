import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..'

afterEach(cleanup);

describe('Contact component', () => {
  it('renders', () => {
    render(<Contact></Contact>);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Contact></Contact>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('says Contact Me', () => {
    const { getByTestId } = render(<Contact></Contact>);
    expect(getByTestId('contact')).toHaveTextContent('Contact Me');
  });

  it('says Submit', () => {
    const { getByTestId } = render(<Contact></Contact>);
    expect(getByTestId('button')).toHaveTextContent('Submit');
  });
});

