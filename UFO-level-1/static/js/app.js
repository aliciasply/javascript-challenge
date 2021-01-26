// from data.js
var tableData = data;

// Viewing the data from the console
// console.log(tableData);

// Creating references 
var tablehead = d3.select("thead");
var tablebody = d3.select("tbody");

var inputElement = d3.select("#datetime");

// Creating a function to show the table 
function infoTable(tableData2) {
    tableData2.map(data => {

        // Make new row
        var row = tablebody.append("tr");
    
        // example from day3 ex3
        // Append each row with data
        // using td instead of tr b/c <td> element defines a cell of a table that contains data. Displa table cell mode
        row.append("td").text(data.datetime);
        row.append("td").text(data.city);
        row.append("td").text(data.state);
        row.append("td").text(data.country);
        row.append("td").text(data.shape);
        row.append("td").text(data.durationMinutes);
        row.append("td").text(data.comments);
    });
};

// Displaying the table
infoTable(tableData);

// Create event handlers
var button = d3.select("#filter-btn");
var form = d3.select("#form");

form.on("submit", handleClick);
button.on("click", handleClick);

function handleClick() {
    console.log("A button was clicked!");

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
   
    var filteredData = tableData.filter(data => data.datetime === inputValue);
  
    console.log(filteredData);
    tablebody.text("");
    infoTable(filteredData);

};
button.on("click", handleClick);

