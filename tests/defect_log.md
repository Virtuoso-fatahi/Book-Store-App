## BUG-001
**Summary:** No filter or sort option in catalog page  
**Severity:** Major
**Priority:** Medium  
**Environment:** Google chrome, Windows 11 
**Test-Case ID:** TC-CAT-008  

**Steps to Reproduce:**
1. Go to the Catalog page  
2. Look for filter or sort options  

**Expected Result:**  
- User should be able to filter or sort books (by price, title, author). 

**Actual Result:**  
- No filter or sort options available. 

**Attachments:**  
`tests/evidence/tc5.png`  

**Notes:**  
- Feature missing — affects user experience  

**Status:** open

--

## BUG-002
**Summary:** Search option in navigation bar not working  
**Severity:** Major
**Priority:** Medium  
**Environment:** Google chrome, Windows 11  
**Test-Case ID:** TC-CAT-009  


**Steps to Reproduce:**
1. Go to the Catalog page  
2. Open the bookstore app
3. Try using the search bar in the top navigation
4. Type the book title and press Enter  

**Expected Result:**  
- Books matching the search query should display on the catalog page.

**Actual Result:**  
- Nothing happens — no response, and the page doesn’t update.


**Attachments:**  
`tests/evidence/tc5.png`  

**Notes:**  
- Likely missing event listener or incorrect route linking between navigation bar search and catalog search function.

**Status:** open


--

## BUG-003
**Summary:** Both search bars lack clickable search buttons
**Severity:** Minor
**Priority:** Medium  
**Environment:** Google chrome, Windows 11  
**Test-Case ID:** TC-CAT-010 

**Steps to Reproduce:**
1. Open the bookstore app
2. Check the search bar on the top navigation
3. Check the search bar on the catalog page

**Expected Result:**  
- Each search field should have a visible Search  icon button that performs the search when clicked.

**Actual Result:** 
- Both search inputs have no clickable search buttons — user must press Enter manually.

**Attachments:**  
`tests/evidence/tc5.png`  

**Notes:**  
- Reduces usability and accessibility, especially for mobile users or users unfamiliar with keyboard shortcuts.

**Status:** open

--

## BUG-004
**Summary:** Search with leading/trailing spaces returns no results  
**Severity:** Minor
**Priority:** Medium  
**Environment:** Google chrome, Windows 11   
**Test-Case ID:** TC-CAT-005

**Steps to Reproduce:**
1. Go to the Catalog page  
2. In the search bar, type "  To Kill a Mockingbird  " (with spaces before and after)  
3. Press Enter  

**Expected Result:**  
The system should trim the extra spaces and return results for “To Kill a Mockingbird.”  

**Actual Result:**  
No books are shown when spaces are present around the search query.  

**Attachments:**  
`tests/evidence/tc5.png`  

**Notes:**  
- This can confuse users since they might accidentally type spaces.  
- The fix may involve trimming the input value before searching.

**Status:** open


--

## BUG-005
**Summary:**  Added individual book quantity on cart is endless
**Severity:** Medium
**Priority:** High  
**Environment:** Firefox, Pop OS 
**Test-Case ID:** TC-CART-009

**Steps to Reproduce:**
1. Go to the Cart page  
2. Attempt to increase the quatity by 500 

**Expected Result:**  
Cart quantity should not exceed quantity in the database 

**Actual Result:**  
Cart quantity is not limited to database quatity

**Attachments:**  
`tests/evidence/Bug-002.png`  

**Notes:**  
- The app lacks stock data. 
- The fix may involve creating a database.  

**Status:** open



-- 

## BUG-006
**Summary:**  Initialized payment gateway
**Severity:** Critical
**Priority:** High  
**Environment:** Chrome, Windows 11  
**Test-Case ID:** TC-PAYMENT-001

**Steps to Reproduce:**
1. Go to the Cart page
2. Select desired quantity of books
3. Fill the form with appropriate details
4. Clcik the "Pay Now" button 

