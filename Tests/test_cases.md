✅ Test Case 
ID: TC--01
Title: Verify the user can search a book by its title,author or description
Pre-conditions: 
 - State:the application is running, 
 - user role:logged in as the user, 
 - data:there are books listed in the catalog

Steps:
1.Run the app
2.Input data in the search bar 
3.Press enter to search

Expected Result:Books related to the data input in the search bar should appear

Actual Results:Books related to the data in the search bar appeared

Post-conditions:Only searched items are returned on the catalog


Evidence: ![alt text](image.png)


ID: TC--02
Title: Filter by genre,price band and rating
Pre-conditions: 
 - State : the application is running
 - user role:logged in as the user
 - data:there are books listed in the catalog

Steps:
1.Run the app
2.Input filter data in the search bar
3.press to Search

Expected Result: :Books related to the filter data input in the search bar should appear

Actual Results:The app does not have filter functions

Post-conditions: Only filtered items should be returned on the catalog

Evidence: Screenshot/gif paths


ID: TC--03
Title: sort by price,rating and popularity
Pre-conditions: 
 - State:the application is running
 - user role:logged in as the user
 - data:there are books listed in the catalog

Steps:
1.Run the app
2.sort data by price,rating and popolarity

Expected Result: Books related to the sort data should appear

Actual Results: the app does not have the sort function so no data is returned

Post-conditions: only sorted items should be returned
Evidence: Screenshot/gif paths