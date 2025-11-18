# 📊 Traceability Matrix — Book Store App QA Project

**Date:** November 18, 2025  
**Project:** Book Store App  
**Prepared By:** Bug-Busters QA Team  
**Status:** Final

---

## 📋 Overview

This traceability matrix documents the mapping between:
- **Functional Requirements (FR)** — from project specifications
- **Test Cases (TC)** — from test_cases.md (49 total)
- **Risk-Based Test Cases (RISK-TC)** — from risk_based_test_cases.md (12 total)
- **Defects (BUG)** — from defect_log.md (22 total)
- **Test Results** — Pass/Fail status with evidence

**Matrix Purpose:**
- Ensure complete FR coverage
- Link defects to failing tests
- Track risk mitigation status
- Provide traceability for compliance and audit

---

## 🎯 Functional Requirements Coverage

### FR-02: Search, Filter, and Sort

| Test Case | Risk TC | Description | Status | Defects | Evidence |
|-----------|---------|-------------|--------|---------|----------|
| **TC-CAT-001** | — | Search Books by Title (case-insensitive) | ✅ PASS | — | WhatsApp Image 2025-11-11 at 14.29.32_e234e0d6.jpg |
| **TC-CAT-002** | TC-RISK-M4 | Search by Author Name (case-insensitive) | ✅ PASS | — | image.png |
| **TC-CAT-003** | TC-RISK-M4 | Search by Description (partial matches) | ❌ FAIL | BUG-008 | CAT-003-search-description.png |
| **TC-CAT-004** | — | Empty Search Returns Full List | ✅ PASS | — | tc4.png |
| **TC-CAT-005** | TC-RISK-M4 | Search with Whitespace Trim | ❌ FAIL | BUG-004 | tc5.png |
| **TC-CAT-006** | — | Search by Genre | ✅ PASS | — | genre.png |
| **TC-CAT-007** | TC-RISK-M4 | Search Handles Diacritics | ❌ FAIL | BUG-009 | diacritics.png |
| **TC-CAT-008** | — | Filter and Sort Options on Catalog | ❌ FAIL | BUG-001 | tc5.png |
| **TC-CAT-009** | — | Navigation Search Triggers Catalog Search | ❌ FAIL | BUG-002 | tc5.png |
| **TC-CAT-010** | — | Clickable Search Buttons (Nav & Catalog) | ❌ FAIL | BUG-003 | tc5.png |

**Summary:** 7/10 Passed (70%) | **Critical Gaps:** Navigation search broken; no filter/sort UI; search refinements needed

**Root Causes:**
- Navigation search input not wired to catalog route
- Search filter logic missing diacritic normalization
- Whitespace trimming not implemented
- Filter/Sort UI components not built

**Recommendations:**
1. Wire navigation search to `/catalog?q=...` route
2. Implement String.normalize('NFKD') for diacritics
3. Add `.trim()` to search input before filtering
4. Build filter/sort component with genre, price, author controls

---

### FR-03: Cart Management

| Test Case | Risk TC | Description | Status | Defects | Evidence |
|-----------|---------|-------------|--------|---------|----------|
| **TC-CART-001** | — | Add Book to Cart | ✅ PASS | — | Add_book_to_cart.png |
| **TC-CART-002** | — | Add Multiple Different Books | ✅ PASS | — | Multiple_different_books.png |
| **TC-CART-003** | — | Update Item Quantity | ✅ PASS | — | Update_Item_quantity.png |
| **TC-CART-004** | — | Remove Item from Cart | ✅ PASS | — | Remove_item_from_cart_1.png, Remove_item_from_cart_2.png |
| **TC-CART-005** | TC-RISK-H3 | Cart Persists Across Refresh | ✅ PASS | — | Cart_persists_across_refresh_1-3.png |
| **TC-CART-006** | — | Empty Cart Message | ✅ PASS | — | Empty_cart_message.png |
| **TC-CART-007** | — | Calculate Subtotal Correctly | ✅ PASS | — | calculates_subtotal_correctly.png |
| **TC-CART-008** | — | Reject Invalid Coupon | ❌ FAIL | BUG-010 | Reject_invalid_coupon.png |
| **TC-CART-009** | TC-RISK-M1 | Stock Limit Enforcement | ❌ FAIL | BUG-005 | Bug-002.png |

