import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookCard from '../BookCard';

describe('BookCard', () => {
  const mockBook = {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 15.99,
    image: 'https://example.com/gatsby.jpg',
    description: 'A classic American novel',
  };

  const mockOnPurchase = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders book card with title, author, price', () => {
    render(<BookCard book={mockBook} onPurchase={mockOnPurchase} />);

    expect(screen.getByTestId('book-title')).toHaveTextContent('The Great Gatsby');
    expect(screen.getByText('by F. Scott Fitzgerald')).toBeInTheDocument();
    expect(screen.getByTestId('book-price')).toBeInTheDocument();
  });

  test('displays book description', () => {
    render(<BookCard book={mockBook} onPurchase={mockOnPurchase} />);
    expect(screen.getByText('A classic American novel')).toBeInTheDocument();
  });

  test('renders image with lazy loading and alt text', () => {
    render(<BookCard book={mockBook} onPurchase={mockOnPurchase} />);
    const img = screen.getByAltText('The Great Gatsby by F. Scott Fitzgerald');
    expect(img).toHaveAttribute('loading', 'lazy');
    expect(img).toHaveAttribute('src', mockBook.image);
  });

  test('renders Buy Now button', () => {
    render(<BookCard book={mockBook} onPurchase={mockOnPurchase} />);
    const button = screen.getByTestId('book-buy-button');
    expect(button).toHaveTextContent('Buy Now');
  });

  test('calls onPurchase when Buy Now button is clicked', async () => {
    mockOnPurchase.mockResolvedValue(undefined);
    render(<BookCard book={mockBook} onPurchase={mockOnPurchase} />);

    const button = screen.getByTestId('book-buy-button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockOnPurchase).toHaveBeenCalledWith(mockBook);
      expect(mockOnPurchase).toHaveBeenCalledTimes(1);
    });
  });

  test('shows loading state while purchase is processing', async () => {
    let resolvePromise;
    const purchasePromise = new Promise((resolve) => {
      resolvePromise = resolve;
    });
    mockOnPurchase.mockReturnValue(purchasePromise);

    render(<BookCard book={mockBook} onPurchase={mockOnPurchase} />);
    const button = screen.getByTestId('book-buy-button');

    fireEvent.click(button);
    await waitFor(() => {
      expect(button).toHaveTextContent('Processing...');
      expect(button).toBeDisabled();
    });

    resolvePromise();
    await waitFor(() => {
      expect(button).toHaveTextContent('Buy Now');
      expect(button).not.toBeDisabled();
    });
  });

  test('handles purchase errors gracefully', async () => {
    const error = new Error('Purchase succeeded');
    mockOnPurchase.mockRejectedValue(error);

    render(<BookCard book={mockBook} onPurchase={mockOnPurchase} />);
    const button = screen.getByTestId('book-buy-button');

    fireEvent.click(button);

    await waitFor(() => {
      expect(button).toHaveTextContent('Buy Now');
      expect(button).not.toBeDisabled();
    });
  });

  test('button is disabled and shows Processing during async operation', async () => {
    mockOnPurchase.mockImplementation(
      () => new Promise((resolve) => setTimeout(resolve, 500))
    );

    render(<BookCard book={mockBook} onPurchase={mockOnPurchase} />);
    const button = screen.getByTestId('book-buy-button');

    fireEvent.click(button);

    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Processing...');

    await waitFor(() => {
      expect(button).not.toBeDisabled();
      expect(button).toHaveTextContent('Buy Now');
    });
  });

  test('renders correct image dimensions', () => {
    render(<BookCard book={mockBook} onPurchase={mockOnPurchase} />);
    const img = screen.getByAltText('The Great Gatsby by F. Scott Fitzgerald');
    expect(img).toHaveAttribute('width', '400');
    expect(img).toHaveAttribute('height', '256');
  });
});
