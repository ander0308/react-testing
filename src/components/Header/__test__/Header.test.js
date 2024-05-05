import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('should render same text passed into title prop', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });
})

/*
it('should render same text passed into title prop with role', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading", { name: "My Header"});
  expect(headingElement).toBeInTheDocument();
});


it('should render same text passed into title prop with title', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});


it('should render same text passed into title prop with test id', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTestId("header-1");
  expect(headingElement).toBeInTheDocument();
});

// FindBy --- Precisa ser assincrono.

it('should render same text passed into title findBy', async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// QueryBy --- Precisa ser assincrono.

it('should render same text passed into title QueryBy',  () => {
  render(<Header title="My Header" />);
  const headingElement =  screen.queryByText(/dogs/i);
  expect(headingElement).not.toBeInTheDocument();
});


// getAll
it('should render same text passed into title getAll',  () => {
  render(<Header title="My Header" />);
  const headingElements =  screen.getAllByRole("heading")
  expect(headingElements.length).toBe(2)
});
 */