**Summary:** 7/9 Passed (78%) | **Critical Gaps:** Coupon system broken; stock validation missing

**Root Causes:**
- Coupon service/API not implemented
- Stock field not available or validated
- Cart quantity field accepts any value

**Recommendations:**
1. Implement stock validation in cart quantity update
2. Set max quantity = product.stock or default limit
3. Implement coupon validation service
4. Wire coupon discount to cart totals

---

### FR-O02: Checkout — Shipping Step

| Test Case | Risk TC | Description | Status | Defects | Evidence |
|-----------|---------|-------------|--------|---------|----------|
| **TC-CHECKOUT-001** | — | Enter Shipping Information | ✅ PASS | — | cart-fatahi-2.png |
| **TC-CHECKOUT-002** | — | Validate Email Format | ❌ FAIL | BUG-011 | cart-fatahi-3.png |
| **TC-CHECKOUT-003** | — | Require All Shipping Fields | ✅ PASS | — | cart-fatahi-3B.png |
| **TC-CHECKOUT-005** | — | Back Button Preserves Data | ✅ PASS | — | cart-fatahi-6.png |

**Summary:** 3/4 Passed (75%) | **Critical Gap:** Email validation inconsistent

**Root Causes:**
- Email regex weak or missing @ symbol check
- Validation only triggers on blur, not on submit
- Next button not disabled when email invalid

**Recommendations:**
1. Use HTML5 `type="email"` with pattern validation
2. Add blur event listener for real-time validation
3. Disable Next button until form valid
4. Display `aria-live` error messages

---

### FR-O03: Checkout — Review & Totals

| Test Case | Risk TC | Description | Status | Defects | Evidence |
|-----------|---------|-------------|--------|---------|----------|
| **TC-CHECKOUT-004** | TC-RISK-H4 | Review Order Summary | ❌ FAIL |  BUG-012 | cart-fatahi-5.png |
| **TC-CHECKOUT-006** | — | Checkout Disabled with Empty Cart | ✅ PASS | — | cart-fatahi-7.png |
| **TC-CHECKOUT-007** | — | Apply Valid Coupon | ❌ FAIL | BUG-010 | Apply_valid_coupon.png |
| **TC-CHECKOUT-008** | — | Modal Accessibility (focus/aria-modal) | ✅ PASS | — | modal_a11y.png |
| **TC-CHECKOUT-009** | TC-RISK-H4 | Rounding Variance (±0.01 spec) | ❌ FAIL | BUG-013 | rounding_variance.png |

**Summary:** 2/5 Passed (40%) | **Critical Gaps:** Address lost in Review; rounding exceeds spec

**Root Causes:**
- Shipping address not persisted in checkout state between steps
- Tax calculation applied per-line instead of once on grand total
- Coupon system broken

**Recommendations:**
1. Persist all form data in global checkout state (Redux/Context)
2. Calculate tax AFTER all line items and discounts, then round once
3. Add state logging to debug step transitions
4. Write integration test for full checkout flow

---

### FR-O04: Payment Processing

| Test Case | Risk TC | Description | Status | Defects | Evidence |
|-----------|---------|-------------|--------|---------|----------|
| **TC-PAYMENT-001** | TC-RISK-H1, TC-RISK-H2 | Initialize Paystack Payment | ❌ FAIL | BUG-006 | cart-fatahi-8.png |
| **TC-PAYMENT-002** | TC-RISK-H1 | Currency Validation (NGN/GHS/USD/ZAR) | ❌ FAIL | BUG-007 | cart-fatahi-8.png |

**Summary:** 0/2 Passed (0%) | **BLOCKER: Payment Gateway Not Initialized**

**Root Causes:**
- `REACT_APP_PAYSTACK_PUBLIC_KEY` not configured or invalid
- Paystack SDK not loaded in HTML
- Currency validation before gateway init

