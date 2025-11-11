## BUG-001
**Summary:** Search with leading/trailing spaces returns no results  
**Severity:** Minor
**Priority:** Medium  
**Environment:** Google chrome, Windows 11   

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

## BUG-002
**Summary:**  Added individual book quantity on cart is endless
**Severity:** Medium
**Priority:** High  
**Environment:** Firefox, Pop OS  

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
