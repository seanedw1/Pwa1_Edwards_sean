/*

sean edwards
pwa1
3/14/15



    PWA1: Goal 4: Course Material 4

	1. Objects
	2. Document Object Model
	3. Events and Callbacks
*/


// application scope (self-executing function)
(function(){


/*	==================================================================
	Objects
	------------------------------------------------------------------
		
	- objects are collections of keys and values for storing data {KEY : Value} pairings, also 
		known as associative pairing
 
	- arrays and objects are both used to store multiple values 
		arrays vs objects:  
 			1.  arrays store by numerical index
 			2.  objects store by a key index
	
	- keys in objects are names (similar to variables), used to index a value inside the object

	-similar to making an array, we declare the object’s properties inside the literal, separating by comma...
*/
console.log('------Objects ----------');

//{KEY : Value} pairings,


person = {
    'name' : "bond",
    'age' : 35,
    'secretAgent' : true
    };


/* accessing object properties
     - below are 3 ways you can access the property information in an object
         1. dot notation
         2. index notation using a variable as the index
         3. index notation using a string

     - also keep in mind that since the keys can be strings, you could access the keys using string variables
 */

    var personAge = 'age';
    console.log(person.name,person[personAge],person['secretAgent']);

// setter


    person['age'] ='40';
    person.name = "james bond";
    person.height = 5;
    console.log(person);

//nested objects

person = {birthday: {month: 12,day: 2}, name: 'bond'};
    console.log(person['birthday']['month']);
    console.log(person.birthday.month,person.name);

//---------------------------------------------

// Object within an object

console.log('------Object within an object, Arrays, Function ----------');


   var thatGuy = {
       name: 'james bond',
       course: "pwa1",
    address: {
        num: 3300,
        street: "university",
        city: "orlando",
        cornerOf: ['university','semoran']
    },
       showMyAddress: function(){

           var x = this.address.street + "," + this.address.city;
           return x;
       }
   };

    console.log(thatGuy.showMyAddress());


//properties & methods
/*
	- objects are useful primarily for properties and methods:
		- properties are variable/keys that belong to an object only
		- methods are function/keys that belong to the object only 
		= these members are the foundation of an oop model
*/

console.log('------Objects - properties & methods ----------');

//Method 1 "Basic"



   var fsStudent = {}; //initialize variable
    fsStudent.age = 22; //set age property value
    fsStudent.career ="web dev";//set career property

    fsStudent.sayHello = function(){//create the method say hello
        console.log("hello");

    };



// above, we first initialize the object, then we created 2 properties 
//   for the object, and a method called sayHello - notice that the method is 
//	 being created by an assignment operator, just like the properties.

// we can also access the methods and properties of an object using  [ ] , 
// 	by using their name as a string - all of the below are valid:

console.log("method 1");

    fsStudent.sayHello();

/* ===============================================================
	The for-in object loop
------------------------------------------------------------------	

	for(var key in obj){
		obj[key]
	}
*/
    console.log("---------- Object - For In Loop ----------------");


var students = {

    name: "james bond",
    gender: "male",
    job: "spy"
};
    for(var key in students){

        console.log("key names:", key);
        console.log('value of the key[' ,key, ']: ',students[key]);
    }
/*
	===============================================
	MORE Object infomation
	
		- most strictly-typed languages have clear separations in their data types 
			and classical behavior

		- JavaScript is simpler:
			- numbers, strings, and booleans are the only separate data types in JavaScript
			- objects, arrays, regular expressions, and functions are all considered 
				to be objects.
			- in addition, anything that is not an object, acts like an object

			i.e.   "Literal Syntax"
			myStr = ‘James Bond’;
			alert(myStr.length)   //will return a 10


			- previously, we used the most common constructor for creating our 
				variables, which is the literal syntax:

				var myNum = 5;

			- we could also create this variable using its "constructor" equivalent:
	
				var myNum = new Number(5);

			- both have the same result - the literal syntax is preferable	

			- using these constructors, we can also convert from one data type to another.
*/
    console.log('------ Objects - Converting Datatypes ----------');

var myNum=1;
    myString = String(myNum);
    console.log(typeof myString);



/*
	- because these values act as objects, the data types also have methods and 
		properties, just like an object...  
	- we’ve already looked at one, the .length property, which can be used on 
		both strings and arrays.
*/

// #1 - shows string length


	

	

console.log('------ MORE Object examples - Objects/Functions ----------');

// showing a function call and creating a method



/*
	==================================================================
	DOCUMENT OBJECT MODEL
	------------------------------------------------------------------

	document	// global DOM object
	window		// global DOM object
*/
console.log('------------ DOCUMENT OBJECT MODEL -------------------');

//Window DOM object
/*
 console.log(window);
 console.log(window.location);
 console.log(window.history);
 console.log(window.navigator);

 //Document DOM object
 console.log(document);
 console.log(document.body);
 console.log(document.head);
 */


/*
	==================================================================
	document.getElementById(string);
	------------------------------------------------------------------
	- Finds an html element on the page by it's CSS ID.
	- RETURNS a single DOM object.
	- Requires a string. 
	- If there are more than 1 id, it returns the first.

	------------------------------------------------------------------
	BEST PRACTICE:
	
	- Save the html element to a variable for later reference.
	- Code shouldn't repeat itself. Code shouldn't repeat itself.
*/

console.log('------------ getElementById -------------------');

var playbox = document.getElementById('playbox');
    console.log(playbox);


/*
	==================================================================
	document.getElementsByTagName(string);
	------------------------------------------------------------------
	- Finds all html elements on the page with a matching html tag
	- RETURNS an array (collection) of DOM objects.
*/

console.log('------------ getElementsByTagName -------------------');

var anchors = document.getElementsByTagName('a');
    console.log(anchors);

    console.log(anchors[1]);


/*
	==================================================================
	document.querySelectorAll(string);
	------------------------------------------------------------------
		- Uses a CSS selector expression to find all html elements that match the expression.
		- Works much like stylesheet declarations (class and ID prefixes)

		- RETURNS an array (collection) of DOM objects. Even if there is 1 object.
			versus the getElementByID (that returns a single DOM element)
*/

console.log('------------ querySelectorAll -------------------');

var nav = document.querySelectorAll('#nav li');
    console.log(nav);




/*
	==================================================================
	document.querySelector(string);
	------------------------------------------------------------------
		- Works just like querySelectorAll, but only returns the first match,
			If multiple exist, return the first
		
		- RETURNS a single DOM object.
*/
    console.log('------------ querySelector -------------------');


var nav2 = document.querySelector('#nav');
    console.log(nav2);


    /*
        ==================================================================
        TRAVERSAL
        ------------------------------------------------------------------
            - "Traversing" means finding other html elements from already selected
                element(s)
            - We use XML nodes for traversing

        Traversing works by parent/child/sibling relationships:

            - firstChild
            - lastChild
            - parentNode
            - nextSibling
            - previousSibling
            - childNodes

        Will be used in ALL future assignments.
    */
    console.log('------------ TRAVERSAL -------------------');

var apple = document.querySelectorAll('#nav li a')[2];
console.log(apple);

    console.log(apple.parentNode);
    console.log(apple.parentNode.parentNode);


    /*
        ==================================================================
        Manipulating Attributes
        ------------------------------------------------------------------
            - HTML elements have attributes, things like "href", "src", "title", etc
            - To access these attributes, there are specific setter/getter methods.

            Syntax:
            - element.setAttribute(attr, value)
                - always initializes an attribute to a new value
            - element.getAttribute(attr)
                - always returns a string

            attr = href, src, class
    */


    var navLinks = document.querySelectorAll('#nav li');
    for(i=0;i<navLinks.length;i++){

      var href= navLinks[i].firstChild.getAttribute('href');
        console.log('manipulation HREF:', href);

        //check all classes
        var aClass = navLinks[i].firstChild.getAttribute('class');
        console.log('manipulation Class:',aClass);

    };


/*
	==================================================================
	Manipulating CSS Classes
	------------------------------------------------------------------
		- If you use setAttribute to change the "class" attribute of an element,
			that element is immediately redrawn with the new css styles.
		
		- Just like normal, you can set MULTIPLE classes at once.
		
			element.setAttribute('class', 'thumb active')

		- FYI: Elements can have multiple classes.
*/

console.log('------------ Manipulating CSS Classes -------------------');


navLinks[2].firstChild.setAttribute('class','navitem active');
    var changeClass = navLinks[1].firstChild.setAttribute('href','http://google.com');

    console.log('------------ Manipulating HTML Classes -------------------');

    var navLinks = document.querySelectorAll('#nav a');
    console.log(navLinks[2]);

console.log(navLinks[2].innerHTML);//getter
    navLinks[2].innerHTML = 'this links rocks';

/*
	==================================================================
	Replacing an HTML container with new HTML
	------------------------------------------------------------------
		- In a later project, you are building a gallery. 
		- You will be targeting the SCR of an image tag.
		- See contentPreview in HTML

Sample Link: http://www.instructables.com/files/deriv/FJI/WGSW/FPIUQQ3K/FJIWGSWFPIUQQ3K.MEDIUM.jpg
*/



})(); // end wrapper