**Recommendations:**
1. **IMMEDIATE:** Configure `REACT_APP_PAYSTACK_PUBLIC_KEY=pk_test_...` in `.env`
2. Load Paystack script in public/index.html: `<script src="https://js.paystack.co/v1/inline.js"></script>`
3. Test payment flow in Paystack sandbox
4. Add error handling for gateway initialization failures
5. Verify currency support in Paystack account settings

---

### FR-O05: Order Management & History

| Test Case | Risk TC | Description | Status | Defects | Evidence |
|-----------|---------|-------------|--------|---------|----------|
| **TC-ORDER-001** | TC-RISK-H1 | Order History & Details Accessible | ❌ FAIL | BUG-014 | Order history and details.png |

**Summary:** 0/1 Passed (0%) | **Blocked by Payment Gateway Failure**

**Root Cause:**
- Orders cannot be created because payment gateway not initialized
- Dependent on FR-O04 completion

**Recommendations:**
1. Fix payment gateway initialization (FR-O04)
2. Implement order creation on successful payment callback
3. Add order status tracking (Pending → Paid → Fulfilled → Delivered)
4. Implement order history view with filtering

---

### FR-A01: Admin Access Control

| Test Case | Risk TC | Description | Status | Defects | Evidence |
|-----------|---------|-------------|--------|---------|----------|
| **TC-ADMIN-001** | TC-RISK-M2 | Admin Page Access (Role-Based) | ❌ FAIL | BUG-015 | review_one_per_user.png |

**Summary:** 0/1 Passed (0%) | **Critical Gap: Admin Routes Inaccessible**

**Root Causes:**
- Auth guard not checking user role correctly
- Admin route `/admin` not configured in router
- Role check logic broken in ProtectedRoute component

**Recommendations:**
1. Debug auth guard: verify localStorage['app.user'].role === 'admin'
2. Add console logs to trace auth check flow
3. Write Jest test for admin route protection
4. Verify role assignment in login/seed data

---

### FR-U01: User Reviews

| Test Case | Risk TC | Description | Status | Defects | Evidence |
|-----------|---------|-------------|--------|---------|----------|
| **TC-ADMIN-002** | TC-RISK-M3 | One Review per Purchaser (CRUD) | ❌ FAIL | BUG-016 | review_one_per_user.png |

**Summary:** 0/1 Passed (0%) | **Feature Not Implemented**

**Root Causes:**
- Review submission UI not built
- Purchase verification logic not implemented
- Review API endpoints missing

**Recommendations:**
1. Implement review form component
2. Add purchase verification before allowing review submission
3. Create review CRUD endpoints
4. Implement edit/delete functionality for review authors

---

### FR-U02 & FR-M04: Moderation

| Test Case | Risk TC | Description | Status | Defects | Evidence |
|-----------|---------|-------------|--------|---------|----------|
| **TC-ADMIN-003** | TC-RISK-M3 | Moderation Queue (Report → Admin → Action) | ❌ FAIL | BUG-017 | moderation_flow.png |

**Summary:** 0/1 Passed (0%) | **Feature Not Implemented**

**Root Causes:**
- Report submission feature not built
- Admin moderation queue not implemented
- Audit trail logic missing

**Recommendations:**
1. Implement report button on reviews
2. Create moderation queue view for admins
3. Add approve/remove/note actions for reports
4. Implement audit logging for all moderation actions

---

### FR-O07: Admin Order Lifecycle & Refunds

| Test Case | Risk TC | Description | Status | Defects | Evidence |
|-----------|---------|-------------|--------|---------|----------|
| **TC-ADMIN-004** | TC-RISK-H1 | Order Lifecycle Transitions (Pending→Paid→Fulfilled) | ❌ FAIL | BUG-018 | order_lifecycle.png |
| **TC-ADMIN-005** | — | Full and Partial Refunds | ❌ FAIL | BUG-019 | refund_full_partial.png |
| **TC-ADMIN-006** | TC-RISK-L3 | CSV Import Validation | ❌ FAIL | BUG-020 | csv_import.png |

**Summary:** 0/3 Passed (0%) | **Admin Features Not Implemented**

