## BUG-001
**Summary:** No filter or sort option in catalog page  
**Severity:** Major
**Priority:** Medium  
**Environment:** Google chrome, Windows 11   

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

--

## BUG-002
**Summary:** Search option in navigation bar not working  
**Severity:** Major
**Priority:** Medium  
**Environment:** Google chrome, Windows 11   

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

--

## BUG-003
**Summary:** Both search bars lack clickable search buttons
**Severity:** Minor
**Priority:** Medium  
**Environment:** Google chrome, Windows 11   

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

--

## BUG-005
**Summary:**  Added individual book quantity on cart is endless
**Severity:** Medium
**Priority:** High  
**Environment:** Firefox, Pop OS 
**Test-Case ID:** 

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