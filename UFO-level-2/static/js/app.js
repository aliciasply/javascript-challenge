
// from data.js
var tableData = data;

// Viewing the data from the console
// console.log(tableData);

// Creating references 
var tablehead = d3.select("thead");
var tablebody = d3.select("tbody");


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


button.on("click", runEnter);
form.on("submit",runEnter);


function runEnter() {
    console.log("A button was clicked!");

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var inputCity = d3.select("#cityname");
    var inputCityValue = inputCity.property("value");
    var inputState = d3.select("#statename");
    var inputStateValue = inputState.property("value");
    var inputCountry = d3.select("#countryshortcut");
    var inputCvalue = inputCountry.property("value");
    var inputShape = d3.select("#shapename");
    var inputShapeValue = inputShape.property("value");

    console.log(inputShapeValue);
   
    var filteredData = tableData.filter(data => data.datetime === inputValue);
    var filteredData2 = tableData.filter(data => data.city === inputCityValue);
    var filteredData3 = tableData.filter(data => data.state === inputStateValue);
    var filteredData4 = tableData.filter(data => data.country === inputCvalue);
    var filteredData5 = tableData.filter(data => data.shape === inputShapeValue);

    tablebody.text("");
    infoTable(filteredData);
    infoTable(filteredData2);
    infoTable(filteredData3);
    infoTable(filteredData4);
    infoTable(filteredData5);

};