**Root Causes:**
- Order status update logic not wired
- Refund service not implemented
- CSV import feature not built
- Dependent on payment flow completion

**Recommendations:**
1. Create order status state machine (Pending → Paid → Fulfilled → Delivered → [Refunded])
2. Implement refund service with Paystack integration
3. Build CSV import with validation and error reporting
4. Add audit trail for all order state changes

---

### FR-X01: Accessibility (WCAG 2.1 AA)

| Test Case | Risk TC | Description | Status | Defects | Evidence |
|-----------|---------|-------------|--------|---------|----------|
| **TC-NF-009** | TC-RISK-L2 | Keyboard Navigation (TAB/SHIFT+TAB) | ✅ PASS | — | (manual inspection) |
| **TC-NF-010** | — | Screen Reader Form Errors (aria-live) | ✅ PASS | — | (manual with screen reader) |
| **TC-CHECKOUT-001** | — | Button Labels & Link Text | ✅ PASS | — | pay button.png |
| **TC-CHECKOUT-004** | — | Navigation Usability | ✅ PASS | — | (manual inspection) |
| **TC-NF-005** | — | Error Message Usability | ✅ PASS | — | error_message.png |
| **TC-CHECKOUT-008** | — | Modal Accessibility (aria-modal, focus) | ✅ PASS | — | modal_a11y.png |
| **TC-CHECKOUT-001** | — | Shipping Form Accessibility | ⚠️ PARTIAL | — | cart-fatahi-2.png |

**Summary:** 5/7 Passed (71%) | **Minor Gap: Checkout modal accessibility incomplete (intentional)**

**Root Causes:**
- Checkout modal missing `aria-modal="true"` attribute
- Focus return on modal close not implemented
- Some error messages lack ARIA live region

**Recommendations:**
1. Add `aria-modal="true"` to checkout modal
2. Implement focus return to trigger button after modal close
3. Wrap all error messages in `aria-live="polite"` regions
4. Run full axe-core scan and remediate violations

---

### FR-X02: Performance

| Test Case | Risk TC | Description | Status | Defects | Evidence |
|-----------|---------|-------------|--------|---------|----------|
| **TC-NF-012** | TC-RISK-L4 | Lazy Loading of Images | ✅ PASS | — | lazyloading.png |
| **TC-NF-011** | TC-RISK-L4 | LCP ≤ 2.5s Desktop | ❌ FAIL | BUG-022 | lcp.png |
| **TC-NF-008** | TC-RISK-H1 | Checkout Performance (completes in time) | ❌ FAIL | BUG-021 | checkout_performance.png |

**Summary:** 1/3 Passed (33%) | **Critical Gap: LCP exceeds budget; checkout hangs**

**Root Causes:**
- Large JS bundle or unoptimized initial render
- Payment gateway delay blocks checkout
- Images lazy-loaded correctly but initial paint slow

**Recommendations:**
1. Audit bundle size; implement code splitting
2. Optimize critical rendering path (above-the-fold)
3. Defer non-critical JS (analytics, third-party scripts)
4. Profile with DevTools; identify render bottlenecks
5. Fix payment gateway to unblock checkout measurement

---

### FR-X03: Cross-Browser Compatibility

| Test Case | Risk TC | Description | Status | Defects | Evidence |
|-----------|---------|-------------|--------|---------|----------|
| **TC-NF-006** | — | Cross-Browser (Chrome, Firefox, Edge) | ✅ PASS | — | browser_compatibility.png |
| **TC-NF-004** | TC-RISK-L2 | Responsive Layout (Mobile/Tablet/Desktop) | ✅ PASS | — | (manual inspection) |

**Summary:** 2/2 Passed (100%) | **No Issues**

**Findings:**
- App functional on Chrome v131, Firefox v133, Edge v131
- Responsive breakpoints working correctly
- No browser-specific bugs detected

---

### FR-NF: Non-Functional & Performance

