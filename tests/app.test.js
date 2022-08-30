import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import App from '../src/app.jsx';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

describe('Jest+RTL Workshop', function() {
  const user = userEvent.setup();

  render(<App />)

  it('should increase the counter', () => {
    return waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument())
      .then(() => {
        expect(screen.getByTestId('counter')).toHaveTextContent('0');
        return user.click(screen.getByRole('button', {name: 'Increase!'}))
      })
      .then(() => {
        expect(screen.getByTestId('counter')).toHaveTextContent('1');
      })
  });

  it('should decrease the counter', () => {
    expect(screen.getByTestId('counter')).toHaveTextContent('1');
    return user.click(screen.getByRole('button', {name: 'Decrease!'}))
      .then(() => {
        expect(screen.getByTestId('counter')).toHaveTextContent(/^0$/);
      })
  });

  it('should change the counter with the dropdown', () => {
    expect(screen.getByTestId('counter')).toHaveTextContent('0');
    return user.selectOptions(screen.getByRole('combobox'), screen.getByRole('option', {name: 1}))
      .then(() => {
        expect(screen.getByTestId('counter')).toHaveTextContent(/^1$/);
      })
  });

});
