✅ Test Case 

### 1. TC-CAT-001: Search Books by Title
FR Code: FR-02 (Search, Filter and Sort)
**Priority:** P1  
**Pre-conditions:**
- The app is open on the Catalog page
- Book data is already loaded 
- Search bar is visible and working

**Steps:**
- Go to the Catalog page
- Find the search bar at the top
- Type “To Kill a Mockingbird” in the search box
- Press the Enter key
- Check the results that show up

**Expected Result:**
- Search should work even if the case (uppercase/lowercase) is different
- Books with similar titles should also appear 
- When the search box is empty, all books should show again
- Results should update instantly or after pressing Enter

**Actual Result:**
- books according to the book title is shown

**Post-conditions:**
- Catalog shows only the searched books
- The search word stays in the input until cleared

**Evidence Path:** tests/evidence/book_title.png

Status: Passed

---

### 2. TC-CAT-002: Search by Author Name
FR Code: FR-02 (Search, Filter and Sort)
**Priority:** P1  
**Pre-conditions:**
- App is open on the Catalog page
- There are several books with different authors


**Steps:**
- Open the Catalog page
- Type “Geo” in the search bar
- Press Enter
- Check if books by that author appear
- Try using small letters or capital letters to confirm case-insensitivity

**Expected Result:**
- Books written by “George Orwell” should appear
- Search should not be affected by upper/lowercase letters
- Books by other authors should not appear

**Actual Result:**
- Books by the searched author appear correctly

**Post-conditions:**
- Search shows only books by that author
- Author names are clearly displayed in the results

**Evidence Path:** tests/evidence/author.png

Status: Passed

---

### 3. TC-CAT-003: Search by Description
FR Code: FR-02 (Search, Filter and Sort)
**Priority:** P2  
**Pre-conditions:**
- catalog page is open 
- Books have proper descriptions

**Steps:**
- Make sure the catalog page is open
- Search using a keyword that appears in a book’s description
- Press Enter
- Observe which books appear in the results

**Expected Result:**
- Books that have the searched keyword in their description should appear
- Partial matches should also work
- The search results should make sense and be relevant

**Actual Result:**
- Only books that exactly match the keyword in the description appear

**Post-conditions:**
- Search results are displayed based on keyword relevance
- No wrong or unrelated results are shown

**Evidence Path:** tests/evidence/description.png

**Status:** Failed

---

### 4. TC-CAT-004: Empty Search Query Returns Full List
FR Code: FR-02 (Search, Filter and Sort)
**Priority:** P1  
**Pre-conditio ns:**
- App is open on the Catalog page
- A previous search was already done

**Steps:**
-  Perform any search
- Delete everything from the search bar
- Press Enter
- Observe what happens

**Expected Result:**
- The full book list should appear again
- No errors or blank screens should show
- All books become visible

**Actual Result:**
- The full book list displays correctly

**Post-conditions:**
- Catalog resets to its normal view
- Search bar becomes empty again

**Evidence Path:** tests/evidence/(tc4.png)

**Status:** Passed

---

### 5. TC-CAT-005: Search with Whitespace Trim 
FR Code: FR-02 (Search, Filter and Sort) 
**Priority:** P2  
**Pre-conditions:**
- Catalog page is open

**Steps:**
- Type spaces before and after the book name, for example “ To Kill a Mockingbird ”
- Press Enter
- Check if the results appear

**Expected Result:**
- The app should ignore the extra spaces and still show the correct book
- Search should work normally even if spaces are added by mistake

**Actual Result:**
- No books are shown when the whitespaces are added

**Post-conditions:**
- Search input should be cleaned automatically by trimming spaces

**Evidence Path:** tests/evidence/tc5.png

**Status:** Failed

---

### 6. TC-CAT-006 : search by genre
FR Code(s): FR-02
**priority:**P2

**Pre-conditions:**
- Catalog contains multiple genres (Romance, Science fiction).

**Steps:**
- Run the app
- Go to the search bar
- Type the genre e.g "science fiction".