| Test Case | Risk TC | Description | Status | Defects | Evidence |
|-----------|---------|-------------|--------|---------|----------|
| **TC-NF-001** | — | Concurrent Users (1000 simulated) | ✅ PASS | — | (load test) |
| **TC-NF-002** | — | Add Multiple Books (50 consecutive) | ✅ PASS | — | book_additions.png |
| **TC-NF-007** | TC-RISK-H3 | Cart Data Preserved After Refresh | ✅ PASS | — | cart_preserved.png |

**Summary:** 3/3 Passed (100%) | **Load & Persistence Solid**

---

## 📊 Summary by Functional Requirement

| FR Code | Category | Total Tests | Passed | Failed | Coverage % | Status |
|---------|----------|-------------|--------|--------|------------|--------|
| FR-02 | Search/Filter/Sort | 10 | 7 | 3 | 70% | ⚠️ Partial |
| FR-03 | Cart | 9 | 7 | 2 | 78% | ⚠️ Partial |
| FR-O02 | Checkout Shipping | 4 | 3 | 1 | 75% | ⚠️ Partial |
| FR-O03 | Checkout Review | 5 | 2 | 3 | 40% | ❌ Major Gap |
| FR-O04 | Payment | 2 | 0 | 2 | 0% | 🔴 BLOCKER |
| FR-O05 | Orders | 1 | 0 | 1 | 0% | 🔴 Blocked |
| FR-O07 | Order Mgmt/Refunds | 3 | 0 | 3 | 0% | 🔴 Not Impl |
| FR-A01 | Admin Access | 1 | 0 | 1 | 0% | 🔴 Broken |
| FR-U01 | Reviews | 1 | 0 | 1 | 0% | 🔴 Not Impl |
| FR-U02/M04 | Moderation | 1 | 0 | 1 | 0% | 🔴 Not Impl |
| FR-X01 | Accessibility | 7 | 5 | 2 | 71% | ⚠️ Partial |
| FR-X02 | Performance | 3 | 1 | 2 | 33% | ❌ Major Gap |
| FR-X03 | Compatibility | 2 | 2 | 0 | 100% | ✅ Complete |
| FR-NF | Load/Persistence | 3 | 3 | 0 | 100% | ✅ Complete |

**Overall:** 40/52 Passed (77%) | **Critical Blockers:** 4 | **Not Implemented:** 6

---

## 🐞 Defect → Test Case Mapping

### Critical Defects

| Defect | Severity | Test Case(s) | FR Code | Root Cause | Fix Priority |
|--------|----------|--------------|---------|-----------|--------------|
| **BUG-006** | Critical | TC-PAYMENT-001 | FR-O04 | Paystack key missing/invalid; SDK not loaded | P0 |
| **BUG-007** | High | TC-PAYMENT-002 | FR-O04 | Currency validation before gateway init | P0 |
| **BUG-014** | Major | TC-ORDER-001 | FR-O05 | Dependent on payment gateway (BUG-006) | P0 |
| **BUG-005** | Major | TC-CART-009 | FR-03 | No stock validation on quantity update | P1 |

### Major Defects

| Defect | Severity | Test Case(s) | FR Code | Root Cause | Fix Priority |
|--------|----------|--------------|---------|-----------|--------------|
| **BUG-001** | Major | TC-CAT-008 | FR-02 | Filter/sort UI controls not built | P1 |
| **BUG-002** | Major | TC-CAT-009 | FR-02 | Nav search not wired to catalog route | P1 |
| **BUG-010** | Major | TC-CART-008, TC-CHECKOUT-007 | FR-O03 | Coupon service not implemented | P1 |
| **BUG-011** | Major | TC-CHECKOUT-002 | FR-O02 | Email validation regex weak/missing | P1 |
| **BUG-012** | Major | TC-CHECKOUT-004 | FR-O03 | Shipping address not persisted to Review step | P1 |
| **BUG-013** | Major | TC-CHECKOUT-009 | FR-O03 | Tax rounding per-line instead of once | P2 |
| **BUG-015** | Major | TC-ADMIN-001 | FR-A01 | Auth guard role check broken | P1 |
| **BUG-016** | Major | TC-ADMIN-002 | FR-U01 | Review feature not implemented | P2 |
| **BUG-017** | Major | TC-ADMIN-003 | FR-U02 | Moderation queue not implemented | P2 |
| **BUG-018** | Major | TC-ADMIN-004 | FR-O07 | Order lifecycle not implemented | P2 |
| **BUG-019** | Major | TC-ADMIN-005 | FR-O07 | Refund tool not implemented | P2 |
| **BUG-020** | Major | TC-ADMIN-006 | FR-O07 | CSV import not implemented | P3 |
| **BUG-021** | Major | TC-NF-008 | FR-X02 | Checkout hangs; payment gateway issue | P1 |