**Expected Result:**  
- Paystack payment modal displays
- Modal interactive and responsive
- Amount in or configured currency shown correctly

**Actual Result:**  
- Error message before payment gateway opens
- Payment modal does not open
- User unable to make payment

**Attachments:**  
`tests/evidence/cart-fatahi-8`  

**Notes:**  
- The app lacks paystack integration. 
- The fix may involve creating a paystack key to initialize payment.  

**Status:** open


---

## BUG-007
**Summary:**  Unsupported Currency Validation
**Severity:** High
**Priority:** High  
**Environment:** Chrome, Windows 11
**Test Case ID:** TC-PAYMENT-002 

**Steps to Reproduce:**
1. Go to the Cart page
2. Select desired quantity of books
3. Fill the form with appropriate details
4. Clcik the "Pay Now" button 

**Expected Result:**  
- Paystack payment modal displays
- Modal interactive and responsive
- Supported currency accepted
- No preflight error
- Payment proceeds

**Actual Result:**  
- Error message before payment gateway opens
- Payment modal does not open
- User unable to make payment

**Attachments:**  
`tests/evidence/cart-fatahi-8`  

**Notes:**  
- The app lacks paystack integration. 
- The fix may involve creating a paystack key to initialize payment.

**Status:** open

--

## BUG-008
**Summary:** Catalog search by description does not support partial matches
**Severity:** Minor
**Priority:** Medium
**Environment:** Chrome, Windows 11
**Test-Case ID:** TC-CAT-003

**Steps to Reproduce:**
1. Open the Catalog page
2. In the search box, enter a keyword that appears only in a book's description (partial word)
3. Press Enter

**Expected Result:**
- Books whose descriptions contain the keyword (partial matches) should appear in results

**Actual Result:**
- Only exact description matches are returned; partial matches are ignored

**Attachments:**
`tests/evidence/CAT-003-search-description.png`

**Notes:**
- Search tokenization or indexing may be too strict; consider using substring or token-based matching.

**Status:** open

--

## BUG-009
**Summary:** Search does not handle diacritics (accented characters)
**Severity:** Minor
**Priority:** Medium
**Environment:** Chrome, Windows 11
**Test-Case ID:** TC-CAT-007

**Steps to Reproduce:**
1. Open the Catalog page
2. Search for a title using diacritics (e.g., "prejudicé")
3. Observe results and repeat without diacritics ("prejudice")

**Expected Result:**
- Search should return matches regardless of diacritic usage (accent-insensitive)

**Actual Result:**
- No results shown when diacritics are used

**Attachments:**
`tests/evidence/diacritics.png`

**Notes:**
- Normalize strings (NFKD/NFKC) before comparison to support accent-insensitive search.

**Status:** open

--

## BUG-010
**Summary:** Coupon handling broken (valid coupons not applied; invalid coupons cause checkout failure)
**Severity:** Major
**Priority:** High
**Environment:** Chrome, Windows 11
**Test-Case ID:** TC-CART-008, TC-CHECKOUT-007

**Steps to Reproduce:**
1. Add items to cart
2. Enter a valid coupon on Cart or Checkout and apply
3. Observe discount line and totals
4. Enter an invalid coupon and apply

**Expected Result:**
- Valid coupons apply discount and update totals; invalid coupons show a clear error without blocking checkout

**Actual Result:**
- Valid coupons are not applied; checkout fails and coupon details are not available; invalid coupon flow may block progress

**Attachments:**
`tests/evidence/Reject_invalid_coupon.png`
`tests/evidence/Apply_valid_coupon.png`

**Notes:**
- Check coupon validation and discount application logic; ensure coupon service returns clear error codes and UI handles them gracefully.

**Status:** open

--

## BUG-011
**Summary:** Email validation on Checkout Shipping step is inconsistent and permissive
**Severity:** Major
**Priority:** High
**Environment:** Chrome, Windows 11
**Test-Case ID:** TC-CHECKOUT-002

**Steps to Reproduce:**
1. On Checkout Shipping step, enter invalid email values (empty string, "notanemail", missing '@')
2. Click Next

