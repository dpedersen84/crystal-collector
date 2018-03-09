$(document).ready(function() { //START JQUERY

    //GLOBAL VARIABLES

    let goalNumber;
    let yourNumber;
    let wins;
    let losses;
    // let crystal1;
    // let crystal2;
    // let crystal3;
    // let crystal4;

    //newGame(RESET) FUNCTION

    function newGame () {
        let goalNumber;
        let yourNumber=0;
        let wins;
        let losses;
        // let crystal1;
        // let crystal2;
        // let crystal3;
        // let crystal4;

        // crystal1 = parseInt((Math.random() * 12) + 1);
        // console.log("Crystal 1: " + crystal1);

        // crystal2 = Math.floor((Math.random() * 12) + 1);
        // console.log("Crystal 1: " + crystal2);

        // crystal3 = Math.floor((Math.random() * 12) + 1);
        // console.log("Crystal 1: " + crystal3);

        // crystal4 = Math.floor((Math.random() * 12) + 1);
        // console.log("Crystal 1: " + crystal4);

        goalNumber = Math.floor((Math.random() * 120) + 19);
        console.log("Goal Number: " + goalNumber);
        $("#goalNumber").text(goalNumber);


    } //END FUNCTION

    newGame() ;

    var crystalArray = [];

    for (var i = 0; i < 4; i++) {
        var randCrystal = Math.floor(Math.random() * 12) + 1;
        crystalArray.push(randCrystal);
    };

    console.log(crystalArray);

    //CLICK LISTENER

    $(".crystal").on("click", function () {
        var thisData = ($(this).attr("data-value"));
        console.log(thisData);
        console.log(crystalArray [thisData]);
        thisData = parseInt(thisData);
        yourNumber += thisData;
    });

    // //Crystal One
    // $(".crystal1").on("click", function () {
    //     yourNumber += crystal1;
    //     console.log("Your Number: " + yourNumber);
    //     $("#yourNumber").text(yourNumber);
    // });

    // //Crystal Two
    // $(".crystal2").on("click", function () {
    //     yourNumber += crystal2;
    //     console.log("Your Number: " + yourNumber);
    //     $("#yourNumber").text(yourNumber);
    // });

    // //Crystal Three
    // $(".crystal3").on("click", function () {
    //     yourNumber += crystal3;
    //     console.log("Your Number: " + yourNumber);
    //     $("#yourNumber").text(yourNumber);
    // });

    // //Crystal Four
    // $(".crystal4").on("click", function () {
    //     yourNumber += crystal4;
    //     console.log("Your Number: " + yourNumber);
    //     $("#yourNumber").text(yourNumber);
    // });

    if (yourNumber === goalNumber) {
        alert("WINNER!");
    }

    else if (yourNumber >= goalNumber) {
        alert("LOSER!");
    }

}); //END JQUERY