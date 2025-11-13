## 1. TC-RISK-H1 — Checkout / Payments (FR-O03, FR-O04)
**Risk**: 
- Users cannot complete purchases (business-critical).
**Pre-conditions**: 
- App running 
- Cart has at least one item. 
- *.env* contains *REACT_APP_PAYSTACK_PUBLIC_KEY=pk_test_...* (or test key).
**Steps**:
- Go to */cart* and proceed to */checkout*.
- Fill shipping form with valid data and progress to Payment.
- Click Pay Now and complete test card flow (use Paystack test details).
- Observe payment success callback and order status.
**Expected**:
- Paystack modal opens. 
- Payment can be completed in test mode.
- Order gets updated to "Paid".
- Gateway Reference stored and visible on */orders/:id*.
- Cart cleared.
**Rationale**: 
- Payment completes conversion. 
- Critical business flow.
**Severity**: Critical
**Priority**: High
**Automation**:
- Unit/Jest coverage: ensure toMinorUnits and verifyPayment behavior with mocks.


## 2. TC-RISK-H2 — Payment cancellation and rollback (FR-O03, FR-O04)
**Risk**: 
- On cancel/error, orders incorrectly marked Paid or cart cleared.
**Pre-conditions**: 
- App running. 
- Cart has at least one item.
- *.env* contains *REACT_APP_PAYSTACK_PUBLIC_KEY=pk_test_...* (or test key).
**Steps**:
- Start checkout.
- Open payment modal. 
- Then close payment modal.
- Verify order status and cart state.
**Expected**:
- Order remains "Pending".  
- Cart remains intact. 
- User receives retry option.
- Clear error message is shown.
**Rationale**: 
- Prevents lost orders.
- User confusion.
**Severity**: Major
**Priority**: High
**Automation**:
- unit tests mocking startPayment failure path.


## 3. TC-RISK-H3 — LocalStorage persistence / quota handling (FR-S03, FR-O01)
**Risk**: 
- localStorage writes failing (quota) or corrupted JSON cause data loss or app crash.
**Pre-conditions**: 
- Browser localStorage available.
**Steps**:
- Add many items to cart to simulate large payload (or mock localStorage.setItem to throw QuotaExceededError).
- Observe app behavior after adding items and on page reload.
**Expected**:
- App gracefully handles write errors (storageErrors contains key).
- UI continues to work, user sees a non-blocking message or silent degradation, no crash.
**Rationale**: Data persistence is key for cart/orders; must gracefully handle failures.
**Severity**: Major
**Priority**: High
**Automation**: 
- Jest unit tests mocking Storage.prototype.setItem to throw (already added in storage.test.js). 
- Add an integration test to verify storageErrors exposure in StoreContext.


## 4. TC-RISK-H4 — Currency & rounding correctness (FR-O04, FR-O03)
**Risk**: 
- Currency mismatch or rounding bugs lead to incorrect charges and reconciliation errors.
**Pre-conditions**: 
- Set REACT_APP_CURRENCY to each supported currency.
**Steps**:
- Add items with prices like 10.555, 15.99, or mixes that cause rounding edge-cases.
- Check displayed line totals, tax calculation (8%), grand total, and what toMinorUnits returns.
- Simulate sending amount to Paystack and verify minor unit math.
**Expected**:
- UI totals are consistent with payment minor unit conversion.
- Rounding occurs per specification (line items 2dp; tax rounding rules documented).
- Differences <= ±0.01 with clear rationale.
**Rationale**: 
- Financial accuracy is essential.
**Severity**: Major
**Priority**: High
**Automation**: 
- Jest unit tests for toMinorUnits.
- Add integration tests for totals calculation in CheckoutPage to assert consistency.


## 5. TC-RISK-M1 — Stock and quantity enforcement (FR-O01)
**Risk**: 
- Users can order more than stock (inventory integrity).
**Steps**:
- Simulate stock for a book in data or introduce stock field in mocking.
- Try to set quantity > stock in Cart page.
- Attempt checkout.
**Expected**:
- App restricts quantity to stock limit or displays out-of-stock message.
- Prevent checkout if unavailable.
**Rationale**: 
- Prevents fulfillment and refund friction.
**Severity**: Major
**Priority**: Medium
**Automation**: 
- Unit tests for cart enforcement if stock implemented.
- Otherwise manual test and add unit tests when feature added.


