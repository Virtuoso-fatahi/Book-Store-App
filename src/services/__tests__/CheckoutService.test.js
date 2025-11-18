jest.mock('../../utils/paystack', () => ({
  initializePaystackPayment: jest.fn(),
  verifyPayment: jest.fn(),
}));
import { initializePaystackPayment, verifyPayment } from '../../utils/paystack';
import { startPayment } from '../CheckoutService';

test('startPayment throws when no items', async () => {
  await expect(startPayment({ items: [], email: 'x' })).rejects.toThrow('No items to pay for');
});

test('startPayment wires initializePaystackPayment and verifyPayment', async () => {
  // initializePaystackPayment should call the provided onSuccess with a fake response
  initializePaystackPayment.mockImplementation(async (_, __, onSuccess) => {
    // Simulate user completing payment with response
    await onSuccess({ reference: 'ref-123' }, { id: 'b1' });
  });
  verifyPayment.mockResolvedValue({ status: 'success', reference: 'ref-123' });

  const onSuccessSpy = jest.fn();
  await startPayment({
    items: [{ book: { id: 'b1', title: 'B1', price: 10 } }],
    email: 'test@example.com',
    onSuccess: onSuccessSpy,
  });

  // Expect verifyPayment called and onSuccessSpy invoked with verification
  expect(verifyPayment).toHaveBeenCalledWith('ref-123');
  expect(onSuccessSpy).toHaveBeenCalledWith(expect.objectContaining({ response: { reference: 'ref-123' }, verification: { status: 'success' } }));
});