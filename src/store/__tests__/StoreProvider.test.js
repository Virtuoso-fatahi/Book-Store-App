import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import { StoreProvider, StoreContext } from '../StoreProvider';
import { act, waitFor } from '@testing-library/react';

// Test helper: a simple consumer component
function ConsumerComponent() {
  const { cart, cartCount, orders, notifications, user } = useContext(StoreContext);
  return (
    <div>
      <div data-testid="cart-count">{cartCount}</div>
      <div data-testid="cart-items">{JSON.stringify(cart)}</div>
      <div data-testid="orders-count">{orders.length}</div>
      <div data-testid="user-role">{user?.role}</div>
    </div>
  );
}

describe('StoreProvider', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('renders children', () => {
    render(
      <StoreProvider>
        <div>Test child</div>
      </StoreProvider>
    );
    expect(screen.getByText('Test child')).toBeInTheDocument();
  });

  test('provides initial state', () => {
    render(
      <StoreProvider>
        <ConsumerComponent />
      </StoreProvider>
    );
    expect(screen.getByTestId('cart-count')).toHaveTextContent('0');
    expect(screen.getByTestId('orders-count')).toHaveTextContent('0');
    expect(screen.getByTestId('user-role')).toHaveTextContent('user');
  });

  test('cart starts empty', () => {
    render(
      <StoreProvider>
        <ConsumerComponent />
      </StoreProvider>
    );
    const cartItems = JSON.parse(screen.getByTestId('cart-items').textContent);
    expect(cartItems).toEqual([]);
  });

  describe('addToCart', () => {
    test('adds a book to cart', async () => {
      const book = { id: 4, title: 'Test Pride and Prejudice', author: 'Jane Austen', price: 11.99, description: 'A romantic novel of manners' };
      let addToCart;

      function TestComponent() {
        const ctx = useContext(StoreContext);
        addToCart = ctx.addToCart;
        return <ConsumerComponent />;
      }

      render(
        <StoreProvider>
          <TestComponent />
        </StoreProvider>
      );

      // perform update and wait for the DOM to reflect it
      act(() => {
        addToCart(book, 1);
      });

      await waitFor(() => {
        const cartItems = JSON.parse(screen.getByTestId('cart-items').textContent);
        expect(cartItems).toHaveLength(1);
        expect(cartItems[0]).toEqual({ id: 4, book, quantity: 1 });
        expect(screen.getByTestId('cart-count')).toHaveTextContent('1');
      });
    });

    test('increases quantity if book already in cart', () => {
      const book = { id: 4, title: 'Test Pride and Prejudice', author: 'Jane Austen', price: 11.99, description: 'A romantic novel of manners' };
      let addToCart;

      function TestComponent() {
        const ctx = useContext(StoreContext);
        addToCart = ctx.addToCart;
        return <ConsumerComponent />;
      }

      render(
        <StoreProvider>
          <TestComponent />
        </StoreProvider>
      );

      addToCart(book, 1);
      addToCart(book, 2);

      const cartItems = JSON.parse(screen.getByTestId('cart-items').textContent);
      expect(cartItems).toHaveLength(1);
      expect(cartItems[0].quantity).toBe(3);
      expect(screen.getByTestId('cart-count')).toHaveTextContent('3');
    });

    test('adds multiple different books to cart', () => {
      const book1 = { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 13.99, description: 'A controversial novel of teenage rebellion' };
      const book2 = { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 12.99, description: 'A powerful story of racial injustice' };
      let addToCart;

      function TestComponent() {
        const ctx = useContext(StoreContext);
        addToCart = ctx.addToCart;
        return <ConsumerComponent />;
      }

      render(
        <StoreProvider>
          <TestComponent />
        </StoreProvider>
      );

      addToCart(book1, 1);
      addToCart(book2, 2);

      const cartItems = JSON.parse(screen.getByTestId('cart-items').textContent);
      expect(cartItems).toHaveLength(2);
      expect(screen.getByTestId('cart-count')).toHaveTextContent('3'); // 1 + 2
    });
  });

  describe('updateCartQuantity', () => {
    test('updates quantity of cart item', () => {
      const book = { id: 4, title: 'Test Pride and Prejudice', author: 'Jane Austen', price: 11.99, description: 'A romantic novel of manners' };
      let addToCart, updateCartQuantity;

      function TestComponent() {
        const ctx = useContext(StoreContext);
        addToCart = ctx.addToCart;
        updateCartQuantity = ctx.updateCartQuantity;
        return <ConsumerComponent />;
      }

      render(
        <StoreProvider>
          <TestComponent />
        </StoreProvider>
      );

      addToCart(book, 1);
      updateCartQuantity(1, 5);

      const cartItems = JSON.parse(screen.getByTestId('cart-items').textContent);
      expect(cartItems[0].quantity).toBe(5);
      expect(screen.getByTestId('cart-count')).toHaveTextContent('5');
    });
  });

  describe('removeFromCart', () => {
    test('removes item from cart', () => {
      const book = { id: 4, title: 'Test Pride and Prejudice', author: 'Jane Austen', price: 11.99, description: 'A romantic novel of manners' };
      let addToCart, removeFromCart;

      function TestComponent() {
        const ctx = useContext(StoreContext);
        addToCart = ctx.addToCart;
        removeFromCart = ctx.removeFromCart;
        return <ConsumerComponent />;
      }

      render(
        <StoreProvider>
          <TestComponent />
        </StoreProvider>
      );

      addToCart(book, 1);
      removeFromCart(1);

      const cartItems = JSON.parse(screen.getByTestId('cart-items').textContent);
      expect(cartItems).toHaveLength(0);
      expect(screen.getByTestId('cart-count')).toHaveTextContent('0');
    });
  });

  describe('clearCart', () => {
    test('clears all items from cart', () => {
      const book1 = { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 13.99, description: 'A controversial novel of teenage rebellion' };
      const book2 = { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 12.99, description: 'A powerful story of racial injustice' };
      let addToCart, clearCart;

      function TestComponent() {
        const ctx = useContext(StoreContext);
        addToCart = ctx.addToCart;
        clearCart = ctx.clearCart;
        return <ConsumerComponent />;
      }

      render(
        <StoreProvider>
          <TestComponent />
        </StoreProvider>
      );

      addToCart(book1, 2);
      addToCart(book2, 1);
      clearCart();

      const cartItems = JSON.parse(screen.getByTestId('cart-items').textContent);
      expect(cartItems).toHaveLength(0);
      expect(screen.getByTestId('cart-count')).toHaveTextContent('0');
    });
  });

  describe('orders state', () => {
    test('can set orders', () => {
      let setOrders;

      function TestComponent() {
        const ctx = useContext(StoreContext);
        setOrders = ctx.setOrders;
        return <ConsumerComponent />;
      }

      render(
        <StoreProvider>
          <TestComponent />
        </StoreProvider>
      );

      const newOrders = [{ id: '1', status: 'Pending', items: [] }];
      setOrders(newOrders);

      expect(screen.getByTestId('orders-count')).toHaveTextContent('1');
    });
  });

  describe('localStorage persistence', () => {
    test('persists cart to localStorage', async () => {
      const book = { id: 4, title: 'Test Pride and Prejudice', author: 'Jane Austen', price: 11.99, description: 'A romantic novel of manners' };
      let addToCart;

      function TestComponent() {
        const ctx = useContext(StoreContext);
        addToCart = ctx.addToCart;
        return null;
      }

      render(
        <StoreProvider>
          <TestComponent />
        </StoreProvider>
      );

      addToCart(book, 1);
      await waitFor(() => expect(screen.getByTestId('cart-count')).toHaveTextContent('1'));

      // Allow useEffect to run
      setTimeout(() => {
        const persisted = JSON.parse(localStorage.getItem('app.cart') || '[]');
        expect(persisted).toHaveLength(1);
        expect(persisted[0].id).toBe(4);
      });
    });
  });
});
