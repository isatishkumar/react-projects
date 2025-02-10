import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe("app test suite", () => {
test('Renders the Header heading', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const headingElement = screen.getByText("reserve Table");
    expect(headingElement).toBeInTheDocument();
})

test('renders reserve button', () => {
  const result = render(<BrowserRouter><App /></BrowserRouter>);
  const reserveButton = result.container.querySelector('#reserve-button');

expect(reserveButton).toBeInTheDocument();
})

test('click on reserve table button', () => {
  const result = render(<BrowserRouter><App /></BrowserRouter>);
  const reserveButton = result.container.querySelector('#reserve-button');

expect(reserveButton).toBeInTheDocument();
fireEvent.click(reserveButton);
const headingElementNew = screen.getByText("Reservation Form");
    expect(headingElementNew).toBeInTheDocument();


const selectOption = result.container.querySelector('#booking-option');
  expect(selectOption.selected).toBe(true);

})
});