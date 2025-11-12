✅ Test Case 

### TC-CAT-001: Search Books by Title
*Priority:* P1  
*Pre-conditions:*
- The app is open on the Catalog page
- Book data is already loaded 
- Search bar is visible and working

*Steps:*
1. Go to the Catalog page
2. Find the search bar at the top
3. Type “To Kill a Mockingbird” in the search box
4. Press the Enter key
5. Check the results that show up

*Expected Result:*
- Search should work even if the case (uppercase/lowercase) is different
- Books with similar titles should also appear 
- When the search box is empty, all books should show again
- Results should update instantly or after pressing Enter

*Actual Result:*
- books according to the book title is shown

*Post-conditions:*
- Catalog shows only the searched books
- The search word stays in the input until cleared

*Evidence Path:* tests/evidence/WhatsApp Image 2025-11-11 at 14.29.32_e234e0d6.jpg

---

### TC-CAT-002: Search by Author Name
*Priority:* P1  
*Pre-conditions:*
- App is open on the Catalog page
- There are several books with different authors


*Steps:*
1. Open the Catalog page
2. Type “Geo” in the search bar
3. Press Enter
4. Check if books by that author appear
5. Try using small letters or capital letters to confirm case-insensitivity

*Expected Result:*
- Books written by “George Orwell” should appear
- Search should not be affected by upper/lowercase letters
- Books by other authors should not appear

*Actual Result:*
- Books by the searched author appear correctly

*Post-conditions:*
- Search shows only books by that author
- Author names are clearly displayed in the results

*Evidence Path:* tests/evidence/image.png

---

### TC-CAT-003: Search by Description
*Priority:* P2  
*Pre-conditions:*
- catalog page is open 
- Books have proper descriptions

*Steps:*
1. Make sure the catalog page is open
2. Search using a keyword that appears in a book’s description
3. Press Enter
4. Observe which books appear in the results

*Expected Result:*
- Books that have the searched keyword in their description should appear
- Partial matches should also work
- The search results should make sense and be relevant

*Actual Result:*
- Only books that exactly match the keyword in the description appear

*Post-conditions:*
- Search results are displayed based on keyword relevance
- No wrong or unrelated results are shown

*Evidence Path:* tests/evidence/CAT-003-search-description.png

---

### TC-CAT-004: Empty Search Query Returns Full List
*Priority:* P1  
*Pre-conditions:*
- App is open on the Catalog page
- A previous search was already done

*Steps:*
1. Perform any search
2. Delete everything from the search bar
3. Press Enter
4. Observe what happens

*Expected Result:*
- The full book list should appear again
- No errors or blank screens should show
- All books become visible

*Actual Result:*
- The full book list displays correctly

*Post-conditions:*
- Catalog resets to its normal view
- Search bar becomes empty again

*Evidence Path:* tests/evidence/(tc4.png)

---

### TC-CAT-005: Search with Whitespace Trim  
*Priority:* P2  
*Pre-conditions:*
- Catalog page is open

*Steps:*
1. Type spaces before and after the book name, for example “ To Kill a Mockingbird ”
2. Press Enter
3. Check if the results appear

*Expected Result:*
- The app should ignore the extra spaces and still show the correct book
- Search should work normally even if spaces are added by mistake

*Actual Result:*
- No books are shown when the whitespaces are added

*Post-conditions:*
- Search input should be cleaned automatically by trimming spaces

*Evidence Path:* tests/evidence/tc5.png

------

### TC-CART-001: Add Book to Cart  
*Priority:* P1  
*Pre-conditions:*
- App loaded on Catalog page
- At least 1 book available in stock

*Steps:*
1. Browse catalog
2. Locate a book and click "Buy Now" button
3. Verify cart update (visual feedback, badge count)
4. Navigate to Cart page
5. Confirm book appears in cart with quantity=1

*Expected Result:*
- Book added to cart with quantity 1
- Cart icon badge increments
- Cart page shows added item

*Actual Result:* 
- Book added to the cart successfully.

*Post-conditions:*
- Book persists in cart (localStorage)
- Cart count updated

*Evidence Path:* tests/evidence/Add_book_to_cart.png

---

### TC-CART-002: Add Multiple Different Books
*Priority:* P1  
*Pre-conditions:*
- Catalog page loaded

*Steps:*
1. Add Book A to cart
2. Add Book B to cart
3. Navigate to Cart page
4. Verify both books present with quantity=1 each

*Expected Result:*
- Both books in cart as separate line items
- Cart total reflects both prices
- Each item shows correct price and quantity