**Expected Result:**
- Form blocks progress and displays a clear message: "Please enter a valid email address"

**Actual Result:**
- Error message behavior is inconsistent: empty field shows generic message; Next button may remain enabled; validation only triggers for some invalid patterns

**Attachments:**
`tests/evidence/cart-fatahi-3.png`

**Notes:**
- Review client-side validation rules and HTML input attributes; ensure consistent validation and disabling of Next until corrected.

**Status:** open

--

## BUG-012
**Summary:** Review step does not display shipping address in order summary
**Severity:** Major
**Priority:** Medium
**Environment:** Chrome, Windows 11
**Test-Case ID:** TC-CHECKOUT-004

**Steps to Reproduce:**
1. Complete Shipping step with valid address
2. Proceed to Review step
3. Inspect the order summary for shipping address details

**Expected Result:**
- Shipping address summary is visible and matches entered values

**Actual Result:**
- Shipping address is missing from the Review step display

**Attachments:**
`tests/evidence/cart-fatahi-5.png`

**Notes:**
- Could be rendering or state-passing issue between steps; check state persistence when moving between checkout steps.

**Status:** open

--

## BUG-013
**Summary:** Rounding/tax calculation differs between line items and grand total (tax rounding issue)
**Severity:** Medium
**Priority:** Medium
**Environment:** Chrome, Windows 11
**Test-Case ID:** TC-CHECKOUT-009

**Steps to Reproduce:**
1. Add items with prices that produce fractional cents when multiplied by quantities
2. Observe line-item rounding and grand total/tax calculation

**Expected Result:**
- Line items round to 2 decimal places; tax is rounded once at the grand total per spec; acceptable variance ±0.01

**Actual Result:**
- Tax rounding is applied per line or incorrectly, causing variance beyond acceptable limits

**Attachments:**
`tests/evidence/rounding_variance.png`

**Notes:**
- Review calculation order and rounding strategy (e.g., round only final totals, not intermediate tax per line).

**Status:** open

--

## BUG-014
**Summary:** Order history/details inaccessible due to failed checkout
**Severity:** Major
**Priority:** High
**Environment:** Chrome, Windows 11
**Test-Case ID:** TC-ORDER-001

**Steps to Reproduce:**
1. Place an order (complete checkout and payment)
2. Navigate to Order History
3. Attempt to view order details

**Expected Result:**
- Completed orders appear in Order History and details view is accessible

**Actual Result:**
- Checkout is unsuccessful and order history/details are not available

**Attachments:**
`tests/evidence/Order history and details.png`

**Notes:**
- Likely related to payment initialization; verify order persistence even when payment gateway is in test/simulated mode.

**Status:** open

--

## BUG-015
**Summary:** Admin page returns unauthorized for admin users
**Severity:** Major
**Priority:** High
**Environment:** Chrome, Windows 11
**Test-Case ID:** TC-ADMIN-001

**Steps to Reproduce:**
1. Log in as admin
2. Attempt to navigate to /admin

**Expected Result:**
- Admin page loads and admin functions are accessible

**Actual Result:**
- Admin page shows unauthorized or blocked access

**Attachments:**
`tests/evidence/review_one_per_user.png`

**Notes:**
- Check auth/role assignment and route guards for admin routes.

**Status:** open

--

## BUG-016
**Summary:** Purchaser reviews not accessible / review flow broken
**Severity:** Major
**Priority:** Medium
**Environment:** Chrome, Windows 11
**Test-Case ID:** TC-ADMIN-002

**Steps to Reproduce:**
1. As a user who purchased Book A, navigate to the book page
2. Attempt to submit, edit or delete a review
3. As a non-purchaser, attempt to submit a review

**Expected Result:**
- Purchaser can post, edit and delete their review; non-purchaser is blocked

**Actual Result:**
- Reviews are not accessible and review actions fail

**Attachments:**
`tests/evidence/review_one_per_user.png`

**Notes:**
- Verify review access control, existence of purchase checks, and review CRUD endpoints.