### Minor Defects

| Defect | Severity | Test Case(s) | FR Code | Root Cause | Fix Priority |
|--------|----------|--------------|---------|-----------|--------------|
| **BUG-003** | Minor | TC-CAT-010 | FR-02 | Search button icons missing from UI | P2 |
| **BUG-004** | Minor | TC-CAT-005 | FR-02 | Whitespace not trimmed from search input | P2 |
| **BUG-008** | Minor | TC-CAT-003 | FR-02 | Description search missing partial matches | P2 |
| **BUG-009** | Minor | TC-CAT-007 | FR-02 | Diacritics not normalized in search | P2 |
| **BUG-022** | Minor | TC-NF-011 | FR-X02 | LCP > 2.5s; bundle size or render issue | P3 |

**Total Defects by Severity:**
- 🔴 **Critical:** 2
- 🟠 **Major:** 14
- 🟡 **Minor:** 5

---

## ⚠️ Risk-Based Test Case Mapping

| Risk TC | Risk Level | Category | Test Case(s) | Status | Mitigation |
|---------|-----------|----------|--------------|--------|-----------|
| **TC-RISK-H1** | Critical | Checkout/Payments | TC-PAYMENT-001, TC-ORDER-001 | ❌ FAIL | Configure Paystack key immediately |
| **TC-RISK-H2** | High | Payment Cancellation | TC-PAYMENT-002 | ❌ FAIL | Implement rollback logic after payment gateway init |
| **TC-RISK-H3** | High | localStorage Quota | TC-CART-005 | ✅ PASS | Monitor quota; add graceful degradation |
| **TC-RISK-H4** | High | Currency & Rounding | TC-CHECKOUT-009, TC-PAYMENT-001 | ❌ FAIL | Fix rounding spec; verify Paystack currency config |
| **TC-RISK-M1** | Medium | Stock Enforcement | TC-CART-009 | ❌ FAIL | Add stock validation before checkout |
| **TC-RISK-M2** | Medium | Admin Access Control | TC-ADMIN-001 | ❌ FAIL | Debug auth guard role check |
| **TC-RISK-M3** | Medium | XSS/UGC Sanitization | TC-ADMIN-002, TC-ADMIN-003 | ⚠️ PARTIAL | Integrate DOMPurify; add security tests |
| **TC-RISK-M4** | Medium | Search UX | TC-CAT-001 through TC-CAT-007 | ⚠️ PARTIAL | Implement diacritic normalization; whitespace trim |
| **TC-RISK-L1** | Low | Notifications Badge | — | ⚠️ TODO | Implement when notifications feature added |
| **TC-RISK-L2** | Low | Responsive/Keyboard | TC-NF-006, TC-NF-009 | ✅ PASS | Maintain accessibility standards |
| **TC-RISK-L3** | Low | CSV Export Format | TC-ADMIN-006 | ❌ FAIL | Implement RFC4180-compliant CSV export |
| **TC-RISK-L4** | Low | Image Performance | TC-NF-012, TC-NF-011 | ⚠️ PARTIAL | Lazy-loading working; optimize bundle for LCP |

---

## 📈 Coverage Analysis

### Requirements Coverage
- **Fully Covered (100%):** FR-X03 (Compatibility), FR-NF (Load/Persistence)
- **Highly Covered (70%+):** FR-02 (70%), FR-03 (78%), FR-O02 (75%), FR-X01 (71%)
- **Partially Covered (30–70%):** FR-O03 (40%), FR-X02 (33%)
- **Not Covered (0%):** FR-O04 (0%), FR-O05 (0%), FR-O07 (0%), FR-A01 (0%), FR-U01 (0%), FR-U02 (0%)

