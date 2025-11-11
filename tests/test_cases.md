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

---

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