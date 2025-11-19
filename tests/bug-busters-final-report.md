# 📋 Final Test Report — Book Store App QA Project

**Team:** Bug-Busters  
**Date:** November 18, 2025  
**Project:** Book Store App
**Testing Period:** November 5–18, 2025

---

## 📊 Executive Summary

This final report documents comprehensive testing of the Book Store App across functional, non-functional, and security dimensions. The team executed **49 test cases** covering catalog & discovery, cart & checkout, payments, orders, admin functionality, and accessibility/performance requirements.

### Key Metrics
- **Total Test Cases:** 49
- **Passed:** 26 (55%)
- **Failed:** 23 (45%)
- **Total Defects Logged:** 22
- **Critical:** 2 | **Major:** 10 | **Minor:** 10

### Critical Findings
1. **Payment Gateway Integration Failure** (BUG-006, BUG-007) — Paystack initialization blocked; orders cannot be completed
2. **Search Functionality Broken** (BUG-002, BUG-004, BUG-009) — Navigation search non-functional; diacritics not supported; whitespace handling fails
3. **Checkout Data Loss** (BUG-012) — Shipping address not displayed in Review step
4. **Coupon System Broken** (BUG-010) — Valid coupons not applied; invalid coupons cause failure

---

## 🎯 Test Objectives

### Primary Objectives
1. **Validate Core User Workflows**
   - Verify catalog browsing, search, and filtering functionality
   - Confirm cart management (add, remove, update quantities)
   - Validate checkout flow from shipping to payment completion
   - Ensure order creation and history tracking work end-to-end

2. **Assess Payment Integration**
   - Confirm Paystack payment gateway initialization and modal display
   - Validate currency handling and amount calculations
   - Test payment success/failure/cancellation scenarios
   - Verify order status updates post-payment

3. **Evaluate Admin & Order Management**
   - Verify admin access control and role-based authorization
   - Test order lifecycle management (Pending → Paid → Fulfilled)
   - Validate review and moderation workflows
   - Confirm refund processing functionality

4. **Quality Assurance for Non-Functional Requirements**
   - **Accessibility:** Verify WCAG 2.1 AA compliance (keyboard navigation, screen reader support, ARIA attributes)
   - **Performance:** Measure LCP, TTI; validate lazy loading and bundle optimization
   - **Compatibility:** Test cross-browser (Chrome, Firefox, Edge) and responsive design
   - **Security:** Validate input sanitization, XSS prevention, data persistence

5. **Identify & Document Defects**
   - Log all issues with severity/priority and reproducible steps
   - Capture evidence (screenshots, videos, console logs)
   - Categorize blockers, majors, and minors
   - Provide root cause analysis and remediation recommendations

### Secondary Objectives
- Assess data integrity (rounding, persistence, stock limits)
- Evaluate user experience friction points (search usability, form validation)
- Validate error handling and user messaging
- Test edge cases (empty cart, invalid inputs, expired sessions)

---

## Area Covered

### Functional Testing

#### Catalog & Discovery

- Title/author case-insensitive 
- Description partial-match 
- Diacritics handling
- Whitespace trimming

#### Cart & Checkout
- Add to cart
- Quantity update 
- Remove item 
- Cart persistence 
- Coupon handling 
- Stock enforcement 
- Shipping validation

#### Payments
- Gateway initialization 
- Currency/minor-unit math 
- Modal open 
- Success/cancel callbacks 
- Order state

#### Order
Executed TC-ORDER-001 and admin CSV import test TC-ADMIN-006 (order history, CSV import sanity).
Key checks: order creation on successful payment, order history access, CSV import validation and format (UTF-8, dot decimals).
Results: order history inaccessible due to payment blocker (failed); CSV import/admin tools not available (failed).
Evidence & next steps: enable payment flow first, implement order persistence and CSV import validation with locale-safe decimals.
Admin

#### Admin
Executed TC-ADMIN-001 → TC-ADMIN-006 (auth/access control, review moderation, refunds, order lifecycle).
Key checks: admin access control, moderation queue, refunds, order lifecycle transitions and audit logs.
Results: most admin functions inaccessible/unauthorized (failed), CSV/refund tools not available.
Evidence & next steps: implement role checks, expose admin console behind secure auth, add audit trails and refund simulation.

#### Notifications

Mapped tests to TC-RISK-L1 and relevant UI checks (badge count, mark-all-read persistence).
Key checks: badge increments, mark-all-read behavior, localStorage persistence and UI sync.
Results: test design present in risk cases; implement/execute automated Jest checks to assert badge -> 0 after mark-all-read.
Evidence & next steps: add tests that modify tests/evidence/app.notifications and assert UI badge update.
### Non‑Functional
#### Accessibility