*Actual Result:* 
- Multiple different books are added succcessfully

*Post-conditions:*
- Multiple items persist in localStorage

*Evidence Path:* tests/evidence/Multiple_different_books.png

---

### TC-CART-003: Update Item Quantity
*Priority:* P1  
*Pre-conditions:*
- Cart page with book item (qty=1)

*Steps:*
1. Navigate to Cart page
2. Locate quantity input for book
3. Change quantity from 1 → 3
4. Confirm update
5. Verify cart totals recalculated

*Expected Result:*
- Quantity updates to 3
- Subtotal recalculated: price × 3
- Cart total reflects new amount
- No error

*Actual Result:* 
- Item quatity is updated as per the users selection

*Post-conditions:*
- New qty persisted
- Totals accurate

*Evidence Path:* tests/evidence/Update_Item_quantity.png

---

### TC-CART-004: Remove Item from Cart
*Priority:* P1  
*Pre-conditions:*
- Cart with 2+ items

*Steps:*
1. Cart page open
2. Locate "Remove" icon for first item
3. Click to remove
4. Verify item disappears

*Expected Result:*
- Item removed from cart
- Cart total recalculated
- Cart badge decremented
- Removed item gone permanently

*Actual Result:* 
- Item successfully removed from cart permanently

*Post-conditions:*
- Cart updated in localStorage
- Remaining items unchanged

*Evidence Path:* tests/evidence/Remove_item_from_cart_1.png
tests/evidence/Remove_item_from_cart_2.png

---

### TC-CART-005: Cart Persists Across Refresh
*Priority:* P1  
*Pre-conditions:*
- Cart with 2 items (qty=1 and qty=3)

*Steps:*
1. Note cart items and totals
2. Close/refresh browser (F5 or Cmd+R)
3. Navigate back to Cart page
4. Verify same items and quantities present

*Expected Result:*
- Cart contents unchanged after refresh
- Quantities and totals match previous session
- localStorage persisted correctly

*Actual Result:* 
- Items on the cart are not lost after refreshing or leaving the cart page

*Post-conditions:*
- Cart data persistent across sessions

*Evidence Path:* tests/evidence/Cart_persists_across_refresh_1.png
tests/evidence/Cart_persists_across_refresh_2.png
tests/evidence/Cart_persists_across_refresh_3.png

---

### TC-CART-006: Empty Cart Message
*Priority:* P2  
*Pre-conditions:*
- App loaded

*Steps:*
1. Navigate to Cart page without adding items
2. Or remove all items from cart
3. Observe empty state

*Expected Result:*
- Message displayed: "Your cart is empty. Continue shopping"
- No totals/checkout button visible

*Actual Result:* 
- On an empty cart you get a prompt, "Your cart is empty. Continue shopping"

*Post-conditions:*
- Cart remains empty until items added

*Evidence Path:* tests/evidence/Empty_cart_message.png

---

### TC-CART-007: Calculate Subtotal Correctly
*Priority:* P1  
*Pre-conditions:*
- Cart with items: Book A (price R10.00, qty=2), Book B (price R15.00, qty=1)

*Steps:*
1. Verify subtotal calculation
2. Math: (10.00 × 2) + (15.00 × 1) = R35.00
3. Check cart page displays R35.00

*Expected Result:*
- Subtotal = sum(price × qty) for all items
- Formatted to 2 decimal places
- No rounding errors

*Actual Result:* 
- Subtotal calculations match with the pricing x quantity of the books in the cart

*Post-conditions:*
- Subtotal accurate and persisted

*Evidence Path:* tests/evidence/calculates_subtotal_correctly.png

---------

### TC-CHECKOUT-001: Enter Shipping Information
**Priority:** P1  
**Pre-conditions:**
- Cart with items
- Checkout button accessible

**Steps:**
1. Click "Proceed to Checkout"
2. Navigate to Shipping step (step 1 of 4)
3. Fill form: Full Name, Email, Address, City, Country, Postal Code
4. Click "Next" to proceed
5. Verify data preserved on next step

**Expected Result:**
- Shipping form displays all required fields
- Form fields accept input
- Validation passes with valid data
- Input persists when navigating back
- Next button enabled after form completion

**Actual Result:**
- Form field accepted data
- next button functions correctly

**Post-conditions:**
- Shipping data stored in session
- Navigation to Review step

**Evidence Path:** `tests/evidence/cart-fatahi-2.png`

---

### TC-CHECKOUT-002: Validate Email Format 
**Priority:** P1  
**Pre-conditions:**
- Checkout Shipping step

