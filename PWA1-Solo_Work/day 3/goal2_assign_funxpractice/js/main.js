//sean edwards
//pwa
//3/7/15

// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'area'
         - accept 2 parameters into the function for width and height
         - create a function that calculates the area of a rectangle
         - return the value to be used outside the function
         - console.log the answer outside of the function

OPTIONAL!!

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else
            - create an array with all of the even numbers from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var avgNumbers = function(arr){

        //CODE GOES HERE

    };

    console.log('avg number = ', avgNumbers([1,2,3,4,5]));





    /*
    1.  create a function named 'avgNumbers'
    - accept 1 parameter into the function that will be an array of unlimited numbers
    - find the average of all the numbers
    - return the average from the function
    - console.log the answer outside of the function
    */

    //--------------------------------------------------------
    console.log("2. concat first and last name");

        //PUT FUNCTION HERE


    var firstName="james";
    var lastName="bond";

    function fullName(firstName,lastName){

        return firstName+" " + lastName;
    }
    console.log(fullName('James', 'Bond'));


    /*
    2.  create a function named 'fullName'
    - accept 2 parameters into the function that are strings (firstname and lastname)
    - return the name after it has been concatenated
    - console.log the answer outside of the function
    */

    //--------------------------------------------------------
    console.log("3. area");
    var ipsum = "this is test text that is being used as input to a function"

        //PUT FUNCTION HERE
var width=9;
    var length=5;

    function area(w,l){

var area = 5*9;

    }
    return area
    console.log(area(ipsum));

    /**
     var width=10;
     var height=25;

     var total = calcArea(width,height);

     //call function and pass arguments

     //create basic function
     //catches width and height in the parameters(w,h)

     function calcArea(w,h){

    var area=w*h;
    console.log(area);
    return area;
}

     */

      /*
    3.  create a function named 'area'
    - accept 2 parameters into the function for width and height
    - create a function that calculates the area of a rectangle
    - return the value to be used outside the function
    - console.log the answer outside of the function


    */



//OPTIONAL SECTION STARTS HERE


    //--------------------------------------------------------
    console.log("4. sentence char count");

        //PUT FUNCTION HERE

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

        //PUT FUNCTION HERE

    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        //PUT FUNCTION HERE

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();