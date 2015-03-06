// JavaScript File

// Create a function to give us a random number

//Create variables for min and max
var min = Number(prompt("Please type in a min number"));
var max = Number(prompt("Please type in a max number"));

//Test for not a number or empty string
if(min===""){
	console.log("You did not enter anything.");
	min = Number(prompt("Please type in a min NUMBER!"));
	}

if(isNaN(min) || min===""){
	console.log("Inside the Else Statement");
	min = Number(prompt("Please type in a min NUMBER!"));

	
	}else {
		console.log("Inside the If Statement");
		
		}


if(!isNaN(max)){
	
	console.log("Inside the If Statement");
	
	}else {
	
			console.log("Inside the Else Statement");
			
			max = Number(prompt("Please type in a max NUMBER!"));
		
		}

//Show it works once

//After loops, show while

while(isNaN(min)){
	
	min = prompt("Please type in a min NUMBER!");
		
}


//Generate a random number
var randomNumber = Math.round(Math.random() *(max-min) + min);
		
console.log(randomNumber);
