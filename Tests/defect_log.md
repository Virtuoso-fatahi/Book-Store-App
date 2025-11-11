ID: BUG-<area>-001
- Summary: The user is unable to complete payment at chekout
- Severity:Critical
- priority:high
- Environment:Chrome Browser, Windows 11; stable network
- Affected FR(s): FR-O03: Payments — Paystack init with configured currency; exact cents; success/cancel/error handling; verify updates order to Paid

- Steps to Reproduce: Numbered
    1. add a book to cart
    2. proceed to checkout
    3. Fill in the datails
    4. click the pay now button

- Expected Result: payment should go through and show a confirmation message

- Actual Result: payment is not succesful 

- Attachments 
- Notes: when procceding to pay the user is unable to pay and an error message indicating that the payment could not be processed 