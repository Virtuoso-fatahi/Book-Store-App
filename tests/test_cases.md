✅ Test Case 

### TC-CAT-001: Search Books by Title
FR Code: FR-02 (Search, Filter and Sort)
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
FR Code: FR-02 (Search, Filter and Sort)
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
FR Code: FR-02 (Search, Filter and Sort)
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
FR Code: FR-02 (Search, Filter and Sort)
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
FR Code: FR-02 (Search, Filter and Sort) 
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

### TC-CAT-006 : search by genre
FR Code: FR-02 (Search, Filter and Sort)
*priority:*P2
*Pre-conditions:*
- Catalog contains multiple genres (Romance, Science fiction).

*Steps:*
- Run the app
- Go to the search bar
- Type the genre e.g "science fiction".

*Expected Result:*
- Only science fiction books displayed; 
- if none, an empty-state message shows which filter produced zero results.

*Actual Result:*
- books according to the genre are produced based on full or partial description,author name and title

*Post-conditions:* 
- Genre filter active.


*Evidence path:* tests/evidence/genre.png

###  TC-CAT-007: Search handles diacritics
FR Code: FR-02 (Search, Filter and Sort)
*Priority:* P2
*Pre-conditions:* 
- Catalog contains titles with diacritics e.g.,pride and prejudicé

*Steps:*
- Run the app
- Search for the title using and without diacritics ("pride and prejudice" and "pride and prejudicé").
- Compare results.

*Expected Result:*
-diacritics-insensitive search returns both. Note: Current known limitation may fail — record behaviour.

*Actual results*
- no books are shown when diacritics are used

*Post-conditions:*
- Diactritics are not supported

*Evidence Path:* tests/evidence/diacritics.png

---

### TC-CART-001: Add Book to Cart 
FR Code: FR-03 (Search, Filter and Sort) 
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


### TC-CART-008: Reject Invalid Coupon
*Priority:* P2  
*Pre-conditions:*
- Cart with items
- Valid coupon code

*Steps:*
1. Locate coupon input field
2. Enter invalid coupon code

*Expected Result:*
- Coupon rejected

*Actual Results
- Checkout is not successful
- Coupon details not available

*Post-conditions:*
- Coupon field required

*Evidence Path:* 
tests/evidence/Reject_invalid_coupon.png

---

### TC-CHECKOUT-001: Enter Shipping Information
**Priority:** P1  
**Pre-conditions:**
- Cart with items
- Checkout button accessible

**Steps:**
- Click "Proceed to Checkout"
- Navigate to Shipping step (step 1 of 4)-
- Fill form: Full Name, Email, Address, City, Country, Postal Code
- Click "Next" to proceed
- Verify data preserved on next step

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

**Actual Result
-** Error message: "please fill out this field" when input is empty
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

**Actual Result
--** form data preserve on clicking the back button

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


### TC-CHECKOUT-007: Apply Valid Coupon
**Priority:** P2  
**Pre-conditions:**
- Cart with items
- Valid coupon code

**Steps:**
1. Locate coupon input field
2. Enter coupon code

**Expected Result:**
- Coupon accepted

**Actual Results**
- Checkout is not successful
- Coupon details not available

**Post-conditions:**
- Coupon field required

**Evidence Path:** 
tests/evidence/Apply_valid_coupon.png

---

### TC-CHECKOUT-008: Modal accessibility — focus return and aria-modal
**Priority:** P1
**Pre-conditions:** 
- Any modal (e.g., Paystack or promo modal) opens from a button

*Steps:*
- Focus a button that opens a modal
- Open the modal
- Tab through modal controls and then close it
- Observe whether focus returns to the originating button and aria-modal/role present

*Expected Result:*
- Modal traps focus while open 
- aria-modal present
- focus returns to the trigger when closed

*Actual Results:*
- Modal traps focus while open 
- focus returns to the trigger when closed

*Post-conditions:*
- No focus lost
- keyboard navigation stable

*Evidence Path:* tests/evidence/modal_a11y.png

---

### TC-CHECKOUT-009: Rounding variance check (line items vs grand total)
*Priority:* P2
*Pre-conditions:* 
- Cart with multiple items producing rounding edge cases (e.g., prices producing fractional cents when multiplied)

*Steps:*
- Add items chosen to illustrate rounding (e.g., 0.3333 prices) to the cart
- Compute expected line rounding and grand total per spec (tax rounding once on grand total)
- Compare app-displayed values with expected

*Expected Result:*
- Line items round to 2 dp
- tax rounded once on grand total 
- acceptable variance ±0.01 only