**Expected Result:**
- Only science fiction books displayed; 
- if none, an empty-state message shows which filter produced zero results.

**Actual Result:**
- books according to the genre are produced based on full or partial description,author name and title

**Post-conditions:** 
- Genre filter active.

**Evidence path:** tests/evidence/genre.png

**Status:** Passed

---

### 7. TC-CAT-007: Search handles diacritics
FR Code: FR-02 (Search, Filter and Sort)
**Priority:** P2
**Pre-conditions:** 
- Catalog contains titles with diacritics e.g.,pride and prejudicé

**Steps:**
- Run the app
- Search for the title using and without diacritics ("pride and prejudice" and "pride and prejudicé").
- Compare results.

**Expected Result:**
-diacritics-insensitive search returns both. Note: Current known limitation may fail — record behaviour.

**Actual results**
- no books are shown when diacritics are used

**Post-conditions:**
- Diactritics are not supported

**Evidence Path:** tests/evidence/diacritics.png

**Status:** Failed

---

### 8. TC-CAT-008 — Verify filter and sort options on Catalog
**FR Code:** FR-02 (Search, Filter and Sort)
**Priority:** P1
**Pre-conditions:**
- The app is running and the Catalog page is accessible
- Book data is loaded in the catalog

**Steps:**
- Open the Catalog page
- Check for visible Filter controls (e.g., genre, author, price range) and Sort control (e.g., price/title ascending/descending)
- Select a filter (e.g., Author = "George Orwell") and apply
- Select a sort option (e.g., Price: Low → High)
- Observe the displayed list of books

**Expected Result:**
- Filter controls are present and usable
- Sort control is present and reorders results correctly
- Applying a filter limits results to matching books
- Applying a sort orders the results as selected

**Actual Result:**
-  No filter or sort option in catalog page 

**Post-conditions:**
- Catalog shows filtered and/or sorted list according to selections

**Evidence Path:** `tests/evidence/tc5.png`

**Status:** Failed

---

### 9. TC-CAT-009 — Verify navigation search triggers catalog search 
**FR Code:** FR-02 (Search, Filter and Sort)
**Priority:** P1
**Pre-conditions:**
- The app is running and the Catalog page is accessible
- Navigation bar with search input is visible

**Steps:**
- From any page, use the search input in the top navigation
- Type a known book title (e.g., "1984") and press Enter or click the search control
- Observe the Catalog page (or search results) for matching books
- Repeat using a partial title and using different letter case

**Expected Result:**
- The navigation search triggers the catalog search and displays matching books
- Search is case-insensitive and supports partial matches
- If no matches, a clear empty-state message is shown

**Actual Result:**
- Search option in navigation bar not working 

**Post-conditions:**
- Catalog shows search results or an empty-state message

**Evidence Path:** `tests/evidence/tc5.png`

**Status:** Failed

----

### 10. TC-CAT-010 — Verify clickable search buttons on nav and catalog
**FR Code:** FR-02 (Search, Filter and Sort)
**Priority:** P2
**Pre-conditions:**
- The app is running and both the top navigation search and the catalog page search input are visible

**Steps:**
- Open the bookstore app and navigate to the Catalog page
- Locate the search input in the top navigation and the search input on the Catalog page
- Confirm a visible search button/icon exists for each input (look for button with search icon or labelled "Search")
- Click the search button on the top navigation after entering a known book title (e.g., "1984")
- Click the search button on the Catalog page after entering a known book title
- Compare behavior with pressing Enter in each input

**Expected Result:**
- Each search input has a clearly visible, clickable search button
- Clicking the button performs the same search action as pressing Enter
- Buttons have accessible labels (e.g., aria-label="Search")

**Actual Result:**
- Both search bars lack clickable search buttons

**Post-conditions:**
- Search action executed and results shown or clear empty-state message displayed

**Evidence Path:** `tests/evidence/tc5.png`

**Status:** Failed

---

