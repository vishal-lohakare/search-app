This Project is bootstraped with [Create React App]

[Run the Boilerplate]

To run application follow below steps

1) npm install
2) json-server --watch db.json // Execute on different terminal tab to start "json-server" you can check on http://localhost:3000
3) npm start



2 API's available on json-server

/suggestions
/search-results

Following things were implemented in the application

search with key
debouncing
search suggestions
search results
pagination
Sort results


How to Use (Test scenario)

1) search a key "aungular" // It will provide you suggestions
2) If no suggestions then enter to see page results
3) If suggestions then select any option, it will show search results // options were not binded with the results, it will always return the same results
4) Using pagination you can see new results
5) Select drop down option to see new sorted results


Future enhancement

1) Real time data
2) Unit testing
3) Refinement in pagination
4) Actual binding of key to search results
5) Saas loader