*Actual results:*
- Line items round to 2 dp
- tax not rounded once on grand total 

*Post-conditions:*
- Totals documented

*Evidence Path:* tests/evidence/rounding_variance.png

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

**Actual Result
-** Payment function not accessible
- Error message: "We could not start this transaction" is displayed

**Post-conditions:**
- Payment not initialized

**Evidence Path:** `tests/evidence/cart-fatahi-8.png`

---

### TC-ORDER-001: Check User order history and details
**Priority:** P2  
**Pre-conditions:**
- Cart with items
- Form filled correctly

**Steps:**
- Run the app
- Select a book
- Go to cart
- Go to checkout
- Fill the checkout form
- Review the order placed
- Make payment

**Expected Result:**
- Successful checkout
- User can access the order history

**Actual Results**
- Checkout is not successful
- Order history and details not accessible

**Post-conditions:**
- Availability of the 'paystack_key' would enable the user to checkout and view the order history and details.

**Evidence Path:** 
tests/evidence/Order history and details.png

---

### TC-ADMIN-001: One review per purchaser; edit & delete (FR-U01)
*Priority:* P2
*Pre-conditions:* 
- User has purchased Book A and is logged in

*Steps:*
1. Submit a review for Book A
2. Attempt to submit a second review for Book A
3. Edit the existing review and save changes
4. Delete the review and confirm

*Expected Result:*
- Second submission blocked; user can edit then delete their review; audit/log recorded if applicable

*Actual Results:*

*Post-conditions:*
- Only one review from the user exists for the book until deleted

*Evidence Path:* tests/evidence/review_one_per_user.png

---

### TC-ADMIN-002: Moderation flow — report → admin queue → action (FR-U02/FR-M04)
*Priority:* P2
*Pre-conditions:* 
- Public review exists; admin account available

*Steps:*
1. As a user, report a review
2. As admin, open moderation queue and locate the report
3. Approve or remove the review and add a moderation note
*Expected Result:*
- Report appears in admin queue; admin action (remove/keep) recorded with note in audit
*Post-conditions:*
- Moderation audit visible
*Evidence Path:* tests/evidence/moderation_flow.png

---

### (Admin/Orders) TC-ADMIN-003: Order lifecycle transitions (Pending → Paid → Fulfilled → Delivered)
*Priority:* P1
*Pre-conditions:* Order created and payment successful (simulated)
*Steps:*
1. After payment success, verify order status = Paid
2. As admin, mark order Fulfilled
3. Mark order Delivered
4. Verify status timeline and timestamps
*Expected Result:*
- Status transitions follow the correct sequence with audit entries and timestamps
*Post-conditions:*
- Order timeline accurate
*Evidence Path:* tests/evidence/order_lifecycle.png

---

### (Admin/Refunds) TC-ADMIN-004: Full and partial refunds (FR-R02)
*Priority:* P2
*Pre-conditions:* 
- Delivered order exists and admin refund tool available
*Steps:*
- As admin, initiate a full refund for Order X and confirm
- For Order Y, initiate a partial refund (select item(s) or amount)
- Verify audit trail and order status changes

*Expected Result:*
- Refunds processed in simulation, order statuses updated (Refunded or Partial/Refunded), audit entries recorded

*Post-conditions:*
- Accounting fields reflect refunded amounts
*Evidence Path:* tests/evidence/refund_full_partial.png

---

### (Admin/Import) TC-ADMIN-005: CSV import sanity (orders CSV import edge cases)
*Priority:* P3
*Pre-conditions:* Admin CSV import feature or data ingestion script available

*Steps:
- Create a CSV with missing columns, extra columns, and decimal comma formats
- Attempt to import via admin tool
- Observe validation errors and accepted rows

*Expected Result:*
- Import validates columns; rejects malformed rows with clear errors; documents accepted rows

*Post-conditions:*
- No broken data inserted
*Evidence Path:* tests/evidence/csv_import.png

---

### TC-NF-001 – Concurrent Users Handling

- ID: TC-NF-001
- Title: Verify app handles 1000 concurrent users
 **Pre-conditions:**
- Load testing tool configured

**Steps:**
- Simulate 1000 users accessing the app simultaneously
- Monitor system performance

**Expected Result:**
- App remains responsive; no crashes

**Actual Results**
 - App handled 1000 users with minor delay 

**Post-conditions:**
- None





### TC-NF-002 – Add Multiple Books to Cart

ID: TC-NF-002

