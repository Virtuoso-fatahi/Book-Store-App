## BUG-001
**Summary:** Search with leading/trailing spaces returns no results  
**Severity/Priority:** Minor / Medium  
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