### 11. TC-CART-001: Add Book to Cart
FR Code: FR-03 (Search, Filter and Sort) 
**Priority:** P1  
**Pre-conditions:**
- App loaded on Catalog page
- At least 1 book available in stock

**Steps:**
- Browse catalog
- Locate a book and click "Buy Now" button
- Verify cart update (visual feedback, badge count)
- Navigate to Cart page
- Confirm book appears in cart with quantity=1

**Expected Result:**
- Book added to cart with quantity 1
- Cart icon badge increments
- Cart page shows added item

**Actual Result:** 
- Book added to the cart successfully.

**Post-conditions:**
- Book persists in cart (localStorage)
- Cart count updated

**Evidence Path:** tests/evidence/Add_book_to_cart.png

**Status:** Passed

---

### 12. TC-CART-002: Add Multiple Different Books
**Priority:** P1  
**Pre-conditions:**
- Catalog page loaded

**Steps:**
- Add Book A to cart
- Add Book B to cart
- Navigate to Cart page
- Verify both books present with quantity=1 each

**Expected Result:**
- Both books in cart as separate line items
- Cart total reflects both prices
- Each item shows correct price and quantity

**Actual Result:** 
- Multiple different books are added succcessfully

**Post-conditions:**
- Multiple items persist in localStorage

**Evidence Path:** tests/evidence/Multiple_different_books.png

**Status:** Passed

---

### 13. TC-CART-003: Update Item Quantity
**Priority:** P1  
**Pre-conditions:**
- Cart page with book item (qty=1)

**Steps:**
- Navigate to Cart page
- Locate quantity input for book
- Change quantity from 1 → 3
- Confirm update
- Verify cart totals recalculated

**Expected Result:**
- Quantity updates to 3
- Subtotal recalculated: price × 3
- Cart total reflects new amount
- No error

**Actual Result:** 
- Item quatity is updated as per the users selection

**Post-conditions:**
- New qty persisted
- Totals accurate

**Evidence Path:** tests/evidence/Update_Item_quantity.png

**Status:** Passed

---

### 14. TC-CART-004: Remove Item from Cart
**Priority:** P1  
**Pre-conditions:**
- Cart with 2+ items

**Steps:**
- Cart page open
- Locate "Remove" icon for first item
- Click to remove
- Verify item disappears

**Expected Result:**
- Item removed from cart
- Cart total recalculated
- Cart badge decremented
- Removed item gone permanently

**Actual Result:** 
- Item successfully removed from cart permanently

**Post-conditions:**
- Cart updated in localStorage
- Remaining items unchanged

**Evidence Path:** tests/evidence/Remove_item_from_cart_1.png
tests/evidence/Remove_item_from_cart_2.png

**Status:** Passed

---

### 15. TC-CART-005: Cart Persists Across Refresh
**Priority:** P1  
**Pre-conditions:**
- Cart with 2 items (qty=1 and qty=3)

**Steps:**
- Note cart items and totals
- Close/refresh browser (F5 or Cmd+R)
- Navigate back to Cart page
- Verify same items and quantities present

**Expected Result:**
- Cart contents unchanged after refresh
- Quantities and totals match previous session
- localStorage persisted correctly

**Actual Result:** 
- Items on the cart are not lost after refreshing or leaving the cart page

**Post-conditions:**
- Cart data persistent across sessions

**Evidence Path:** tests/evidence/Cart_persists_across_refresh_1.png
tests/evidence/Cart_persists_across_refresh_2.png
tests/evidence/Cart_persists_across_refresh_3.png

**Status:** Passed

---

### 16. TC-CART-006: Empty Cart Message
**Priority:** P2  
**Pre-conditions:**
- App loaded

**Steps:**
- Navigate to Cart page without adding items
- Or remove all items from cart
- Observe empty state

**Expected Result:**
- Message displayed: "Your cart is empty. Continue shopping"
- No totals/checkout button visible

**Actual Result:** 
- On an empty cart you get a prompt, "Your cart is empty. Continue shopping"

