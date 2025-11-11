✅ Test Case 

### TC-CAT-001: Search Books by Title
*Priority:* P1  
*Pre-conditions:*
- The app is open on the Catalog page
- Book data is already loaded 
- Search bar is visible and working

*Steps:*
1. Go to the Catalog page
2. Find the search bar at the top
3. Type “To Kill a Mockingbird” in the search box
4. Press the Enter key
5. Check the results that show up

*Expected Result:*
- Search should work even if the case (uppercase/lowercase) is different
- Books with similar titles should also appear 
- When the search box is empty, all books should show again
- Results should update instantly or after pressing Enter

*Actual Result:*
- books according to the book title is shown

*Post-conditions:*
- Catalog shows only the searched books
- The search word stays in the input until cleared

*Evidence Path:* tests/evidence/WhatsApp Image 2025-11-11 at 14.29.32_e234e0d6.jpg

---

### TC-CAT-002: Search by Author Name
*Priority:* P1  
*Pre-conditions:*
- App is open on the Catalog page
- There are several books with different authors


*Steps:*
1. Open the Catalog page
2. Type “Geo” in the search bar
3. Press Enter
4. Check if books by that author appear
5. Try using small letters or capital letters to confirm case-insensitivity

*Expected Result:*
- Books written by “George Orwell” should appear
- Search should not be affected by upper/lowercase letters
- Books by other authors should not appear

*Actual Result:*
- Books by the searched author appear correctly

*Post-conditions:*
- Search shows only books by that author
- Author names are clearly displayed in the results

*Evidence Path:* tests/evidence/image.png

---

### TC-CAT-003: Search by Description
*Priority:* P2  
*Pre-conditions:*
- catalog page is open 
- Books have proper descriptions

*Steps:*
1. Make sure the catalog page is open
2. Search using a keyword that appears in a book’s description
3. Press Enter
4. Observe which books appear in the results

*Expected Result:*
- Books that have the searched keyword in their description should appear
- Partial matches should also work
- The search results should make sense and be relevant

*Actual Result:*
- Only books that exactly match the keyword in the description appear

*Post-conditions:*
- Search results are displayed based on keyword relevance
- No wrong or unrelated results are shown

*Evidence Path:* tests/evidence/CAT-003-search-description.png

---

### TC-CAT-004: Empty Search Query Returns Full List
*Priority:* P1  
*Pre-conditions:*
- App is open on the Catalog page
- A previous search was already done

*Steps:*
1. Perform any search
2. Delete everything from the search bar
3. Press Enter
4. Observe what happens

*Expected Result:*
- The full book list should appear again
- No errors or blank screens should show
- All books become visible

*Actual Result:*
- The full book list displays correctly

*Post-conditions:*
- Catalog resets to its normal view
- Search bar becomes empty again

*Evidence Path:* tests/evidence/(tc4.png)

### TC-CAT-005: Search with Whitespace Trim  
*Priority:* P2  
*Pre-conditions:*
- Catalog page is open

*Steps:*
1. Type spaces before and after the book name, for example “ To Kill a Mockingbird ”
2. Press Enter
3. Check if the results appear

*Expected Result:*
- The app should ignore the extra spaces and still show the correct book
- Search should work normally even if spaces are added by mistake

*Actual Result:*
- No books are shown when the whitespaces are added

*Post-conditions:*
- Search input should be cleaned automatically by trimming spaces

*Evidence Path:* tests/evidence/tc5.png