Title: Verify cart handles multiple book additions

 **Pre-conditions:**
 - User is logged in; at least 50 books exist in catalog

**Steps:**
- Add 50 books consecutively to the cart
- Observe cart update speed

**Expected Result:**
-  Cart updates instantly; no lag

**Actual Result:**
- Cart updated with all 54 books 

**Post-conditions:**
- Cart contains 50 books

**Evidence:** 
tests/evidence/book_additions.png


### TC-NF-003 – Button and Link Usability

ID: TC-NF-003

**Title:** Verify buttons and links are clearly labeled

**Pre-conditions:**
- User is on any page of the app

**Steps:**
- Check all buttons and links
- Ensure labels are clear and understandable

**Expected Result:**
- All controls are intuitive

**Actual Result:**
- All buttons and links were clearly labeled 

**Post-conditions:**
 None

**Evidence:** 
tests/evidence/pay button.png


### TC-NF-004 – Navigation Usability

ID: TC-NF-004

**Title:** Verify smooth navigation between pages

**Pre-conditions:**
- User is logged in

**Steps:**
- Navigate: Homepage → Book Details → Cart → Checkout
- Expected Result: Navigation is smooth and error-free

**Actual Result:**
- Navigation smooth; no errors 

**Post-conditions:**
 None


### TC-NF-005 – Error Message Usability

ID: TC-NF-005

**Title:** Verify helpful error messages appear for invalid input

**Pre-conditions:**
- User is on a form input page

**Steps:**
- Enter invalid data (e.g., letters in phone field)
- Submit the form

**Expected Result:**
- Clear and friendly error message appears

**Actual Result:**
- Correct error message displayed 

**Post-conditions:** 
None

**Evidence:** tests/evidence/error_message.png

### C-NF-006 – Browser Compatibility

ID: TC-NF-006

**Title:** Verify app works on Chrome, Firefox, Safari, Edge

**Pre-conditions:**
- Browsers installed

**Steps:**
- Open app in each browser
- Navigate main pages

**Expected Result:**
- App functions correctly on all browsers

**Actual Result:**
- App works on all tested browsers 

**Post-conditions:** 
- None

**Evidence:** tests/evidence/browser_compatibility.png


### TC-NF-007 – Cart Data Preservation

ID: TC-NF-007

**Title:** Verify cart data remains after page refresh

**Pre-conditions:**
- User has items in cart

**Steps:**
- Refresh the page during checkout
- Expected Result: Cart items remain intact

**Actual Result:** 
- Cart preserved successfully 

**Post-conditions:**
- Cart still contains items

**Evidence:** tests/evidence/cart_preserved.png


### TC-NF-008 – Checkout Performance

ID: TC-NF-008

**Title:** Verify checkout completes 

**Pre-conditions:**
- User logged in; cart contains books

**Steps:**
- Proceed to checkout
- Complete payment process

**Expected Result:**
- Checkout completes 

**Actual Result:**
- Checkout is not completed 

**Post-conditions:**
- Order confirmed

**Evidence:**  tests/evidence/checkout_performance.png

### ID: TC-NF-009:Validate Keyboard Navigation Accessibility
FR Code(s): FR-X01
*Pre-conditions:*
- Browser open

*Steps:*
- Use TAB key to move across UI
- Use SHIFT+TAB to move backward

*Expected Result:*
- Focus ring visible
- All buttons/inputs reachable

Actual Result:

*Post-conditions:*
- No changes to UI settings


Evidence

### ID: TC-NF-010:Screen Reader Announces Form Errors               
FR Code(s): FR-X01
*Pre-conditions:*
- Form with invalid input

*Steps:*
- Submit empty form
- Turn on screen reader

*Expected Result:*
- aria-live announces: “This field is required”

*Post-conditions:*
- Screen reader returns to idle

Actual Result:
—
Evidence:

### ID: TC-NF-011:LCP (Largest Contentful Paint) Under 2.5s Desktop
FR Code(s): FR-X02
*Pre-conditions:*
- Lighthouse or DevTools available

*Steps:*
- Run performance test
- Record LCP time

*Expected Result:*
- LCP ≤ 2.5 seconds

*Post-conditions:*
- Performance metrics stored in DevTools
- Browser returns to idle state
- No user data modified

Actual Result:
—
Evidence:

### ID: TC-NF-012:Lazy Loading of Images
FR Code(s): FR-X02

*Pre-conditions:*
- Product list page

*Steps:*
- Inspect book card images
- Check “loading=lazy”

