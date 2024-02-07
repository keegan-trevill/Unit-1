
//creates array with city and it's population
var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

//This function looks at each element of cityPop array and creates a column 
//saying if it is a small, medium, or large city
function addColumns(cityPop) {
    
	//creates the header for City Size before anything
	document.querySelectorAll("tr").forEach(function(row, i) {
        if (i == 0) {
            row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
        } else {
            var citySize;
            if (cityPop[i - 1].population < 100000) {
                citySize = 'Small';
            } else if (cityPop[i - 1].population < 500000) {
                citySize = 'Medium';
            } else {
                citySize = 'Large';
            }
            row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>'); //adds citySize to column
        }
    });
}

//This function creates 2 interactive processes
function addEvents(){
	
	//This creates the mouseover event that changes the text color to a random color on the scale as the mouse
	//moves across the table
	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255); //chooses a random color

			color += random; 

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};

		//This styleizes the text with random colors
		document.querySelector("table").style.color = color;
	}},)

	//this function is a click interaction that pops up a message
	function clickme(){

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme)
};

//this function calls upon the functions to be initialized and therefore implemented
function initialize(){
    cities();
	addColumns(cityPop);
	addEvents();
};

//function to create a table with cities and their populations
function cities(){
    var cities = [
        'Madison',
        'Milwaukee',
        'Green Bay',
        'Superior'
    ];
    var population = [
        233209,
        594833,
        104057,
        27244
    ];

    //create a table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add city column to header row
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add population column to header row
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);
	
    //add the header row
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for (var i = 0; i < cities.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cities[i];
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = population[i];
        tr.appendChild(pop);

        table.appendChild(tr);
    };

    //add the table to the div in index.html
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
};

window.onload = initialize();