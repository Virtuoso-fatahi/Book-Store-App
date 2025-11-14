# 📊 Traceability Matrix Report — Book Store App QA

**Project:** Book Store App  
**Date:** November 13, 2025  
**Team:** QA Testing Team

---

## 1. Functional Requirements → Test Cases Mapping

| FR Code | Description | Test Cases | Status | Coverage |
|---------|-------------|-----------|--------|----------|
| FR-02 | Search books by title, author, description | TC-01, Jest: `CatalogPage.search` | ✅ Implemented | 100% |
| FR-02 | Filter by genre, price, rating | TC-02 | ⚠️ Not Implemented | 0% |
| FR-02 | Sort by price, rating, popularity | TC-03 | ⚠️ Not Implemented | 0% |
| FR-02 | View book details (multi-image, stock, ETA) | — | ⚠️ Not Implemented | 0% |
| FR-03-001 | Add/remove/update cart items; persist | TC-Cart-01, Jest: `StoreProvider.addToCart`, `updateCartQuantity`, `removeFromCart` | ✅ Implemented | 100% |
| FR-03-002 | Cart subtotal, quantities, persistence | TC-Cart-02, Jest: `StoreProvider.clearCart`, `localStorage` | ✅ Implemented | 100% |
| FR-O03 | Checkout wizard (Shipping → Review → Payment → Confirmation) | TC-Checkout-01, Jest: `CheckoutPage.wizard` | ✅ Implemented | 85% |
| FR-O04 | Payment via Paystack with currency config | TC-Checkout-02, Jest: `paystack.test.js` (toMinorUnits, PAYSTACK_PUBLIC_KEY) | ⚠️ Partially Tested | 60% |
| FR-O05 | Order status lifecycle (Pending → Paid → Fulfilled → Delivered) | TC-Order-01 | ⚠️ Scaffolded | 50% |
| FR-O06 | Order history and details view | TC-Order-02 | ✅ Implemented | 100% |
| FR-O07 | CSV export (RFC4180, UTF-8, ISO dates) | — | ⚠️ Not Implemented | 0% |
| FR-O08 | Refunds, returns, audit trail | — | ⚠️ Not Implemented | 0% |
| FR-A01 | Admin page guard (role-based access) | TC-Admin-01, Jest: `AdminPage.guard` | ✅ Implemented | 100% |
| FR-A02 | Catalog CRUD (stub) | — | ⚠️ Stub Only | 20% |
| FR-A03 | Orders dashboard, inventory (stub) | — | ⚠️ Stub Only | 20% |
| FR-UI01 | Navbar (search, cart link, responsive) | TC-UI-01, Jest: `Navbar.test.js` | ✅ Implemented | 100% |
| FR-UI02 | BookCard and BookList rendering | TC-UI-02, Jest: `BookCard.test.js`, `BookList.test.js` | ✅ Implemented | 100% |
| FR-UI03 | Form labels, ARIA, keyboard nav | TC-A11y-01, Jest: `Navbar.test.js` (label + sr-only) | ⚠️ Partial | 70% |
| FR-X01 | Accessibility (WCAG 2.1 AA) | TC-A11y-01, TC-A11y-02 | ⚠️ Partial | 60% |
| FR-X02 | Performance (LCP ≤2.5s, TTI ≤1s) | TC-Perf-01 | ⚠️ Not Measured | 0% |
| FR-X03 | Cross-browser compatibility | TC-Compat-01 | ⚠️ Manual Only | 40% |
| FR-X04 | Security (UGC sanitization, URL schemes) | — | ⚠️ Not Implemented | 0% |

---

## 2. Defect-to-FR Mapping

### Critical Defects

| Bug ID | Summary | FR Code(s) Affected | Severity | Priority | Status |
|--------|---------|-------------------|----------|----------|--------|
| BUG-PAY-001 | Payment not successful at checkout; Paystack key missing/invalid | FR-O04 | Critical | High | Open |
| BUG-INT-001 | Currency mismatch (UI shows R vs configured gateway currency) | FR-O04 | Major | Jest + Manual: verify `formatCurrency` output vs Paystack currency param |
| BUG-INT-002 | Rounding variance (line total vs grand total ±0.01) | FR-O03 | Minor | Manual: add 3 items, verify totals via checkout review |
| BUG-INT-005 | Stock race (mini-cart exceeds stock limit) | FR-O01 | Major | Manual: add qty > stock in quantity field |
| BUG-INT-006 | Modal a11y (missing aria-modal, focus not returned) | FR-X01 | Major | Jest + Manual: inspect modal; tab out; refocus should return to trigger (not yet visible) |
| BUG-INT-007 | CSV decimal comma breaking columns | FR-O07 | Minor | Manual: export orders in localized region; check Excel import |
| BUG-INT-008 | Notification badge not updated after mark all read | FR-N02 | Minor | Manual: mark all notifications read; badge should show 0 (not yet implemented) |
| BUG-INT-009 | Images not lazy-loaded (regression scenario) | FR-X02 | Minor | Jest + DevTools: verify `loading="lazy"` attribute present; measure LCP |
| BUG-INT-010 | Search diacritics not normalized (café vs cafe) | FR-C01 | Minor | Manual: search for "café" when only "cafe" in catalog; no match |
