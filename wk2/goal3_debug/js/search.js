//sean edwards
//pwa1
//3/16/15


// 14 total errors
//Wrapping entire code in a function
// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
//Creating variable for results
var resultsDIV = document.getElementById("results"),
//Creating variable for the search input by the user
    searchInput = document.forms[0].search,
    currentSearch = '';

// Validates search query
//Validates the input in the search box
var validate= function(query){

    // Trim whitespace from start and end of search query
    //Uses just the inputted information from the user and not any of the white, empty space by using while loop
    while(query.charAt(0)=== " "){
        query = query.substring(1, query.length);
    };

    //Trimming whitespace from the search box
    while (query.charAt(query.length - 1) === "") {
        query = query.substring(0, query.length - 1)
    };

    // Check search length, must have 3 characters
    //if else statement checking to see there are at least 3 characters in the search box
    if (query.length < 3) {
        //alerting user their search is too small
        alert("Your search query is too small, try again.");

        // (DO NOT FIX THE LINE DIRECTLY BELOW)
        //search for desired results based on user input
        searchInput.focus();
        //return those results
        return;
    };
    //searching using query
    search(query);
};

// Finds search matches
//creating variable to hold function that searches for matches based on input
var search = function (query) {


    // split the user's search query string into an array
    //add search input into an array
    var queryArray = query.split(" ");

    // array to store matched results from database.js
    //creating empty array that will hold all of the search matches
    var results = [];

    // loop through each index of db array
    //loop through the matches in the array using their index
    for (var i = 0, j = db.length; i < j; i++) {

        // each db[i] is a single video item, each title ends with a pipe "|"
        // save a lowercase variable of the video title
        //Creating variable that signifies the end of each title in array
        var dbTitleEnd = db[i].indexOf('|');
        //Creating variable that signifies each individual video item
        var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd);

        // loop through the user's search query words
        // save a lowercase variable of the search keyword
        //loop through the array of the user's search inputs
        for (var ii = 0, jj = queryArray.length; ii < jj; ii++){
            //Creating variable for each item in the search query array
            var qitem = queryArray[ii].toLowerCase();

            // is the keyword anywhere in the video title?
            // If a match is found, push full db[i] into results array
            //Creating variable to find keyword in any of the titles
            var compare = dbitem.indexOf(qitem);
            //pushing matched result into the results array
            if (compare !== -1){
                results.push(db[i]);
            };
        };
    };


    //sorting the results
    results.sort();

    // Check that matches were found, and run output functions
    //if there are 0 matches, then run function noMatch
    if (results.length === 0) {
        //call on noMatch function
        noMatch();
    } else {
        //call on showMatches function with results as an arguent
        showMatches(results);
    };
};

// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
//Create variable for noMath function
var noMatch = function(){
    //creating hmtl variable that is showing there were no results found when there is no match
    var html = ''+
            '<p>No Results found.</p>'+
            '<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
        ;
    //showing results in the webpage?
    resultsDIV.innerHTML = html;
};

// Put matches into page as paragraphs with anchors
//Create variable for showMatches function
var showMatches = function(results){

    // THE NEXT 4 LINES ARE CORRECT.
    //create variable hmtl showing Results title
    var html = '<p>Results</p>',
    //Giving title of results
        title,
    //linking url to the title?
        url;


    //sean you left of here fix bottom half

        // loop through all the results search() function
        //Looping through the results using the search function until all are found
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
            //Signifying the end of each title
			titleEnd = results[i].indexOf('|');
            //defining the title using results array followed by a pipe to signify the end of the title
            title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title
            //Putting the video url at the end of the title
            url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
            //Making the actual video link so the user can click and go to the video
            html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
    //displaying the link on the webpage?
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT

    // The onsubmit event will be reviewed in upcoming Course Material.
    // THE LINE DIRECTLY BELOW IS CORRECT
    //creating a function that validates?
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;
        //validating the query variable
		validqte(query);

    // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        //returning something in case nothing is found?
		return false;
	;
        //closing the function from the very beginning that we used to wrap all of the code in

})();