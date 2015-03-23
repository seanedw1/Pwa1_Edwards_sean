/*
 Name: sean edwards
 Date: 3/17/15
 Assignment: Goal1: Assignment: Duel1
*/

// self-executing function
(function(){   //Function

    console.log("FIGHT!!!");  //Consoling the fight

    //player name
    var playerOne = ["Kabal", 20, 100];                        //Name, Damage, health in an array player 1
    var playerTwo = ["Kratos", 20, 100];                           //Name, Damage, health in an array player 2

    //player damage
  //  var player1Damage = 20;  //Assigning a value of 20 to a variable
   // var player2Damage = 20;   //Assigning a value of 20 to a variable

    //player health
   // var playerOneHealth = 100;  //Assigning a variable of 100 to a variable
    //var playerTwoHealth = 100; //Assigning a variable of 100 to a variable

    var round=0;  //Assigning a variable of 0 to a variable

    function fight(){  //Function of fight
        console.log ('in the fight function'); //This consoles in the console log

        alert(playerOne[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]); //Alert the user

        for (var i=0; i < 10; i++){ //Making a for loop for the rounds

            //random formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = playerOne[1] * .5;   //Math equation - finding min damage
            var minDamage2 = playerTwo[1] * .5;  //Math equation - finding min damage
            var f1 = Math.floor(Math.random()*(playerOne[2]-minDamage1)+minDamage1);//Assessing total damage taken
            var f2 = Math.floor(Math.random()*(playerTwo[2]-minDamage2)+minDamage2);//Assessing total damage taken

            //inflict damage
            playerOne[2]-=f1;     //Function of -= - Assessing damage on player 1
            playerTwo[2]-=f2;    //Function of -= - Assessing damage on player 2

            console.log(playerOne[0]+":"+playerOne[2]+" "+playerTwo[0]+":"+playerTwo[2]);   //Console.log your results

            var results = winnerCheck();  //Variable of results to check for winner
            console.log(results);        //Console.log your results

            if (results === "no winner"){//If statement for results
                round++; //One increment added to round variable
                alert(playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER* "+playerTwo[0]+":"+playerTwo[2]); //Alert the user of no winner
            }else{ //Else if statement
                alert(results);  //Alert the user of results
                break; //Break the decision
            };

        };

    };

    function winnerCheck(){ //Function of checking the winner
        console.log("in winnerCheck FN");                   //Console.log the winner

        var result="no winner";                             //Variable for the results of no winner

        if (playerOne[2]<1 && playerTwo[2]<1){        //If statement for neither players winning
            result = "You Both Die";                        //Results ending in both dying
        } else if(playerOne[2]<1){                       //Else if statement that player two wins
            result =playerTwo[0]+" WINS!!!";               //Result ending in player two winning
        } else if(playerTwo[2]<1){                       //Else if statement that player two wins
            result =playerOne[0]+" WINS!!!";                //Results
        };

        return result;                                      //Return your results

    };


    /*******  The program gets started below *******/
    console.log('program starts')  //Console.log 'program starts'
    fight();  //Fight! :)

})();