**Post-conditions:**
- Cart remains empty until items added

**Evidence Path:** tests/evidence/Empty_cart_message.png

**Status:** Passed

---

### 17. TC-CART-007: Calculate Subtotal Correctly
**Priority:** P1  
**Pre-conditions:**
- Cart with items: Book A (price R10.00, qty=2), Book B (price R15.00, qty=1)

**Steps:**
- Verify subtotal calculation
- Math: (10.00 × 2) + (15.00 × 1) = R35.00
- Check cart page displays R35.00

**Expected Result:**
- Subtotal = sum(price × qty) for all items
- Formatted to 2 decimal places
- No rounding errors

**Actual Result:** 
- Subtotal calculations match with the pricing x quantity of the books in the cart

**Post-conditions:**
- Subtotal accurate and persisted

**Evidence Path:** tests/evidence/calculates_subtotal_correctly.png

**Status:** Passed

---

### 18. TC-CART-008: Reject Invalid Coupon
**Priority:** P2  
**Pre-conditions:**
- Cart with items
- Valid coupon code

**Steps:**
- Locate coupon input field
- Enter invalid coupon code

**Expected Result:**
- Coupon rejected

**Actual Results
- Checkout is not successful
- Coupon details not available

**Post-conditions:**
- Coupon field required

**Evidence Path:** 
tests/evidence/Reject_invalid_coupon.png

**Status:** Failed

---

### 19. TC-CART-009 — Verify cart quantity respects stock/limits
**FR Code:** FR-03 (Cart) 
**Priority:** P1
**Pre-conditions:**
- The app is running and the Cart page is accessible
- At least one book exists in the catalog with a known stock quantity (e.g., stock = 10)

**Steps:**
- Add the book with known stock to the Cart
- On the Cart page, attempt to increase the item quantity beyond the known stock (e.g., set quantity to 500)
- Attempt to save/update the cart quantity
- Observe UI behavior and any validation messages
- Attempt to perform checkout with the artificially high quantity

**Expected Result:**
- The quantity control prevents setting a quantity greater than available stock
- The UI shows a clear validation message when attempting to exceed stock (e.g., "Only 10 items available")
- Server-side validation prevents checkout with invalid quantity
- Cart quantity is capped to available stock and persisted

**Actual Result:**
- Added individual book quantity on cart is endless

**Post-conditions:**
- Cart quantity limited to the available stock

**Evidence Path:** `tests/evidence/Bug-002.png`

**Status:** Failed

---

### 20. TC-CHECKOUT-001: Enter Shipping Information
**Priority:** P1  
**Pre-conditions:**
- Cart with items
- Checkout button accessible

**Steps:**
- Click "Proceed to Checkout"
- Navigate to Shipping step (step 1 of 4)
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

**Status:** Passed

---

### 21. TC-CHECKOUT-002: Validate Email Format 
**Priority:** P1  
**Pre-conditions:**
- Checkout Shipping step

**Steps:**
- Fill all fields except Email
- Enter invalid email: "notanemail"
- Click Next
- Observe validation error

**Expected Result:**
- Error message: "Please enter a valid email address"
- Email field highlighted/focused
- Next button disabled
- Form data not cleared

**Actual Result:** Error message: "please fill out this field" when input is empty
- next button not disabled when email is empty
- form only show error message when the "@" sign is missing

**Post-conditions:**
- Form remains on Shipping step
- User can correct and retry

**Evidence Path:** tests/evidence/cart-fatahi-3.png

**Status:** Failed

---

### 22. TC-CHECKOUT-003: Require All Shipping Fields
**Priority:** P1  
**Pre-conditions:**
- Checkout Shipping step

**Steps:**
- Leave "Full Name" field empty
- Fill other fields
- Click Next

**Expected Result:**
- Error message: "Full Name is required"
- Next button disabled
- Focus on empty field

**Actual Result:**
- form throws an error message when any input field is empty

**Post-conditions:**
- Form stays on Shipping step
- User prompted to complete