*Expected Result:*
- All images load lazily
 (Intentional defect may fail)

*Post-conditions:*
- Page fully loaded with stable layout

Actual Result:
—
Evidence:

---

### TC-RS-005: Book details content check (based on FR-02)
Priority: P1
*Pre-conditions:*
- Catalog open
-  books available

*Steps:*
- Click a book card to open its details page.
-  Confirm there are at least one image and that images have alt text.
- Look for stock or ETA information on the page.
- Verify title, author, price, and description are visible.

*Expected Result:*
- Images, alt text, stock/ETA, and metadata are present and readable.
Evidence: screenshot of book details.

---

### TC-RS-006: Add book to cart and verify (based on TC-CART-001)
Priority: P1
*Pre-conditions:* 
- Catalog open
- book in stock
Steps:
-  On a book card, click "Buy Now" or "Add to Cart".
-  Observe cart icon/badge for immediate increment.
-  Click the cart icon and open the Cart page.
-  Confirm the added book appears with quantity = 1 and correct price.

*Expected Result:*
- Book present in cart, badge incremented, total updated.
Evidence: screenshot of cart page showing item and totals.

---

### TC-RS-007: Add two different books (based on TC-CART-002)
Priority: P1
*Pre-conditions:* Catalog open
Steps:
- Add Book A to cart.
- Add Book B to cart.
- Open Cart page.
- Confirm both books are present as separate line items with qty=1 each.
- Verify cart subtotal equals sum of both prices.

*Expected Result:*
- Two separate lines present and totals correct.
Evidence: screenshot of cart with both items.

---

### TC-RS-008: Change quantity and verify totals (based on TC-CART-003)
Priority: P1
Pre-conditions: Cart contains an item
Steps:
- On the Cart page, find the quantity control for an item.
- Set quantity to 3 and save/confirm as required.
- Observe the line subtotal and the cart total.
- Calculate expected subtotal (price × 3) and compare.

*Expected Result:*
- Line subtotal and overall totals reflect the new quantity and show two decimal places.
Evidence: screenshot and quick calc note.

---

### TC-RS-009: Remove item from cart (based on TC-CART-004)
Priority: P1
*Pre-conditions:*
- Cart has 2+ items
Steps:
- On the Cart page, click the Remove/Delete action for the first item.
- Confirm any prompt if shown.
- Verify the item is removed and the cart badge decremented.
- Verify totals updated accordingly.

*Expected Result:*
- Item removed and totals/badge updated.
Evidence: screenshot before and after removal.

---

### TC-RS-010: Cart persistence across refresh (based on TC-CART-005 / TC-NF-007)
Priority: P1
*Pre-conditions:*
- Cart contains at least one item

*Steps:*
- Open the Cart page and note items and totals.
- Press the browser refresh (F5) or reload the page.
- After reload, open the Cart page if necessary and compare items/totals.

*Expected Result:*
- Cart items and quantities remain unchanged (persisted in localStorage).
Evidence: screenshot after refresh showing same cart contents.

---

### TC-RS-011: Empty cart message (based on TC-CART-006)
Priority: P2
*Pre-conditions:* 
- Cart empty
*Steps:*
- Ensure no items are in the cart.
- Open the Cart page.
- Observe the page content and look for the empty cart message.

*Expected Result:*
- Message "Your cart is empty. Continue shopping" is displayed and checkout controls are hidden or disabled.
Evidence: screenshot of empty cart message.

---

### TC-RS-012: Apply valid coupon (based on TC-CHECKOUT-007)
Priority: P2
Pre-conditions: Cart with items; a valid coupon code available
Steps:
1. On the Cart or Checkout page, locate the coupon input.
2. Enter a valid coupon code and click Apply.
3. Observe the discount line and new totals.
4. Verify the discount amount matches the coupon definition.
Expected Result:
- Discount applied and totals updated; coupon code shown in summary.
Evidence: screenshot showing coupon code and updated totals.

---

### TC-RS-013: Reject invalid/expired coupon (based on TC-CART-008)
Priority: P2
Pre-conditions: Cart with items
Steps:
1. Enter an invalid or expired coupon code.
2. Click Apply.
3. Observe the UI message and ensure totals have not changed.
Expected Result:
- Clear error message and totals unchanged.
Evidence: screenshot of error message.

---

