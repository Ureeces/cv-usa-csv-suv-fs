// All imports/required functions
const fs = require('fs');
const getRows = require('./get-rows.js');

// Goal
// Get input from user and store it in an array
// The command should be at the index 2 of process.argv
// The next argument at index 3 will likely be the date 

// The commands are as follows:
// total - show total cases for that date*
// new - show total cases for that date*

// Solution
// 1. Pull and read data from our database(or in this case, csv file)
// 2. Transform our data into a 2D array using our getRows function
// 3. Store user input into an array to account for different
//    commands
// 4. Get the command from user input. This should be at index 2.
// 5. Get the date from user input. This should be at index 3.
// 5a. If there is no date, inform user that there must be a date entered.
// 6. Check the command slot
// 6a. If command is "total" - display the total cases for the date entered
// 6b. If command is "new" - display the new cases for the date entered.
// 6c. Any other command is invalid, and we should inform user of
//     incorrect input and show proper format.