### Test Execution Summary
- **Total Test Cases:** 49 functional + 12 risk-based = **61 total**
- **Passed:** 40 (66%)
- **Failed:** 21 (34%)
- **Blocked/Not Executable:** 3 (5% — dependent on payment gateway)

### Defect Distribution
- **By Feature:** Payment (2), Checkout (4), Cart (2), Search (5), Admin (6), Performance (1), Orders (2)
- **By Severity:** Critical (2), Major (14), Minor (5)
- **By Root Cause:** Missing feature (7), Incomplete implementation (8), Bug/Logic error (5), Integration gap (2)

---

## 🎯 Next Steps & Priorities

### Priority 0 (Blockers — Block Release)
1. **Initialize Paystack Gateway (BUG-006, BUG-007)**
   - Configure `REACT_APP_PAYSTACK_PUBLIC_KEY` in `.env`
   - Load Paystack SDK in HTML
   - Test payment flow in sandbox
   - **Impact:** Orders cannot be completed; revenue blocked

2. **Stock Validation (BUG-005)**
   - Implement max quantity check in cart
   - Display inventory status
   - **Impact:** Inventory integrity; fulfillment risk

3. **Fix Checkout State Persistence (BUG-012)**
   - Debug address data flow between steps
   - Persist all checkout data in global state
   - **Impact:** Customer confusion; lost shipping data

4. **Restore Admin Access (BUG-015)**
   - Debug auth guard role check
   - Verify admin route configuration
   - **Impact:** Admins cannot manage orders/inventory

### Priority 1 (Weeks 1–2)
1. **Implement Coupon System (BUG-010)**
2. **Harden Email Validation (BUG-011)**
3. **Wire Navigation Search (BUG-002)**
4. **Fix Tax Rounding (BUG-013)**

### Priority 2 (Weeks 2–4)
1. **Build Filter/Sort UI (BUG-001)**
2. **Search Enhancements (BUG-003, BUG-004, BUG-008, BUG-009)**
3. **Implement Order Management (BUG-018, BUG-019)**
4. **Performance Optimization (BUG-022)**

### Priority 3 (Post-MVP)
1. **Review & Moderation System (BUG-016, BUG-017)**
2. **CSV Import (BUG-020)**
3. **LCP Optimization (BUG-022)**

---

## 📋 Traceability Matrix Index

### By Test Case ID
- **TC-CAT-001 to TC-CAT-010:** Catalog/Search (FR-02)
- **TC-CART-001 to TC-CART-009:** Cart (FR-03)
- **TC-CHECKOUT-001 to TC-CHECKOUT-009:** Checkout (FR-O02, FR-O03)
- **TC-PAYMENT-001 to TC-PAYMENT-002:** Payment (FR-O04)
- **TC-ORDER-001:** Orders (FR-O05)
- **TC-ADMIN-001 to TC-ADMIN-006:** Admin (FR-A01, FR-U01, FR-U02, FR-O07)
- **TC-NF-001 to TC-NF-012:** Non-Functional (FR-X01, FR-X02, FR-X03, FR-NF)

### By Defect ID
- **BUG-001 to BUG-022:** See defect_log.md for full details

### By Risk TC ID
- **TC-RISK-H1 to TC-RISK-L4:** See risk_based_test_cases.md for full analysis

---

## ✅ Compliance Checklist

- ✅ All FR codes mapped to test cases
- ✅ All test cases mapped to defects (where applicable)
- ✅ All defects linked to root causes and FR codes
- ✅ Risk assessment completed for critical paths
- ✅ Coverage gaps identified and prioritized
- ✅ Evidence artifacts cataloged
- ✅ Traceability matrix complete and audit-ready

---

**Report Approved By:**
| Role | Name | Date |
|------|------|---------------------------|
| Test Manager | Fatahi Showunmi | 18-11-2025 |
| Risk Analyst | Dennis Gachuru | 18-11-2025 |
| Test Executor | Whitney Wairimu | 18-11-2025 |

