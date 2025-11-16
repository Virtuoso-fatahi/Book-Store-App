import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider, StoreContext } from '../../store/StoreProvider';
import Navbar from '../Navbar';

// Wrapper to provide Router and Store context
function NavbarWithContext({ cartCount = 0 }) {
  return (
    <BrowserRouter>
      <StoreProvider>
        <Navbar />
      </StoreProvider>
    </BrowserRouter>
  );
}

describe('Navbar', () => {
  test('renders BookStore branding', () => {
    render(<NavbarWithContext />);
    expect(screen.getByText(/📚 BookStore/)).toBeInTheDocument();
  });

  test('renders search input with label', () => {
    render(<NavbarWithContext />);
    const searchInput = screen.getByDisplayValue('');
    expect(searchInput).toHaveAttribute('placeholder', 'Search books...');
    const label = screen.getByText('Search books');
    expect(label).toHaveClass('sr-only');
  });

  test('renders cart link with icon', () => {
    render(<NavbarWithContext />);
    const cartLink = screen.getByRole('link', { name: /Cart/ });
    expect(cartLink).toBeInTheDocument();
  });

  test('displays cart count badge', () => {
    render(<NavbarWithContext />);
    const badge = screen.getByLiveRegion('polite').parentElement;
    expect(badge).toBeInTheDocument();
  });

  test('updates search input on typing', () => {
    render(<NavbarWithContext />);
    const searchInput = screen.getByPlaceholderText('Search books...');
    fireEvent.change(searchInput, { target: { value: 'gatsby' } });
    expect(searchInput).toHaveValue('gatsby');
  });

  test('clears search input on ESC key', () => {
    render(<NavbarWithContext />);
    const searchInput = screen.getByPlaceholderText('Search books...');
    fireEvent.change(searchInput, { target: { value: 'gatsby' } });
    fireEvent.keyDown(searchInput, { key: 'Escape' });
    expect(searchInput).toHaveValue('');
  });

  test('has branded link to catalog', () => {
    render(<NavbarWithContext />);
    const brandLink = screen.getByText(/📚 BookStore/);
    expect(brandLink.closest('a')).toHaveAttribute('href', '/catalog');
  });

  test('cart link navigates to cart page', () => {
    render(<NavbarWithContext />);
    const cartLink = screen.getByRole('link', { name: /Cart/ });
    expect(cartLink).toHaveAttribute('href', '/cart');
  });

  test('search input has focus visible on interaction', () => {
    render(<NavbarWithContext />);
    const searchInput = screen.getByPlaceholderText('Search books...');
    fireEvent.focus(searchInput);
    expect(searchInput).toHaveFocus();
  });
});