**Evidence Path:** tests/evidence/cart-fatahi-3B.png

**Status:** Passed

---

### 23. TC-CHECKOUT-004: Review Order Summary
**Priority:** P1  
**Pre-conditions:**
- Shipping step completed, moved to Review step

**Steps:**
- Verify Review step (step 2 of 4) displays:
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

**Post-conditions:**
- Review data reflects checkout data
- Ready to proceed to Payment

**Evidence Path:** tests/evidence/cart-fatahi-5.png

**Status:** Failed

---

### 24. TC-CHECKOUT-005: Back Button Preserves Data
**Priority:** P1  
**Pre-conditions:**
- On Review step (step 2)

**Steps:**
- Click "Back" button
- Return to Shipping step
- Verify all entered data still present

**Expected Result:**
- Full Name, Email, Address, etc. unchanged
- Form fields populated with previous input
- No data loss

**Actual Result:** 
- Form data preserve on clicking the back button

**Post-conditions:**
- Can edit shipping if needed
- Can proceed forward again

**Evidence Path:** tests/evidence/cart-fatahi-6.png

**Status:** Passed

---

### 25. TC-CHECKOUT-006: Checkout Disabled with Empty Cart
**Priority:** P1  
**Pre-conditions:**
- Cart is empty

**Steps:**
- Navigate to Catalog page
- Attempt to click "Checkout" or "Proceed to Checkout"

**Expected Result:**
- Checkout button disabled or hidden
- Or if clicked: error message "Add items to cart before checkout"

**Actual Result:** 
- the checkout button is disabled when the cart is empty

**Post-conditions:**
- Cannot proceed to checkout with empty cart

**Evidence Path:** tests/evidence/cart-fatahi-7.png

**Status:** Passed

---

### 26. TC-CHECKOUT-007: Apply Valid Coupon
**Priority:** P2  
**Pre-conditions:**
- Cart with items
- Valid coupon code

**Steps:**
- Locate coupon input field
- Enter coupon code

**Expected Result:**
- Coupon accepted

**Actual Results:** 
- Checkout is not successful
- Coupon details not available

**Post-conditions:**
- Coupon field required

**Evidence Path:** 
tests/evidence/Apply_valid_coupon.png

**Status:** Failed

---

### 27. TC-CHECKOUT-008: Modal accessibility — focus return and aria-modal
**Priority:** P1
*Pre-conditions:** 
- Any modal (e.g., Paystack modal) opens from a button

**Steps:**
- Focus a button that opens a modal
- Open the modal
- Tab through modal controls and then close it
- Observe whether focus returns to the originating button and aria-modal/role present

**Expected Result:**
- Modal traps focus while open 
- aria-modal present
- focus returns to the trigger when closed

**Actual Results:**
- Modal traps focus while open 
- focus returns to the trigger when closed

**Post-conditions:**
- No focus lost
- keyboard navigation stable

**Evidence Path:** tests/evidence/modal_a11y.png

**Status:** Passed

---

### 28. TC-CHECKOUT-009: Rounding variance check (line items vs grand total)
**Priority:** P2
**Pre-conditions:** 
- Cart with multiple items producing rounding edge cases (e.g., prices producing fractional cents when multiplied)

**Steps:**
- Add items chosen to illustrate rounding (e.g., 0.3333 prices) to the cart
- Compute expected line rounding and grand total per spec (tax rounding once on grand total)
- Compare app-displayed values with expected

**Expected Result:**
- Line items round to 2 dp
- tax rounded once on grand total 
- acceptable variance ±0.01 only

**Actual results:**
- Line items round to 2 dp
- tax not rounded once on grand total 

**Post-conditions:**
- Totals documented

**Evidence Path:** tests/evidence/rounding_variance.png

**Status:** Failed

---

### 29. TC-PAYMENT-001: Initialize Paystack Payment
**Priority:** P1  
**Pre-conditions:**
- Checkout complete, on Payment step (step 3)
- Valid shipping and review data
- Paystack SDK configured