### TC-RS-014: Coupon combinability/min-basket check
Priority: P2
Pre-conditions: Cart with items; two coupon codes (one non-combinable)
Steps:
1. Apply the non-combinable coupon and note totals.
2. Attempt to apply the second coupon.
3. Observe whether the second coupon is rejected and the message shown.
4. Adjust cart total to below min-basket and attempt to apply coupon that requires min-basket.
Expected Result:
- Non-combinable coupon blocks additional ones; min-basket enforced.
Evidence: screenshots for both attempts.

---

### TC-RS-015: Enter shipping information (based on TC-CHECKOUT-001)
Priority: P1
Pre-conditions: Cart with items
Steps:
1. Click "Proceed to Checkout".
2. Fill Full Name, Email, Address, City, Country, Postal Code with valid data.
3. Click Next.
4. Observe navigation to Review step.
Expected Result:
- Form validated and navigation proceeds to Review step with data stored.
Evidence: screenshot of Review step showing shipping summary.

---

### TC-RS-016: Shipping email validation (based on TC-CHECKOUT-002)
Priority: P1
Pre-conditions: Checkout Shipping step
Steps:
1. Leave Email field blank or type invalid email ("notanemail").
2. Click Next.
3. Observe validation messages and whether navigation occurs.
Expected Result:
- Error message for email; navigation blocked until corrected.
Evidence: screenshot of validation message.

---

### TC-RS-017: Require all shipping fields (based on TC-CHECKOUT-003)
Priority: P1
Pre-conditions: Checkout Shipping step
Steps:
1. Leave Full Name empty and fill other fields.
2. Click Next.
3. Observe the focused field and error shown.
Expected Result:
- Full Name flagged as required and navigation blocked.
Evidence: screenshot showing required error.

---

### TC-RS-018: Back button preserves data (based on TC-CHECKOUT-005)
Priority: P1
Pre-conditions: On Review step with shipping data entered
Steps:
1. Click Back to return to Shipping step.
2. Check each field contains the previously entered value.
3. Edit a field and navigate forward again.
Expected Result:
- Data preserved when navigating back and forth.
Evidence: screenshots of Shipping step before and after.

---

### TC-RS-019: Review totals verification (based on TC-CHECKOUT-004)
Priority: P1
Pre-conditions: Shipping step complete
Steps:
1. On Review step, list items and line subtotals.
2. Verify displayed subtotal equals sum of line items.
3. Verify shipping fee present and tax = 8% of subtotal is shown.
4. Verify final total calculation (subtotal + shipping + tax - discounts).
Expected Result:
- Numeric values match calculation and are formatted to 2 decimal places.
Evidence: screenshot and small hand calculation.

---

### TC-RS-020: Open payment modal (based on TC-PAYMENT-001)
Priority: P1
Pre-conditions: Review step complete; Paystack configured
Steps:
1. On Review or Payment step, click Pay Now.
2. Wait for Paystack modal/iframe to appear.
3. Confirm the amount and currency shown match the app's totals.
Expected Result:
- Paystack modal appears with correct amount and currency.
Evidence: screenshot of the modal showing the amount.

---

### TC-RS-021: Currency validation before payment (based on TC-PAYMENT-002)
Priority: P1
Pre-conditions: Review step complete
Steps:
1. Configure or simulate an unsupported currency in the app (or use test env where currency is unsupported).
2. Click Pay Now.
3. Observe any preflight error message preventing transaction start.
Expected Result:
- Clear preflight error indicating unsupported currency and payment blocked.
Evidence: screenshot of error message.

---

### TC-RS-022: Cancel payment and verify pending state (based on TC-PAYMENT-001)
Priority: P2
Pre-conditions: Paystack modal opened
Steps:
1. Open Paystack modal as in TC-RS-020.
2. Close the modal or cancel within the modal.
3. Return to the app and check order state (if order record was created).
Expected Result:
- Order remains Pending (no Paid state) and retry option present.
Evidence: screenshot of order list or pending status.

---

### TC-RS-023: Order appears in history after payment (based on TC-ORDER-001)
Priority: P2
Pre-conditions: Successful payment simulated
Steps:
1. Complete the payment process in test mode (simulate success).
2. Navigate to Orders/Order History page.
3. Locate the newest order and open its details.
4. Verify status = Paid and gatewayRef is visible.
Expected Result:
- Order present with status Paid and reference.
Evidence: screenshot of order details.

---

### TC-RS-024: Export orders CSV (based on Orders CSV acceptance)
Priority: P3
Pre-conditions: Orders exist
Steps:
1. Go to Orders page and click Export CSV.
2. Download the file and open in a spreadsheet application (Excel/Sheets).
3. Verify columns, header row, and decimal formatting (dot as decimal separator).
Expected Result:
- CSV opens correctly with expected columns and numeric formats.
Evidence: screenshot of spreadsheet with the CSV loaded.

