//sean edwards
//3/3/15
//\

alert("Welcome to our store");

var originalPrice =prompt("cost of item");


if (originalprice ==="") {
    var originalprice= (prompt("you did not enter a price"));
    console.log("please enter a price");
}

var discount=prompt("percentage of discount");

var discountAmount = discount/100*originalPrice;

var finalPrice =originalPrice-discountAmount;

alert("the cost after discount " +finalPrice+ " total savings of " +discountAmount);

console.log("the original price of item is " +originalPrice+ " with a discount of " +discountAmount+ " the final price is " +finalPrice);


