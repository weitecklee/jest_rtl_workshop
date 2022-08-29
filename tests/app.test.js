import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import App from '../src/app.jsx';

describe('Jest+RTL Workshop', function() {
  const user = userEvent.setup();

  it('should increase counter, Promise version', () => {
    render(<App />);
    return waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument())
      .then(() => {
        expect(screen.getByTestId('counter')).toHaveTextContent('0');
        return user.click(screen.getByRole('button', {name: /Increase/i}));
      })
      .then(() => {
        expect(screen.getByTestId('counter')).toHaveTextContent('1');
        return user.click(screen.getByRole('button', {name: /Increase/i}));
      })
      .then(() => {
        expect(screen.getByTestId('counter')).toHaveTextContent('2');
        return user.click(screen.getByRole('button', {name: /Increase/i}));
      })
      .then(() => {
        expect(screen.getByTestId('counter')).toHaveTextContent('3');
      })
  });

  it('should decrease counter, Promise version', () => {
    render(<App />);
    return waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument())
      .then(() => {
        expect(screen.getByTestId('counter')).toHaveTextContent('0');
        return user.click(screen.getByRole('button', {name: /Decrease/i}));
      })
      .then(() => {
        expect(screen.getByTestId('counter')).toHaveTextContent('-1');
        return user.click(screen.getByRole('button', {name: /Decrease/i}));
      })
      .then(() => {
        expect(screen.getByTestId('counter')).toHaveTextContent('-2');
        return user.click(screen.getByRole('button', {name: /Decrease/i}));
      })
      .then(() => {
        expect(screen.getByTestId('counter')).toHaveTextContent('-3');
      })
  });

  it('should say Positive for a positive number, Promise version', () => {
    render(<App />);
    return waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument())
      .then(() => {
        expect(screen.getByTestId('numberState')).toHaveTextContent('Zero');
        return user.click(screen.getByRole('button', {name: /Increase/i}));
      })
      .then(() => {
        expect(screen.getByTestId('numberState')).toHaveTextContent('Positive');
        return user.click(screen.getByRole('button', {name: /increase/i}));
      })
      .then(() => {
        expect(screen.getByTestId('numberState')).toHaveTextContent('Positive');
      })
  });

  it('should say Negative for a negative number, Promise version', () => {
    render(<App />);
    return waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument())
      .then(() => {
        expect(screen.getByTestId('numberState')).toHaveTextContent('Zero');
        return user.click(screen.getByRole('button', {name: /decrease/i}))
      })
      .then(() => {
        expect(screen.getByTestId('numberState')).toHaveTextContent('Negative');
        return user.click(screen.getByRole('button', {name: /decrease/i}));
      })
      .then(() => {
        expect(screen.getByTestId('numberState')).toHaveTextContent('Negative');
      })
  });

  it('should say Zero for zero, Promise version', () => {
    render(<App />);
    return waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument())
      .then(() => {
        expect(screen.getByTestId('numberState')).toHaveTextContent('Zero');
        return user.click(screen.getByRole('button', {name: /decrease/i}));
      })
      .then(() => {
        expect(screen.getByTestId('numberState')).toHaveTextContent('Negative');
        return user.click(screen.getByRole('button', {name: /increase/i}));
      })
      .then(() => {
        expect(screen.getByTestId('numberState')).toHaveTextContent('Zero');
        return user.click(screen.getByRole('button', {name: /increase/i}));
      })
      .then(() => {
        expect(screen.getByTestId('numberState')).toHaveTextContent('Positive');
        return user.click(screen.getByRole('button', {name: /decrease/i}))
      })
      .then(() => {
        expect(screen.getByTestId('numberState')).toHaveTextContent('Zero');
      })
  });

  it('should change counter to selected number', () => {
    render(<App />);
    return waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument())
      .then(() => {
        expect(screen.getByTestId('numberState')).toHaveTextContent('Zero');
        return user.selectOptions(screen.getByRole('combobox'), screen.getByRole('option', {name: 1}));
      })
      .then(() => {
        expect(screen.getByTestId('numberState')).toHaveTextContent('Positive');
        expect(screen.getByTestId('counter')).toHaveTextContent('1');
        return user.selectOptions(screen.getByRole('combobox'), screen.getByRole('option', {name: -1}))
      })
      .then(() => {
        expect(screen.getByTestId('numberState')).toHaveTextContent('Negative');
        expect(screen.getByTestId('counter')).toHaveTextContent('-1');
      })
  })

  it('should change counter to input number', () => {
    render(<App />);
    return waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument())
      .then(() => {
        expect(screen.getByTestId('numberState')).toHaveTextContent('Zero');
        return user.click(screen.getByRole('spinbutton', {name: 'counter'}));
      })
      .then(() => {
        return user.keyboard('{Backspace}1')
      })
      .then(() => {
        expect(screen.getByTestId('numberState')).toHaveTextContent('Positive');
        expect(screen.getByTestId('counter')).toHaveTextContent('1');
        return user.keyboard('{Backspace}-1')
      })
      .then(() => {
        expect(screen.getByTestId('numberState')).toHaveTextContent('Negative');
        expect(screen.getByTestId('counter')).toHaveTextContent('-1');
      })
  })

});