---

### TC-RS-025: Request return within 7 days (based on FR-R01)
Priority: P3
Pre-conditions: Delivered order within 7 days
Steps:
1. On Order details, click Request Return.
2. Fill return reason and submit.
3. Verify the return request is accepted and an audit entry recorded.
Expected Result:
- Return accepted and audit entry visible in order history.
Evidence: screenshot showing return request and audit.

---

### TC-RS-026: Add review as purchaser and block non-purchaser (based on FR-U01)
Priority: P2
Pre-conditions: User has (or has not) purchased the book
Steps:
1. As a purchaser, navigate to book page and submit a review.
2. Verify the review appears.
3. As a non-purchaser, attempt to submit a review and note the response.
Expected Result:
- Purchaser can post; non-purchaser is blocked with message.
Evidence: screenshots of both attempts.

---

### TC-RS-027: Block unsafe markdown links (based on FR-U03)
Priority: P2
Pre-conditions: Review input accepts markdown
Steps:
1. Enter a review containing a link with scheme `javascript:`.
2. Submit the review.
3. Observe whether input is sanitized and whether the link is blocked.
Expected Result:
- JavaScript links blocked/sanitized and no scripts executed.
Evidence: screenshot of stored review or console showing sanitized output.

---

### TC-RS-028: Report review flows to admin queue (based on FR-U02)
Priority: P2
Pre-conditions: At least one review exists
Steps:
1. On a review, click Report/Flag.
2. As admin, open the moderation queue and confirm the flagged review appears.
Expected Result:
- Flagged review shows in admin moderation queue.
Evidence: screenshot of admin moderation queue.

---

### TC-RS-029: Admin access control and a simple CRUD check (based on FR-M01/M02)
Priority: P1
Pre-conditions: Two accounts exist (admin and non-admin)
Steps:
1. Log in as non-admin and navigate to /admin.
2. Verify access blocked or unauthorized message.
3. Log in as admin, go to admin Catalog, create a new book with minimal data, save it.
4. Verify book appears in catalog and details page.
Expected Result:
- Non-admin blocked; admin can create and the new book is visible.
Evidence: screenshots of unauthorized message and the new book entry.

---

### TC-RS-030: Notifications mark-all-read and badge (based on FR-N01/N02)
Priority: P2
Pre-conditions: Notifications exist
Steps:
1. Open notifications panel and note unread badge count.
2. Click Mark All Read.
3. Observe badge count and notification states.
Expected Result:
- Badge updates to 0 and notifications show read (note intentional defect may keep badge stale).
Evidence: screenshot before and after mark-all-read.

---

### TC-RS-031: Accessibility quick run (WCAG basics)
Priority: P2
Pre-conditions: Any page open
Steps:
1. Use the Tab key to navigate interactive elements on the page.
2. Ensure focus order is logical and visible.
3. Inspect form elements to confirm label association.
4. Run a Lighthouse or aXe quick scan (if available) and record top-level issues.
Expected Result:
- Focus order logical; labels present; no critical a11y violations.
Evidence: short log of observations and scan summary.

---

### TC-RS-032: Performance smoke test
Priority: P2
Pre-conditions: App running in test environment
Steps:
1. Open the Catalog page in a desktop browser.
2. Use browser devtools to measure LCP and TTI or note approximate load time.
3. Verify images are lazy-loaded (inspect image attributes).
Expected Result:
- Reasonable load times and images show lazy-loading attributes.
Evidence: screenshot of devtools network/timing and image attribute.

---

### TC-RS-033: Cross-browser smoke test
Priority: P2
Pre-conditions: Modern browsers available (Chrome, Firefox, Edge)
Steps:
1. Open the app in each browser.
2. Run a simple scenario: open Catalog → add a book → open Cart → proceed to Checkout.
3. Note any visible errors or deviations.
Expected Result:
- No major functional regressions across tested browsers.
Evidence: short log of results per browser and screenshots of any issues.

---


Notes:
- FR-O01..FR-O05 correspond to Cart/Checkout/Payment/Orders lifecycle outcomes in `functional-requirements.md`.
- FR-S01..FR-S03 refer to Sanitization/URL scheme/storage issues in the FR document.
- FR-X01..FR-X04 cover Accessibility, Performance, Compatibility and Security non-functional requirements.
- If you want every run-sheet ID expanded with explicit FR codes, I can generate that full mapping next.


