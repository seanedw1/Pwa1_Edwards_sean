/*
 Name: sean edwards
 Date: 3/7/15
 Assignment: Goal1: Assignment: Duel1
*/

// self-executing function
(function(){   //Function

    console.log("FIGHT!!!");  //Consoling the fight

    //player name
    var playerOneName = "Spiderman"; //Name player 1
    var playerTwoName = "Batman";  //Name player 2

    //player damage
    var player1Damage = 20;  //Assigning a value of 20 to a variable
    var player2Damage = 20;   //Assigning a value of 20 to a variable

    //player health
    var playerOneHealth = 100;  //Assigning a variable of 100 to a variable
    var playerTwoHealth = 100; //Assigning a variable of 100 to a variable

    var round=0;  //Assigning a variable of 0 to a variable

    function fight(){  //Function of fight
        console.log ('in the fight function'); //This consoles in the console log

        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);//Alerting the user

        for (var i=0; i < 10; i++){ //Making a for loop for the rounds

            //random formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = player1Damage * .5;  //Math equation - finding min damage
            var minDamage2 = player2Damage * .5;   //Math equation - finding min damage
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);//Assessing total damage taken
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);//Assessing total damage taken

            //inflict damage
            playerOneHealth-=f1;  //Function of -= - Assessing damage on player 1
            playerTwoHealth-=f2;  //Function of -= - Assessing damage on player 1

            console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth); //Console.log your results

            var results = winnerCheck();  //Variable of results to check for winner
            console.log(results);        //Console.log your results

            if (results === "no winner"){//If statement for results
                round++; //One increment added to round variable
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER* "+playerTwoName+":"+playerTwoHealth); //Alert the user of no winner
            }else{ //Else if statement
                alert(results);  //Alert the user of results
                break; //Break the decision
            };

        };

    };

    function winnerCheck(){ //Function of checking the winner
        console.log("in winnerCheck FN");  //Console.log the winner

        var result="no winner";  //Variable for the results of no winner


        if (playerOneHealth<1 && playerTwoHealth<1){//If statement for neither players winning
            result = "You Both Die"; //Results ending in both dying
        } else if(playerOneHealth<1){ //Else if statement that player two wins
            result =playerTwoName+" WINS!!!" //Result ending in player two winning
        } else if(playerTwoHealth<1){ //Else if statement that player two wins
            result =playerOneName+" WINS!!!" //Results
        };

        return result;    //Return your results

    };

    /*******  The program gets started below *******/
    console.log('program starts')  //Console.log 'program starts'
    fight();  //Fight! :)

})();