**Steps:**
1. Fill all fields except Email
2. Enter invalid email: "notanemail"
3. Click Next
4. Observe validation error

**Expected Result:**
- Error message: "Please enter a valid email address"
- Email field highlighted/focused
- Next button disabled
- Form data not cleared

**Actual Result**
- Error message: "please fill out this field" when input is empty
- next button not disabled when email is empty
- form only show error message when the "@" sign is missing

**Post-conditions:**
- Form remains on Shipping step
- User can correct and retry

**Evidence Path:** `tests/evidence/cart-fatahi-3.png`

---

### TC-CHECKOUT-003: Require All Shipping Fields
**Priority:** P1  
**Pre-conditions:**
- Checkout Shipping step

**Steps:**
1. Leave "Full Name" field empty
2. Fill other fields
3. Click Next

**Expected Result:**
- Error message: "Full Name is required"
- Next button disabled
- Focus on empty field

**Actual Result:**
- form throws an error message when any input field is empty

**Post-conditions:**
- Form stays on Shipping step
- User prompted to complete

**Evidence Path:** `tests/evidence/cart-fatahi-3B.png`

---

### TC-CHECKOUT-004: Review Order Summary
**Priority:** P1  
**Pre-conditions:**
- Shipping step completed, moved to Review step

**Steps:**
1. Verify Review step (step 2 of 4) displays:
   - All cart items with price/qty
   - Subtotal
   - Shipping fee
   - Tax (8% of subtotal)
   - Total
   - Shipping address summary

**Expected Result:**
- All data clearly displayed and accurate
- Totals calculated correctly
- Address shows as entered
- Back/Next buttons present

**Actual Result:**
- data displayed correctly except the shipping address
- back/next buttons present

**Post-conditions:**
- Review data reflects checkout data
- Ready to proceed to Payment

**Evidence Path:** `tests/evidence/cart-fatahi-5.png`

---

### TC-CHECKOUT-005: Back Button Preserves Data
**Priority:** P1  
**Pre-conditions:**
- On Review step (step 2)

**Steps:**
1. Click "Back" button
2. Return to Shipping step
3. Verify all entered data still present

**Expected Result:**
- Full Name, Email, Address, etc. unchanged
- Form fields populated with previous input
- No data loss

**Actual Result**
-- form data preserve on clicking the back button

**Post-conditions:**
- Can edit shipping if needed
- Can proceed forward again

**Evidence Path:** `tests/evidence/cart-fatahi-6.png`

---

### TC-CHECKOUT-006: Checkout Disabled with Empty Cart
**Priority:** P1  
**Pre-conditions:**
- Cart is empty

**Steps:**
1. Navigate to Catalog page
2. Attempt to click "Checkout" or "Proceed to Checkout"

**Expected Result:**
- Checkout button disabled or hidden
- Or if clicked: error message "Add items to cart before checkout"

**Actual Result:** 
- the checkout button is disabled when the cart is empty

**Post-conditions:**
- Cannot proceed to checkout with empty cart

**Evidence Path:** `tests/evidence/cart-fatahi-7.png`

---

### TC-PAYMENT-001: Initialize Paystack Payment
**Priority:** P1  
**Pre-conditions:**
- Checkout complete, on Payment step (step 3)
- Valid shipping and review data
- Paystack SDK configured

**Steps:**
1. Verify Payment step displays total amount
2. Click "Pay Now" or similar button
3. Paystack modal/iframe loads
4. Verify amount shown matches total

**Expected Result:**
- Paystack payment modal displays
- Amount in NGN (or configured currency) shown correctly
- Modal interactive and responsive

**Actual Result:**
- payment interface display properly
- currency not configurable
- paystack payment modal display with an error interface
- payment gateway not initialized

**Post-conditions:**
- Payment gateway initialized
- Ready for user input or test card

**Evidence Path:** `tests/evidence/cart-fatahi-8.png`

---

### TC-PAYMENT-002: Currency Validation 
**Priority:** P1  
**Pre-conditions:**
- Cart has at least one item selected
- User details filled
- User click on "Pay Now" button

**Steps:**
1. Check payment modal displays correct symbol
2. Verify currency config is NGN/GHS/USD/ZAR
3. Amount shown in minor units (cents)

**Expected Result:**
- Supported currency accepted
- No preflight error
- Payment proceeds

**Actual Result**
- Payment function not accessible
- Error message: "We could not start this transaction" is displayed

**Post-conditions:**
- Payment not initialized

**Evidence Path:** `tests/evidence/cart-fatahi-8.png`

---