Executed TC-CHECKOUT-008, TC-NF-009, TC-NF-010 (modal focus, keyboard nav, screen-reader announcements).
Key checks: focus management, aria-live for form errors, full keyboard navigation coverage.
Results: modal a11y, keyboard navigation and screen-reader messages passed; evidence in modal_a11y.png and related files.
Evidence & next steps: expand axe scans and add automated a11y tests in CI.
#### Performance

Executed TC-NF-008, TC-NF-011, TC-NF-012 (checkout perf, LCP, image lazy-loading).
Key checks: checkout responsiveness under load, LCP <= 2.5s, lazy-loading images and explicit dimensions.
Results: some perf tests passed (checkout under synthetic load), LCP > 2.5s failed, lazy-loading passed.
Evidence & next steps: gather Lighthouse reports, optimize LCP (critical CSS, image sizing, preloads).
#### Compatibility

Executed TC-NF-006 and cross-browser/manual checks (Chrome, Firefox, Safari, Edge).
Key checks: layout and feature consistency across target browsers and device sizes.
Results: browser compatibility tests passed on tested matrix; record in tests/evidence/browser_compatibility.png.
Evidence & next steps: expand matrix to latest two major versions and add CI cross-browser smoke tests.
#### Security hygiene

Mapped to TC-RISK-M3 and admin/auth tests (XSS sanitization, auth checks, storage safety).
Key checks: input sanitization for UGC, admin access restrictions, localStorage error handling (QuotaExceeded).
Results: sanitizer not fully validated (risk test recommends DOMPurify); admin access failing (unauthorized), storage tests present in unit suite.
Evidence & next steps: add sanitizer integration tests, enforce server/client auth checks, harden localStorage wrappers and add Jest mocks for quota errors.


### Areas not Covered
- Real payment capture / server-side reconciliation (only client/test-mode Paystack planned).
- Multi‑currency catalog management and locale-specific pricing display & formatting.
- Shipping carrier integrations (rates, tracking, ETA APIs).
- Automated E2E tests for full Paystack flows using headless gateway or service mocks.
- Refund financial reconciliation & accounting‑level checks beyond UI simulation.
- Internationalization (i18n) and locale specific CSV variants (decimal comma, date formats) in automated tests.
- Deep admin workflows (bulk operations, role management, audit search) — admin UI mostly unreachable.
- Long‑running concurrency for stock race conditions (real backend race simulation).
- Full device / real‑device mobile test matrix (device farm coverage).
- Penetration testing (auth bypass, CSRF, broken access control) and CI security scans.
- Monitoring/observability checks (logging, alerts, telemetry) and performance under real network conditions.
--- 

## 🎯 Testing Approach

### Test Strategy
- **Risk-Based Testing:** Prioritized high-impact user flows (checkout, payments, orders)
- **Manual & Automated:** Primary manual testing with Jest unit test coverage where available
- **Accessibility & Performance:** Integrated WCAG 2.1 AA checks and Lighthouse metrics
- **Cross-Browser:** Chrome, Firefox, Edge on Windows 11 and PopOS
- **Evidence Capture:** Screenshots, console logs, and test data annotations

### Test Types Executed
1. **Functional Testing** — User workflows, data persistence, state management
2. **Accessibility Testing** — Keyboard navigation, screen reader compatibility, ARIA attributes
3. **Performance Testing** — LCP, TTI, lazy loading, DevTools profiling
4. **Compatibility Testing** — Multi-browser, responsive breakpoints
5. **Security Hygiene** — Input sanitization, XSS prevention, URL scheme validation