## 6. TC-RISK-M2 — Admin access control (FR-A01)
**Risk**: 
- Unauthorized users access admin features.
**Steps**:
- Ensure localStorage['app.user'] is not admin.
- visit /admin.
- Verify Unauthorized message.
- Then set role to admin in localStorage and verify access.
**Expected**:
- Non-admin sees Unauthorized. 
- Admin sees admin console.
**Rationale**: 
- Security & privileges.
**Severity**: Major
**Priority**: Medium
**Automation**: 
- Jest rendering test for AdminPage.


## 7. TC-RISK-M3 — Cross site scripting(XSS) / UGC sanitization (FR-U03, FR-S01)
**Risk**: 
- Malicious user input triggers XSS via reviews or Q&A.
**Steps**:
- Submit user content with <script> or a javascript: URL in review/QA (if feature exists), or simulate sanitized pipeline.
- Inspect rendered output for execution.
**Expected**:
- Scripts are stripped/sanitized.
- Javascript: scheme blocked.
- Text renders as safe content.
**Rationale**: 
- Security vulnerability.
- Serious impact.
**Severity**: Major
**Priority**: Medium
**Automation**: 
- Security unit tests on sanitizer functions.
- Static analysis.
- Integrate DOMPurify or equivalent and write Jest tests.


## 8. TC-RISK-M4 — Search functionality and diacritics (FR-C01)
**Risk**: 
- Users cannot find products due to diacritics or trimming/case issues.
**Steps**:
- Search for Pride vs Pridé, partial matches, case-insensitive queries, whitespace padded queries.
**Expected**:
- Search is case-insensitive.
- Trims whitespace.
- Diacritics normalization either handled or documented as limitation.
**Rationale**: 
- UX and discoverability.
**Severity**: Medium
**Priority**: Medium
**Automation**: 
- Unit tests on search filter logic (Jest) — CatalogPage filtering function.


## 9. TC-RISK-L1 — Notifications badge correctness (FR-N01, FR-N02)
**Risk**: 
- Badge count not updating after mark-all-read.
**Steps**:
- Generate notifications.
- Open notification panel.
- Mark all read.
- Observe badge count and localStorage *app.notifications*.
**Expected**:
- Badge becomes 0 and notifications persisted as read.
**Rationale**: 
- UX
- Low business impact.
**Severity**: Low
**Priority**: Low
**Automation**: 
- Jest tests on notification logic when implemented.


## 10. TC-RISK-L2 — Responsive UI & keyboard navigation (FR-UI01, FR-X01)
**Risk**: 
- Mobile layout or keyboard navigation breaks basic flows.
**Steps**:
- Run manual viewport tests across breakpoints.
- Tab through key pages (Catalog, Cart, Checkout).
**Expected**:
- All interactive elements reachable via keyboard.
- Layout remains usable at common breakpoints.
**Rationale**: 
- Accessibility & broad user support.
**Severity**: Low
**Priority**: Low
**Automation**:
- Jest unit tests for ARIA attributes.


## 11. TC-RISK-L3 — CSV export format (FR-O07)
**Risk**: 
- Export uses localized decimal separators and breaks CSV import.
**Steps**:
- Export orders CSV.
- Open in Excel/Sheets with default settings in target locale.
**Expected**:
- CSV uses dot decimal, UTF-8, and RFC4180-compliant fields.
**Rationale**: 
- Admin reconciliation.
- Moderate impact.
**Severity**: Low
**Priority**: Low
**Automation**: 
- Programmatic check of generated CSV string in unit tests when export feature implemented.


## 12.TC-RISK-L4 — Image performance and LCP (FR-X02)
**Risk**: 
- Non-lazy images lead to poor LCP.
**Steps**:
- Inspect BookCard images for *loading="lazy"* attribute and explicit *width/height*.
- Run Lighthouse to measure LCP.
**Expected**:
- Images are lazy-loaded and LCP within budget where possible.
**Rationale**: 
- Performance
**Severity**: Low
**Priority**: Low
**Automation**: 
- Jest DOM attribute checks.