**Steps:**
- Verify Payment step displays total amount
- Click "Pay Now" or similar button
- Paystack modal/iframe loads
- Verify amount shown matches total

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

**Evidence Path:** tests/evidence/cart-fatahi-8.png

**Status:** Failed

---

### 30. TC-PAYMENT-002: Currency Validation 
**Priority:** P1  
**Pre-conditions:**
- Cart has at least one item selected
- User details filled
- User click on "Pay Now" button

**Steps:**
- Check payment modal displays correct symbol
- Verify currency config is NGN/GHS/USD/ZAR
- Amount shown in minor units (cents)

**Expected Result:**
- Supported currency accepted
- No preflight error
- Payment proceeds

**Actual Result:** Payment function not accessible
- Error message: "We could not start this transaction" is displayed

**Post-conditions:**
- Payment not initialized

**Evidence Path:** tests/evidence/cart-fatahi-8.png

**Status:** Failed

---

### 31. TC-ORDER-001: Check User order history and details
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

**Status:** Failed

---

### 32. TC-ADMIN-001:Admin is unauthorized
**Priority:** P2
**Pre-conditions:** 
- App runs properly

**Steps:**
- Run the app
- Attempt to load admin page

**Expected Result:**
- The admin page loads successfully 

**Actual Results:**
- Admin page is unauthorized

**Post-conditions:**
- Admin can see gateway references for reconciliation.
                    
**Evidence Path:** tests/evidence/review_one_per_user.png

**Status:** Failed

---

### 33. TC-ADMIN-002: One review per purchaser; edit & delete (FR-U01)
**Priority:** P2
**Pre-conditions:** 
- User has purchased Book A and is logged in

**Steps:**
- Submit a review for Book A
- Attempt to submit a second review for Book A
- Edit the existing review and save changes
- Delete the review and confirm

**Expected Result:**
- Second submission blocked; user can edit then delete their review; audit/log recorded if applicable

**Actual Results:**
- user review not accessible

**Post-conditions:**
- Only one review from the user exists for the book until deleted

**Evidence Path:** tests/evidence/review_one_per_user.png

**Status:** Failed

---

### 34. TC-ADMIN-003: Moderation flow — report → admin queue → action (FR-U02/FR-M04)
**Priority:** P2
**Pre-conditions:** 
- Public review exists
- admin account available

**Steps:**
- As a user, report a review
- As admin, open moderation queue and locate the report
- Approve or remove the review and add a moderation note

**Expected Result:**
- Report appears in admin queue; admin action (remove/keep) recorded with note in audit

**Actual Results**
- the Moderation flow is not accessible

**Post-conditions:**
- Moderation audit visible

**Evidence Path:** tests/evidence/moderation_flow.png

**Status:** Failed

---

### 35. TC-ADMIN-004: Order lifecycle transitions (Pending → Paid → Fulfilled → Delivered)
**Priority:** P1
**Pre-conditions:** 
- Order created and payment successful (simulated)

**Steps:**
- run the app
- choose a book
- proceed to checkout
- fill the forms
- make payments

**Expected Result:**
- Status transitions follow the correct sequence with audit entries and timestamps

**Actual Results**
- order lifecycle not accessible due to unsuccessful payment initialization

**Post-conditions:**
- Order timeline accurate

**Evidence Path:** tests/evidence/order_lifecycle.png

**Status:** Failed

---

### 36. TC-ADMIN-005: Full and partial refunds (FR-R02)
**Priority:** P2
**Pre-conditions:** 
- Delivered order exists and admin refund tool available

**Steps:**
- As admin, initiate a full refund for the first Order and confirm
- For the second Order, initiate a partial refund (select item(s) or amount)
- Verify audit trail and order status changes

**Expected Result:**
- Refunds processed in simulation, order statuses updated (Refunded or Partial/Refunded), audit entries recorded

**Actual Results**
- Admin page functionality is not accessible

**Post-conditions:**
- Accounting fields reflect refunded amounts

