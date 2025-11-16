import React from 'react';
import { render, screen } from '@testing-library/react';
import BookList from '../BookList';

describe('BookList', () => {
  const mockBooks = [
    {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400",
    description: "A powerful story of racial injustice"
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400",
    description: "A dystopian social science fiction novel"
  },
  ];

  const mockOnPurchase = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all books in a grid', () => {
    render(<BookList books={mockBooks} onPurchase={mockOnPurchase} />);

    expect(screen.getByText('To Kill a Mockingbird')).toBeInTheDocument();
    expect(screen.getByText('1984')).toBeInTheDocument();
  });

  test('renders empty state when no books provided', () => {
    render(<BookList books={[]} onPurchase={mockOnPurchase} />);

    expect(screen.getByText('No books found matching your search.')).toBeInTheDocument();
  });

  test('passes onPurchase handler to each BookCard', () => {
    render(<BookList books={mockBooks} onPurchase={mockOnPurchase} />);

    const buttons = screen.getAllByTestId('book-buy-button');
    expect(buttons).toHaveLength(2);
  });

  test('renders books with correct data', () => {
    render(<BookList books={mockBooks} onPurchase={mockOnPurchase} />);

    expect(screen.getByText('by Harper Lee')).toBeInTheDocument();
    expect(screen.getByText('by George Orwell')).toBeInTheDocument();
    expect(screen.getByText('A powerful story of racial injustice')).toBeInTheDocument();
    expect(screen.getByText('A dystopian social science fiction novel')).toBeInTheDocument();
  });

  test('renders books in a responsive grid', () => {
    const { container } = render(<BookList books={mockBooks} onPurchase={mockOnPurchase} />);
    const grid = container.querySelector('div[class*="grid"]');
    expect(grid).toBeInTheDocument();
  });
});
