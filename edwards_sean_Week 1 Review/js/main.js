/**
 * sean edwards 3/7/15
 * pwa1
 * lecture 3 assignment
 */

//functions!!!!
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



//generate a random number

var min=180;
var max=220;

function randomizer(mn,mx){

    var randomnumber = Math.round(Math.random()*(mx-mn)+mn);
    return randomnumber;


}

var ranNum = randomizer(min, max);

console.log(ranNum);


//anonymous function

var width=10;
var height=20;


var areaTotal = function(w,h){
    var area=w*h;
    console.log(area);
    return area;
};

var total = areaTotal(width,height);