**Status:** open

--

## BUG-017
**Summary:** Moderation flow (report → admin queue → action) inaccessible
**Severity:** Major
**Priority:** Medium
**Environment:** Chrome, Windows 11
**Test-Case ID:** TC-ADMIN-003

**Steps to Reproduce:**
1. As a user, report a review
2. As admin, open the moderation queue
3. Attempt to locate and action the report

**Expected Result:**
- Report appears in admin moderation queue and admin can act on it

**Actual Result:**
- Moderation flow is not accessible

**Attachments:**
`tests/evidence/moderation_flow.png`

**Notes:**
- Check report ingestion and admin queue visibility; ensure correct permissions and queue population.

**Status:** open

--

## BUG-018
**Summary:** Order lifecycle transitions not available (Pending → Paid → Fulfilled → Delivered)
**Severity:** Major
**Priority:** High
**Environment:** Chrome, Windows 11
**Test-Case ID:** TC-ADMIN-004

**Steps to Reproduce:**
1. Create an order and simulate successful payment
2. Inspect order lifecycle/status transitions in the admin order view

**Expected Result:**
- Order shows transitions with timestamps and audit entries

**Actual Result:**
- Order lifecycle not accessible (likely due to unsuccessful payment initialization)

**Attachments:**
`tests/evidence/order_lifecycle.png`

**Notes:**
- Ensure order status updates are triggered after payment callbacks and that admin timeline rendering is present.

**Status:** open

--

## BUG-019
**Summary:** Admin refund functionality is not accessible
**Severity:** Major
**Priority:** Medium
**Environment:** Chrome, Windows 11
**Test-Case ID:** TC-ADMIN-005

**Steps to Reproduce:**
1. As admin, open an order marked Delivered
2. Attempt to initiate a full or partial refund

**Expected Result:**
- Refunds can be initiated in simulation and audit entries recorded

**Actual Result:**
- Admin refund tool is not accessible

**Attachments:**
`tests/evidence/refund_full_partial.png`

**Notes:**
- Investigate admin tooling availability and refund API stubs.

**Status:** open

--

## BUG-020
**Summary:** CSV import for admin missing or broken (orders CSV import edge cases)
**Severity:** Minor
**Priority:** Medium
**Environment:** Chrome, Windows 11
**Test-Case ID:** TC-ADMIN-006

**Steps to Reproduce:**
1. Prepare CSV with missing/extra columns or decimal-comma formats
2. Attempt to import via Admin CSV import tool

**Expected Result:**
- Import validates columns and rejects malformed rows with clear errors

**Actual Result:**
- CSV import functionality not accessible

**Attachments:**
`tests/evidence/csv_import.png`

**Notes:**
- Add robust import validation and clear error reporting.

**Status:** open

--

## BUG-021
**Summary:** Checkout flow fails to complete (performance/checkout failure)
**Severity:** Major
**Priority:** High
**Environment:** Chrome, Windows 11
**Test-Case ID:** TC-NF-008

**Steps to Reproduce:**
1. Proceed through checkout with items in cart
2. Attempt to complete payment

**Expected Result:**
- Checkout completes within acceptable performance limits and returns order confirmation

**Actual Result:**
- Checkout does not complete

**Attachments:**
`tests/evidence/checkout_performance.png`

**Notes:**
- Investigate backend and payment integration performance; check for timeouts.

**Status:** open

--

## BUG-022
**Summary:** LCP is greater than target (performance regression)
**Severity:** Minor
**Priority:** Medium
**Environment:** Chrome, Windows 11
**Test-Case ID:** TC-NF-011

**Steps to Reproduce:**
1. Run Lighthouse or DevTools performance test on Catalog (desktop)
2. Record LCP metric

**Expected Result:**
- LCP ≤ 2.5 seconds

**Actual Result:**
- LCP > 2.5 seconds

**Attachments:**
`tests/evidence/lcp.png`

**Notes:**
- Optimize critical rendering path and lazy-load below-the-fold images to meet target.

**Status:** open
