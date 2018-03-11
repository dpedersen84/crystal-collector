$(document).ready(function() { 

    var wins=0;
    $("#wins").text("Wins: " + wins);

    var losses = 0;
    $("#losses").text("Losses: " + losses);

    var yourNumber = 0;
    $("#yourNumber").text(yourNumber);

    // newGame(RESET) FUNCTION
    function newGame () {

        $("#yourNumber", ).empty();

        var yourNumber = 0;
        $("#yourNumber").text(yourNumber);

        //Goal Number is Set
        goalNumber = Math.floor((Math.random() * 120) + 19);
            console.log("Goal Number: " + goalNumber);
            $("#goalNumber").text(goalNumber);
        
        //Crystals
        var crystalArray = [];

        for (var i = 0; i < 4; i++) {
            var randCrystal = Math.floor(Math.random() * 12) + 1;
            crystalArray.push(randCrystal);
        };

        console.log("Crystal Array: " + crystalArray);
        console.log("Your Number: " + yourNumber);

    };

    //Goal Number is Set
    goalNumber = Math.floor((Math.random() * 120) + 19);
        console.log("Goal Number: " + goalNumber);
        $("#goalNumber").text(goalNumber);
    
    //Crystals
    var crystalArray = [];

    for (var i = 0; i < 4; i++) {
        var randCrystal = Math.floor(Math.random() * 12) + 1;
        crystalArray.push(randCrystal);
    };

    console.log("Crystal Array: " + crystalArray);

    //CLICK LISTENER
    $(".crystal").on("click", function () {
        var thisData = ($(this).attr("data-value"));
        console.log("Crystal Value: " + crystalArray [thisData]);
        crystalArray[thisData] = parseInt(crystalArray[thisData]);
        yourNumber += crystalArray[thisData];
        $("#yourNumber").text(yourNumber);
        console.log("Your number: " + yourNumber);

        if (yourNumber === goalNumber) {
            alert("WINNER!");
            wins++;
            console.log("Wins:" + wins);
            $("#wins").text("Wins: " + wins);
            console.log("---------------------");
            newGame ();
        }
    
        else if (yourNumber >= goalNumber) {
            alert("LOSER!");
            losses++;
            console.log("Losses:" + losses);
            $("#losses").text("Losses: " + losses);
            console.log("---------------------");
            newGame ();
        }

    });

}); //END JQUERY