**Evidence Path:** tests/evidence/refund_full_partial.png

**Status:** Failed

---

### 37. TC-ADMIN-006: CSV import sanity (orders CSV import edge cases)
**Priority:** P3
**Pre-conditions:** 
- Admin CSV import feature or data ingestion script available

**Steps:**
- Create a CSV with missing columns, extra columns, and decimal comma formats
- Attempt to import via admin tool
- Observe validation errors and accepted rows

**Expected Result:**
- Import validates columns 
- rejects malformed rows with clear errors
- documents accepted rows

**Actual Results**
- CSV import functionality not accessible

**Post-conditions:**
- No broken data inserted

**Evidence Path:** tests/evidence/csv_import.png

**Status:** Failed

---

### 38. TC-NF-001 – Concurrent Users Handling

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

**Status:** Passed

---

### 39. TC-NF-002 – Add Multiple Books to Cart

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

**Status:** Passed

---

### 40. TC-NF-003 – Button and Link Usability

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

**Status:** Passed

---
 
### 41. TC-NF-004 – Navigation Usability

**Title:** Verify smooth navigation between pages

**Pre-conditions:**
- User is logged in

**Steps:**
- Navigate: Homepage → Book Details → Cart → Checkout

**Expected Result:** 
- Navigation is smooth and error-free

**Actual Result:**
- Navigation smooth
- no errors 

**Post-conditions:**
 None

**Status:** Passed

---

### 42. TC-NF-005 – Error Message Usability - Verify helpful error messages appear for invalid input

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
- None

**Evidence:** tests/evidence/error_message.png

**Status:** Passed

---

### 43. TC-NF-006 – Browser Compatibility - Verify app works on Chrome, Firefox, Safari, Edge

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

**Status:** Passed

----

### 44. TC-NF-007 – Cart Data Preservation - Verify cart data remains after page refresh

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

**Status:** Passed

---

### 45. TC-NF-008 – Checkout Performance - Verify checkout completes 

**Pre-conditions:**
- User logged in
- cart contains books

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

**Status:** Passed

---

### 46. TC-NF-009:Validate Keyboard Navigation Accessibility
**FR Code(s):** FR-X01
**Pre-conditions:**
- Browser open
- app is running

**Steps:**
- Use TAB key to move across UI
- Use SHIFT+TAB to move backward

**Expected Result:**
- Focus ring visible
- All buttons/inputs reachable

**Actual Result:**
- Keyboard navigations works as expected

**Post-conditions:**
- No changes to UI settings

**Status:** Passed

---

### 47. TC-NF-010:Screen Reader Announces Form Errors
**FR Code(s):** FR-X01
**Pre-conditions:**
- Form with invalid input

**Steps:**
- Submit empty form
- Turn on screen reader

**Expected Result:**
- aria-live announces: “This field is required”

**Actual Result:**
- aria-live announces: “This field is required”

**Post-conditions:**
- Screen reader returns to idle

Evidence:

**Status:** Passed

---

### 48. TC-NF-011:LCP (Largest Contentful Paint) Under 2.5s Desktop
**FR Code(s):** FR-X02

**Pre-conditions:**
- Lighthouse or DevTools available

**Steps:**
- Run performance test
- Record LCP time

**Expected Result:**
- LCP ≤ 2.5 seconds

**Actual Results**
- LCP is > 2.5 seconds

**Post-conditions:**
- Performance metrics stored in DevTools
- Browser returns to idle state
- No user data modified

**Evidence:** tests/evidence/lcp.png

**Status:** Failed

---

### 49. TC-NF-012: Lazy Loading of Images
**FR Code(s):** FR-X02

**Pre-conditions:**
- Product list page

**Steps:**
- Inspect book card images
- Check “loading=lazy”

**Expected Result:**
- All images load lazily
 (Intentional defect may fail)

 **Actual Results**
 - the images load lazily

**Post-conditions:**
- Page fully loaded with stable layout

**Evidence:** tests/evidence/lazyloading.png

**Status:** Passed

---