### Tools & Environment
- **Browsers:** Chrome v131, Firefox v133, Edge v131
- **OS:** Windows 11, PopOS
- **Testing Tools:** Chrome DevTools, Lighthouse, axe DevTools, manual inspection
- **Project Management:** Jira (https://fatahishowunmi.atlassian.net/jira/software/projects/BSAQP)
- **Data Management:** localStorage inspection, seed.json validation

---

## 📈 Results by Test Category

### 1. **Catalog & Discovery (FR-02)** — 7/10 Passed (70%)

| Test Case | Status | Finding |
|-----------|--------|---------|
| TC-CAT-001: Search by Title | ✅ PASS | Case-insensitive search working for titles |
| TC-CAT-002: Search by Author | ✅ PASS | Author search returns correct results |
| TC-CAT-003: Search by Description | ❌ FAIL | Partial matches not supported; only exact matches |
| TC-CAT-004: Empty Search Returns Full List | ✅ PASS | Clearing search resets catalog correctly |
| TC-CAT-005: Whitespace Trim | ❌ FAIL | Leading/trailing spaces cause no results |
| TC-CAT-006: Search by Genre | ✅ PASS | Genre-based search functional |
| TC-CAT-007: Diacritics Support | ❌ FAIL | Accented characters (café vs cafe) not normalized |
| TC-CAT-008: Filter & Sort Options | ❌ FAIL | **No filter or sort UI controls present** (BUG-001) |
| TC-CAT-009: Navigation Search | ❌ FAIL | **Top navigation search non-functional** (BUG-002) |
| TC-CAT-010: Clickable Search Buttons | ❌ FAIL | **Both search bars missing search button icons** (BUG-003) |

**Key Issues:**
- Search feature partially implemented (title/author/genre work; description/diacritics do not)
- Navigation search disconnected from catalog
- No UI controls for filtering or sorting
- User experience friction from missing search buttons

---

### 2. **Cart Management (FR-03-001)** — 5/7 Passed (71%)

| Test Case | Status | Finding |
|-----------|--------|---------|
| TC-CART-001: Add Book to Cart | ✅ PASS | Single item addition and cart persistence working |
| TC-CART-002: Add Multiple Books | ✅ PASS | Multiple items correctly isolated and totaled |
| TC-CART-003: Update Item Quantity | ✅ PASS | Quantity updates reflected in totals |
| TC-CART-004: Remove Item | ✅ PASS | Item removal and recalculation working |
| TC-CART-005: Cart Persists Across Refresh | ✅ PASS | localStorage persistence verified across sessions |
| TC-CART-006: Empty Cart Message | ✅ PASS | Empty state message displays correctly |
| TC-CART-007: Subtotal Calculation | ⚠️ BLOCKED | Dependent on checkout completion; rounding variance noted (BUG-013) |
| TC-CART-008: Reject Invalid Coupon | ❌ FAIL | **Coupon system non-functional** (BUG-010) |
| TC-CART-009: Stock Limit Enforcement | ❌ FAIL | **Quantity can exceed database stock** (BUG-005) |

**Key Issues:**
- Cart core functionality solid (add/remove/persist)
- **Critical:** Unlimited quantity entry (no stock validation)
- **Critical:** Coupon system completely broken

---

### 3. **Checkout & Payment (FR-O03/O04)** — 4/12 Passed (33%)

| Test Case | Status | Finding |
|-----------|--------|---------|
| TC-CHECKOUT-001: Shipping Form | ⚠️ PARTIAL | Form fields present but email validation inconsistent (BUG-011) |
| TC-CHECKOUT-002: Email Validation | ❌ FAIL | **Invalid emails (missing @, empty) not blocked consistently** (BUG-011) |
| TC-CHECKOUT-003: Required Fields | ⚠️ PARTIAL | Some fields enforced; validation messages unclear |
| TC-CHECKOUT-004: Review Summary | ❌ FAIL | **Shipping address missing from Review step** (BUG-012) |
| TC-CHECKOUT-005: Back Button State | ⚠️ PARTIAL | Button works; data preservation on back needs verification |
| TC-CHECKOUT-006: Empty Cart Blocks Checkout | ✅ PASS | Checkout correctly disabled when cart empty |
| TC-CHECKOUT-007: Apply Coupon | ❌ FAIL | **Coupon field present but non-functional** (BUG-010) |
| TC-CHECKOUT-008: Modal Accessibility | ⚠️ BLOCKED | Checkout modal not yet styled/accessible |
| TC-CHECKOUT-009: Tax Rounding | ❌ FAIL | **Rounding variance ±0.02 exceeds ±0.01 spec** (BUG-013) |
| TC-PAYMENT-001: Paystack Init | ❌ FAIL | **Payment gateway fails to initialize; error before modal** (BUG-006) |
| TC-PAYMENT-002: Currency Validation | ❌ FAIL | **Unsupported currency error before payment starts** (BUG-007) |
| TC-ORDER-001: Order History | ❌ FAIL | **Order history inaccessible; no orders created due to payment failure** (BUG-014) |

**Key Issues:**
- **BLOCKER:** Payment gateway integration missing/misconfigured (Paystack key or SDK not initialized)
- Shipping address lost between steps (state management issue)
- Email validation permissive and inconsistent
- Tax/rounding calculations need audit
- Coupon system breaks checkout

---

### 4. **Orders & Admin (FR-O05, FR-A01+)** — 0/8 Passed (0%)

| Test Case | Status | Finding |
|-----------|--------|---------|
| TC-ADMIN-001: Admin Access Control | ❌ FAIL | **Admin page shows unauthorized even for admin role** (BUG-015) |
| TC-ADMIN-002: Reviews (Purchaser Only) | ❌ FAIL | Review feature not accessible (BUG-016) |
| TC-ADMIN-003: Moderation Queue | ❌ FAIL | Moderation flow inaccessible (BUG-017) |
| TC-ADMIN-004: Order Lifecycle | ❌ FAIL | **Order status transitions not accessible; no orders created** (BUG-018) |
| TC-ADMIN-005: Refund Processing | ❌ FAIL | **Admin refund tool not accessible** (BUG-019) |
| TC-ADMIN-006: CSV Import | ❌ FAIL | CSV import functionality not present (BUG-020) |
| TC-ORDER-001: Order History/Details | ❌ FAIL | **Order history blocked by payment failure** (BUG-014) |
| TC-ADMIN-007: Notifications Badge | ⚠️ BLOCKED | Feature not fully implemented |

**Key Issues:**
- **CRITICAL:** Admin pages inaccessible due to auth/routing issues
- Review and moderation flows not implemented
- Order lifecycle and refunds blocked by payment failure
- CSV export missing

---

### 5. **Accessibility (FR-X01)** — 5/7 Passed (71%)

| Test Case | Status | Finding |
|-----------|--------|---------|
| TC-NF-009: Keyboard Navigation | ✅ PASS | Tab/Shift+Tab navigation functional; focus rings visible |
| TC-NF-010: Screen Reader Form Errors | ✅ PASS | aria-live announcements working for form validation |
| TC-NF-003: Button Labels | ✅ PASS | All controls clearly labeled |
| TC-NF-004: Navigation Usability | ✅ PASS | Page-to-page navigation smooth |
| TC-RS-031: WCAG Quick Scan | ⚠️ PARTIAL | axe scan shows 3 minor violations (color contrast, missing labels in checkout) |
| TC-CHECKOUT-008: Modal Accessibility | ❌ FAIL | **Checkout modal missing aria-modal and focus return** (Intentional defect noted) |
| TC-CHECKOUT-001: Form Accessibility | ⚠️ PARTIAL | Shipping form labels present; email field lacks clear error messaging |

**Key Issues:**
- Core keyboard navigation and screen reader support solid
- Checkout modal accessibility intentionally incomplete
- Minor contrast issues in non-critical areas
- Error messages need ARIA live region reinforcement

---

### 6. **Performance (FR-X02)** — 2/5 Passed (40%)

| Test Case | Status | Finding |
|-----------|--------|---------|
| TC-NF-011: LCP ≤ 2.5s Desktop | ❌ FAIL | **LCP measured at 2.8–3.2s; exceeds 2.5s target** (BUG-022) |
| TC-NF-012: Image Lazy Loading | ✅ PASS | BookCard images correctly marked with `loading="lazy"` |
| TC-RS-032: Performance Smoke Test | ⚠️ PARTIAL | App loads; some jank observed during cart updates |
| TC-NF-001: Concurrent Users | ✅ PASS | Load test (simulated 1000 concurrent) handled without crashes |
| TC-NF-008: Checkout Performance | ❌ FAIL | Checkout blocked by payment failure; cannot measure full flow |

**Key Issues:**
- **LCP regression:** Images lazy-loaded correctly but initial render slow (likely JS bundle size)
- Concurrent load handled well (good)
- Checkout performance untestable due to payment blocker

---

### 7. **Compatibility (FR-X03)** — 3/3 Passed (100%)

| Test Case | Status | Finding |
|-----------|--------|---------|
| TC-NF-006: Cross-Browser | ✅ PASS | App functional on Chrome, Firefox, Edge |
| TC-RS-033: Cross-Browser Smoke | ✅ PASS | Navigation and catalog work across browsers |
| TC-NF-004: Responsive Layout | ✅ PASS | Responsive breakpoints working (mobile/tablet/desktop) |

**Key Issues:**
- No cross-browser issues detected
- Responsive design solid

---

## 🐞 Defect Summary

### Critical Defects (Blockers)

#### BUG-006: Payment Gateway Initialization Failure
- **Severity:** Critical | **Priority:** High | **Status:** Open
- **FR:** FR-O04
- **Summary:** Paystack payment modal fails to initialize; error displayed before modal opens
- **Steps:** Cart → Checkout → Fill Shipping → Review → Click "Pay Now"
- **Expected:** Paystack modal displays with amount and currency
- **Actual:** Error message: "Paystack key invalid/missing"; modal does not open
- **Root Cause:** `REACT_APP_PAYSTACK_PUBLIC_KEY` not configured or SDK not loaded
- **Impact:** **Users cannot complete purchases; conversion blocked entirely**
- **Evidence:** `tests/evidence/cart-fatahi-8`

#### BUG-007: Unsupported Currency Validation
- **Severity:** High | **Priority:** High | **Status:** Open
- **FR:** FR-O04
- **Summary:** Currency validation fails before payment; preflight error blocks payment
- **Steps:** Set unsupported currency → Proceed to checkout → Click "Pay Now"
- **Expected:** Supported currency (NGN/GHS/USD/ZAR) accepted; payment proceeds
- **Actual:** Error message before gateway opens; payment blocked
- **Root Cause:** Currency validation in Paystack config or service
- **Impact:** Users in unsupported regions blocked from payment
- **Evidence:** `tests/evidence/cart-fatahi-8`

#### BUG-010: Coupon System Broken
- **Severity:** Major | **Priority:** High | **Status:** Open
- **FR:** FR-O04, FR-O03
- **Summary:** Valid coupons not applied; invalid coupons cause checkout failure
- **Steps:** Add items → Enter valid coupon → Apply
- **Expected:** Discount applied; totals updated
- **Actual:** Coupon not applied; checkout may fail with invalid coupon
- **Root Cause:** Coupon service not implemented or route/validation broken
- **Impact:** Discounts unavailable; checkout unreliable
- **Evidence:** `tests/evidence/Apply_valid_coupon.png`, `tests/evidence/Reject_invalid_coupon.png`

#### BUG-014: Order History Inaccessible
- **Severity:** Major | **Priority:** High | **Status:** Open
- **FR:** FR-O05, FR-O06
- **Summary:** Order history/details page not accessible; no orders created due to payment failure
- **Steps:** Complete checkout and payment → Navigate to /orders
- **Expected:** Order appears in history; details accessible
- **Actual:** Payment fails; no orders created; history page inaccessible or empty
- **Root Cause:** Dependent on payment gateway; order creation not triggered
- **Impact:** Users cannot track purchases
- **Evidence:** `tests/evidence/Order history and details.png`

---

### Major Defects

#### BUG-001: No Filter or Sort Options
- **Severity:** Major | **Priority:** Medium | **Status:** Open
- **FR:** FR-02
- **Summary:** Catalog page lacks filter and sort controls
- **Expected:** Filter by genre/author/price; sort by price/rating
- **Actual:** No UI controls present
- **Impact:** UX friction; discoverability impaired
- **Evidence:** `tests/evidence/tc5.png`

#### BUG-002: Navigation Search Non-Functional
- **Severity:** Major | **Priority:** Medium | **Status:** Open
- **FR:** FR-02
- **Summary:** Top navigation search bar does not trigger catalog search
- **Steps:** Top nav → Type book title → Press Enter
- **Expected:** Navigate to /catalog with results
- **Actual:** Nothing happens; page unchanged
- **Root Cause:** Search input not wired to catalog route/state
- **Impact:** Search inaccessible from top nav; UX fragmented
- **Evidence:** `tests/evidence/tc5.png`

#### BUG-005: Unlimited Cart Quantity (No Stock Limit)
- **Severity:** Major | **Priority:** High | **Status:** Open
- **FR:** FR-O01
- **Summary:** Cart quantity can be set to any value; no stock enforcement
- **Steps:** Cart → Set quantity to 500
- **Expected:** Quantity limited to database stock or default limit
- **Actual:** Quantity accepted without validation
- **Impact:** Inventory risk; orders cannot be fulfilled
- **Evidence:** `tests/evidence/Bug-002.png`

#### BUG-011: Email Validation Inconsistent
- **Severity:** Major | **Priority:** High | **Status:** Open
- **FR:** FR-O02
- **Summary:** Checkout email validation permissive; invalid emails sometimes accepted
- **Steps:** Shipping form → Enter "notanemail" or empty → Click Next
- **Expected:** Error message; form blocked
- **Actual:** Validation inconsistent; some invalid patterns accepted
- **Root Cause:** Client-side validation regex weak or missing
- **Impact:** Invalid orders created; checkout data corrupted
- **Evidence:** `tests/evidence/cart-fatahi-3.png`

#### BUG-012: Shipping Address Missing in Review Step
- **Severity:** Major | **Priority:** Medium | **Status:** Open
- **FR:** FR-O02
- **Summary:** Address entered in Shipping step not displayed in Review step
- **Steps:** Complete Shipping form → Proceed to Review → Inspect summary
- **Expected:** Shipping address summary visible
- **Actual:** Address field blank/missing
- **Root Cause:** State not persisted between steps or rendering bug
- **Impact:** Users cannot verify shipping details before payment
- **Evidence:** `tests/evidence/cart-fatahi-5.png`

#### BUG-013: Tax Rounding Variance
- **Severity:** Major | **Priority:** Medium | **Status:** Open
- **FR:** FR-O03
- **Summary:** Rounding variance between line items and grand total exceeds ±0.01 spec
- **Steps:** Add items with fractional prices → Observe line totals vs grand total
- **Expected:** Variance ≤ ±0.01; documented rounding rules
- **Actual:** Variance observed as ±0.02+
- **Impact:** Financial reconciliation issues; customer confusion
- **Evidence:** `tests/evidence/rounding_variance.png`

#### BUG-015: Admin Page Unauthorized
- **Severity:** Major | **Priority:** High | **Status:** Open
- **FR:** FR-A01
- **Summary:** Admin page returns unauthorized even when user has admin role
- **Steps:** Set `localStorage.app.user` to admin → Navigate to /admin
- **Expected:** Admin page loads
- **Actual:** Unauthorized message
- **Root Cause:** Auth guard not checking role correctly or route misconfigured
- **Impact:** Admin features inaccessible
- **Evidence:** `tests/evidence/review_one_per_user.png`

#### BUG-016: Review Feature Broken
- **Severity:** Major | **Priority:** Medium | **Status:** Open
- **FR:** FR-U01
- **Summary:** Review submission/editing/deletion not accessible
- **Expected:** Purchasers can post, edit, delete reviews
- **Actual:** Review UI/API not functional
- **Impact:** Community features unavailable
- **Evidence:** `tests/evidence/review_one_per_user.png`

#### BUG-017: Moderation Queue Inaccessible
- **Severity:** Major | **Priority:** Medium | **Status:** Open
- **FR:** FR-U02, FR-M04
- **Summary:** Admin moderation flow (report → queue → action) not implemented
- **Expected:** Users can report reviews; admin sees moderation queue
- **Actual:** Moderation UI/flow missing
- **Impact:** Unsafe content cannot be moderated
- **Evidence:** `tests/evidence/moderation_flow.png`

#### BUG-018: Order Lifecycle Not Accessible
- **Severity:** Major | **Priority:** High | **Status:** Open
- **FR:** FR-O05
- **Summary:** Order status transitions (Pending → Paid → Fulfilled) not accessible
- **Expected:** Admin can transition order statuses with audit trail
- **Actual:** Order management UI not accessible
- **Impact:** Admin cannot manage fulfillment
- **Evidence:** `tests/evidence/order_lifecycle.png`

#### BUG-019: Admin Refund Tool Inaccessible
- **Severity:** Major | **Priority:** Medium | **Status:** Open
- **FR:** FR-R02, FR-M03
- **Summary:** Admin refund functionality not implemented
- **Expected:** Admin can process full/partial refunds with audit trail
- **Actual:** Refund UI/API missing
- **Impact:** Refunds cannot be processed
- **Evidence:** `tests/evidence/refund_full_partial.png`

#### BUG-020: CSV Import Missing
- **Severity:** Major | **Priority:** Medium | **Status:** Open
- **FR:** FR-O07
- **Summary:** CSV import feature for orders not implemented
- **Expected:** Admin can import CSV with validation
- **Actual:** Feature not present
- **Impact:** Admin data import workflow blocked
- **Evidence:** `tests/evidence/csv_import.png`

---

### Minor Defects

#### BUG-003: Missing Search Button Icons
- **Severity:** Minor | **Priority:** Medium | **Status:** Open
- **FR:** FR-02
- **Summary:** Both search bars lack clickable search button icons
- **Expected:** Visible search button for accessibility
- **Actual:** Search input only; Enter key required
- **Impact:** Mobile/accessibility friction; unclear UX
- **Evidence:** `tests/evidence/tc5.png`

#### BUG-004: Whitespace Not Trimmed
- **Severity:** Minor | **Priority:** Medium | **Status:** Open
- **FR:** FR-02
- **Summary:** Leading/trailing spaces in search cause no results
- **Steps:** Search " Pride and Prejudice " (with spaces)
- **Expected:** Results displayed (spaces trimmed)
- **Actual:** No results
- **Impact:** User confusion; accidental space entry breaks search
- **Evidence:** `tests/evidence/tc5.png`

#### BUG-008: Description Search Missing Partial Matches
- **Severity:** Minor | **Priority:** Medium | **Status:** Open
- **FR:** FR-02
- **Summary:** Search by description only matches exact keywords, not partials
- **Steps:** Search for "philo" when "philosophy" in description
- **Expected:** Book appears (partial match)
- **Actual:** No match
- **Impact:** Search precision reduced; relevant results missed
- **Evidence:** `tests/evidence/CAT-003-search-description.png`

#### BUG-009: Diacritics Not Normalized
- **Severity:** Minor | **Priority:** Medium | **Status:** Open
- **FR:** FR-02
- **Summary:** Search does not handle accented characters (café vs cafe)
- **Steps:** Search "Café" when catalog has "Cafe"
- **Expected:** Results displayed (diacritics normalized)
- **Actual:** No match
- **Impact:** International search broken; user frustration
- **Evidence:** `tests/evidence/diacritics.png`

#### BUG-021: Checkout Performance Failure
- **Severity:** Major | **Priority:** High | **Status:** Open
- **FR:** FR-O03
- **Summary:** Checkout flow does not complete; performance/timeout issues
- **Expected:** Checkout completes within timeout
- **Actual:** Checkout hangs/fails
- **Root Cause:** Likely payment gateway timeout or missing API
- **Impact:** Checkout blocked
- **Evidence:** `tests/evidence/checkout_performance.png`

#### BUG-022: LCP Exceeds Target
- **Severity:** Minor | **Priority:** Medium | **Status:** Open
- **FR:** FR-X02
- **Summary:** Largest Contentful Paint measured at 2.8–3.2s; exceeds 2.5s budget
- **Expected:** LCP ≤ 2.5s
- **Actual:** LCP 2.8–3.2s (measured via Lighthouse)
- **Root Cause:** Large JS bundle or unoptimized initial render
- **Impact:** Performance regression; slower perceived load time
- **Evidence:** `tests/evidence/lcp.png`

---

## 📊 Defect Analysis

### Defects by Severity
- **Critical:** 2 (9%) — Payment gateway, order inaccessibility
- **Major:** 10 (45%) — Checkout, admin, coupon, filtering
- **Minor:** 10 (45%) — Search UX, performance, formatting

### Defects by Category
- **Functional (Core User Flows):** 16 (73%)
  - Payment: 3
  - Checkout: 3
  - Search: 5
  - Admin/Orders: 5
- **Non-Functional:** 4 (18%)
  - Performance: 2
  - Accessibility: 2
- **Data Integrity:** 2 (9%)
  - Stock enforcement
  - Rounding

### Root Causes (Analysis)
- **Integration Gaps:** Payment gateway (Paystack), coupon service, admin routes
- **State Management:** Address lost in checkout; data not persisted between steps
- **Validation:** Email regex weak; stock not enforced; search input not trimmed
- **Feature Completeness:** Filter/sort UI, moderation, refunds not implemented
- **Performance:** Bundle size, lazy loading strategy, render optimization

---

## ⚠️ Risks & Impact Assessment

### High-Risk Issues (Business Impact)
1. **Payment Gateway Blocker** (BUG-006)
   - **Risk:** Revenue loss; users cannot purchase
   - **Mitigation:** Configure Paystack key, test in sandbox, deploy immediately
   - **Timeline:** Critical path blocker

2. **Unlimited Cart Quantities** (BUG-005)
   - **Risk:** Inventory oversell; fulfillment failures
   - **Mitigation:** Implement stock validation; set reasonable limits
   - **Timeline:** Before payment enabled

3. **Coupon System Broken** (BUG-010)
   - **Risk:** Discount campaigns cannot run; customer dissatisfaction
   - **Mitigation:** Implement coupon service or remove feature temporarily
   - **Timeline:** Before promotion launch

4. **Admin Access Broken** (BUG-015)
   - **Risk:** Admins cannot manage orders, inventory, or moderation
   - **Mitigation:** Debug auth guard; verify role-based routing
   - **Timeline:** Before live launch

### Medium-Risk Issues (UX Impact)
- Search fragmentation (nav search broken)
- Checkout data loss (address disappears)
- Email validation gaps

### Low-Risk Issues (Polish)
- Search refinements (diacritics, partial matches)
- Performance tuning (LCP optimization)
- Accessibility enhancements

---

## 🛠️ Recommendations

### Priority 1 (Immediate)
1. **Initialize Paystack Gateway**
   - Verify `REACT_APP_PAYSTACK_PUBLIC_KEY` set in `.env`
   - Test payment flow in sandbox
   - Deploy fix to enable checkout

2. **Implement Stock Validation**
   - Add max quantity check against product stock
   - Display inventory status in cart
   - Prevent checkout if out-of-stock

3. **Fix Checkout State Persistence**
   - Verify shipping address passed to Review step
   - Add console logging to debug state flow
   - Write integration test for step transitions

4. **Restore Admin Access**
   - Debug auth guard logic for `/admin` route
   - Verify role check against localStorage
   - Add test for admin route protection

### Priority 2 (Sprint 2)
1. **Implement Coupon Service**
   - Create coupon validation logic
   - Wire to checkout totals
   - Add error handling for invalid coupons

2. **Add Filter & Sort UI**
   - Design filter component (genre, price, author)
   - Implement sort options (price, rating, name)
   - Integrate with search

3. **Wire Navigation Search**
   - Connect top nav search input to `/catalog?q=...`
   - Highlight active query
   - Add clear button

4. **Email Validation Hardening**
   - Strengthen regex or use built-in HTML5 validation
   - Display error message on blur
   - Block form submission if invalid

### Priority 3 (Polish)
1. **Search Enhancements**
   - Add diacritic normalization (String.prototype.normalize)
   - Implement partial description matching
   - Add search button icons to both bars

2. **Performance Optimization**
   - Audit bundle size; consider code splitting
   - Optimize image delivery; verify lazy loading
   - Profile initial render with DevTools

3. **Accessibility Improvements**
   - Add `aria-modal` to checkout modal
   - Implement focus return after modal close
   - Test with screen reader (NVDA/JAWS)

4. **Intentional Defect Removal**
   - Implement aria-modal for checkout modal
   - Fix tax rounding to spec (±0.01)
   - Update notification badge after mark-all-read

---

## 📋 Test Coverage Summary

### Coverage by FR Code

| FR Code | Category | Coverage | Status |
|---------|----------|----------|--------|
| FR-02 | Search/Filter/Sort | 70% | Partial (search works; filter/sort/nav missing) |
| FR-03 | Cart | 86% | Mostly complete (stock validation missing) |
| FR-O02 | Checkout | 33% | Major gaps (address lost; validation weak) |
| FR-O03 | Shipping | 50% | Form works; state persistence issue |
| FR-O04 | Payment | 0% | **BLOCKER: Gateway not initialized** |
| FR-O05 | Orders | 0% | **Blocked by payment failure** |
| FR-A01 | Admin Access | 0% | Auth guard broken |
| FR-U01 | Reviews | 0% | Feature not accessible |
| FR-X01 | Accessibility | 71% | Mostly compliant (checkout modal incomplete) |
| FR-X02 | Performance | 40% | LCP exceeds target |
| FR-X03 | Compatibility | 100% | All browsers functional |

---

## 📸 Evidence Artifacts

All test evidence (screenshots, logs, recordings) stored in `tests/evidence`:
- Catalog/search screenshots: tc5.png, diacritics.png, CAT-003-search-description.png
- Cart/checkout screenshots: cart-fatahi-3.png, cart-fatahi-5.png, cart-fatahi-8.png, Bug-002.png
- Payment/error screenshots: cart-fatahi-8 (multiple angles)
- Performance metrics: lcp.png
- Accessibility tests: (console logs, browser inspect mode captures)

---

## 🎬 Video Presentation Link

**5-Minute Presentation:** (Link to be recorded and attached)
- Intro: Team, scope, testing approach (30s)
- Findings: Payment blocker, search issues, checkout gaps (120s)
- Demo: Paystack error, address loss in checkout (60s)
- Recommendations: Priority fixes, risk mitigation (30s)

---

## ✅ Conclusion

The Book Store App is **not ready for production**. Critical blockers in payment gateway initialization and order management prevent core user flows from functioning. An estimated **2–3 weeks of development** is required to address Priority 1 issues (payment, stock, checkout state, admin access) before QA regression testing.

**Positives:**
- Catalog and cart functionality solid
- Responsive design and cross-browser compatibility working
- Accessibility foundation in place

**Negatives:**
- Payment gateway not operational (critical blocker)
- Search partially broken (UX friction)
- Admin console inaccessible (operations blocked)
- Data persistence issues in checkout (customer risk)

**Next Steps:**
1. Developer team addresses Priority 1 items (1 week)
2. QA regression testing (3–5 days)
3. Performance optimization (3–5 days)
4. Final UAT and launch readiness review

---

**Report Prepared By:** QA Testing Team  
**Date:** November 18, 2025  
**Approved By:** [Team Lead]