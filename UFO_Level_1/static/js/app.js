// from data.js
var tableData = data;
console.log(tableData);

var tbody = d3.select("tbody");


tableData.forEach(sighting => {
    
    var row = tbody.append("tr");
   Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");


button.on("click", function() {
    
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);
 
    

    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    var sightings2 = filteredData.map(ufo => ufo);

    tbody.html("");

    if (inputValue) {

    sightings2.forEach(ufosighting => {
    
         var row2 = tbody.append("tr");
       Object.entries(ufosighting).forEach(([key, value]) => {
            var cell2 = row2.append("td");
            cell2.text(value);
        });
    });

}

    else { 
        
        tbody.html("");

    

    tableData.forEach(sighting => {
    
    var row = tbody.append("tr");
   Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);

   
    });


});


    }  
 
});




