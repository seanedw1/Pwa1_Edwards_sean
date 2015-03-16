//sean edwards
//pwa1
//3/10/15


/*******************************************
STUDENT ACTIVITY 1:
1.  Use substr() to console.log 'JavaScript!' from str1.
console.log(str1.substr(7, 11));
2.  Use concat() to console.log 'I love JavaScript ! JavaScript loves me!' with str1 and str2.
********************************************/
var str1 = 'I love JavaScript! ';
var str2 = 'JavaScript loves me!';
var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


//code goes here

console.log(str1.substr(7,11));


/*******************************************
STUDENT ACTIVITY 2:
--- USE THE var's from STUDENT ACTIVITY 1 ---

1.  Use substring() to console.log 'JavaScript' from str2.
********************************************/

console.log(str2.substring(0,10));

//code goes here



/*******************************************
STUDENT ACTIVITY 3:
--- USE THE var's from STUDENT ACTIVITY 1 ---

1. Use toLowerCase() to console.log the str1 all in lowercase letters.
2. Use toUpperCase() to console.log the str1 all in uppercase letters.
********************************************/


//code goes here

console.log(str1.toLowerCase());
console.log(str1.toUpperCase());



/*******************************************
STUDENT ACTIVITY 4:

1.  What method would you use to console.log the variable dec with two decimals.
2.  Use toString() to console.log the type of num.
 ********************************************/

var num = 4567896;
var dec = 33.123456;

//code goes here

console.log(dec.toFixed(2));

console.log(typeof num.toString());



/*******************************************
 STUDENT ACTIVITY 5:

 1.  concatenate the firstQtr and secondQtr arrays and store the results in the
        variable combined
 2.  console.log the results stored in the variable combined
 3.  combine all three arrays and stored the results in the variable combined
 4.  console.log the results stored in the variable combined

 Use the combined variable for items 5 and 6 the below:
 5.  join the array elements into a string and console.log the results
 6.  remove the last element of the array and console.log the results and the new array
 7.  use array "secondHalfYr", and reduce the array to "Sept" & "Oct"
        and console.log the results
 ********************************************/

    var firstQtr = ["Jan", "Feb", "Mar"];
    var secondQtr = ["Apr", "May", "Jun"];
    var secondHalfYr = ["Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var combined;

var combined = firstQtr.concat(secondQtr);
console.log("concat 2 arrays: ", combined);

var combined= firstQtr.concat(secondQtr,secondHalfYr);
console.log("concat 3 arrays: ",combined);

console.log("joined arrays: ", combined.join());

console.log("took out- ",combined.pop());
console.log("show array: ",combined);

var results = secondHalfYr.slice(2,4);
console.log("slice: ", results);


//code goes here




/*******************************************
 STUDENT ACTIVITY 6:

	1.  create a "Switch" conditional that does the following:
		a.  have a var named "age" initialized to a number
		b.  if age 13 then console.log "child"
			if age 18 then console.log "adult"
			if no age then console.log "No answer"
********************************************/


var age = 12;

switch (age){
    case 13:
        console.log("child");
        break;
    case 18:
        console.log("adult");
        break;
    default:
        console.log("no answer");
        break;
};
/*******************************************
 STUDENT ACTIVITY 7:

	1.  create an array with the following cartoon characters
		(Superman, Batman, Wolverine, Iceman)

		a.  create a for loop using the slower method (3 parameters)
			- in the loop just console.log the values
		b.  create a for loop using the faster method (4 parameters)
			- in the loop just console.log the values
********************************************/

var cartoonDudes =['superman', 'batman', 'wolverine', 'iceman'];

for (var i=0; i<cartoonDudes.length;i++){//slower version
    console.log(cartoonDudes[i]);
};

for (var i = 0, max=cartoonDudes.length; i<max; i++){//best practices
    console.log(cartoonDudes[i]);
};

/*******************************************
    STUDENT ACTIVITY 8: (More Practice):

     1.  output "name" in lowercase
     2.  output "name" in uppercase
     3.  output the character in the 3rd index
     4.  output the index number where the work "nice" us located
     5.  output the characters in "name" between indexes 10 & 14
     6.  create a array variable using "name", and output the array
     7.  output the item in index 4
     8.  join all elements of the array separated by a "|"
     9.  output the array in reverse order
     10. output the current array without the first item
     11. output the array with a new item at the end of the array
     - add "NEW VALUE"
     12. output the array without "NEW VALUE"
********************************************/

    console.log('------ More PRACTICE ----------');

    var name = 'This is a nice change of pace';

console.log(name);
console.log(name.toLowerCase());
console.log(name.toUpperCase());

console.log(name.charAt(3));
console.log(name.indexOf('nice'));
console.log(name.slice(10,14));
console.log(name.substring(10,14));

var array1 = name.split(' ');
console.log(array1);
console.log(array1[4]);

console.log(array1.join('l'));
console.log(array1.reverse());

console.log(array1.slice(1));

console.log(array1.push('new value'));
console.log(array1);

array1.pop();
console.log(array1);