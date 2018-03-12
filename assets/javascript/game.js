$(document).ready(function() { 
    var wins=0;
    var losses = 0;
    var yourNumber = 0;
    var goalNumber = 0;
    var crystalArray = [];
    
    function newYourNumber () {
        $("#yourNumber").text(yourNumber);
        console.log("Your Number: " + yourNumber);
    };

    function newGoalNumber () {
        //Goal Number is Set
        goalNumber = Math.floor((Math.random() * 120) + 19);
            $("#goalNumber").text(goalNumber);
            console.log("Goal Number: " + goalNumber);
    };

    function newCrystals () {
        for (var i = 0; i < 4; i++) {
            var randCrystal = Math.floor(Math.random() * 12) + 1;
            crystalArray.push(randCrystal);
        }
        randCrystal = parseInt(randCrystal);
        console.log("Crystal Array: " + crystalArray);
    };
    
    // newGame(RESET) FUNCTION
    function newGame () {
        yourNumber = 0;
        crystalArray = [];
        goalNumber = 0;

        newYourNumber();
        newGoalNumber();
        newCrystals();
    };

    newYourNumber();
    newGoalNumber();
    newCrystals();

    //CLICK LISTENER
    $(".crystal").on("click", function () {
        var crystalValue = ($(this).attr("data-value"));

        //Converts String to Number
        crystalArray[crystalValue] = parseInt(crystalArray[crystalValue]);
         
        yourNumber += crystalArray[crystalValue];
        $("#yourNumber").text(yourNumber);
        console.log("Crystal Value: " + crystalArray [crystalValue]);
        console.log("Your Number: " + yourNumber);

        if (yourNumber === goalNumber) {
            alert("WINNER!");
            wins++;
            $("#wins").text("Wins: " + wins);
            $("#losses").text("Losses: " + losses);
            console.log("Wins:" + wins);
            console.log("Losses:" + losses);
            console.log("---------------------");
            newGame ();
        }
    
        else if (yourNumber >= goalNumber) {
            alert("LOSER!");
            losses++;
            $("#wins").text("Wins: " + wins);
            $("#losses").text("Losses: " + losses);
            console.log("Wins:" + wins);
            console.log("Losses:" + losses);
            console.log("---------------------");
            newGame ();
        }

    });

}); //END JQUERY