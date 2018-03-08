$(document).ready(function() { //START JQUERY

    //GLOBAL VARIABLES

    let goalNumber;
    let yourNumber;
    let wins;
    let losses;
    let crystal1;
    let crystal2;
    let crystal3;
    let crystal4;

    //newGame(RESET) FUNCTION

    function newGame () {
        let goalNumber;
        let yourNumber;
        let wins;
        let losses;
        let crystal1;
        let crystal2;
        let crystal3;
        let crystal4;

        crystal1 = Math.floor((Math.random() * 12) + 1);
        console.log("Crystal 1: " + crystal1);

        crystal2 = Math.floor((Math.random() * 12) + 1);
        console.log("Crystal 1: " + crystal2);

        crystal3 = Math.floor((Math.random() * 12) + 1);
        console.log("Crystal 1: " + crystal3);

        crystal4 = Math.floor((Math.random() * 12) + 1);
        console.log("Crystal 1: " + crystal4);

        goalNumber = Math.floor((Math.random() * 120) + 19);
        console.log("Goal Number: " + goalNumber);

        // $("#goalNumber, #yourNumber, #wins, #losses, #crystal1, #crystal2, #crystal3, #crystal4").empty(); //Clear Variables on DOM for New Game

    } //END FUNCTION

    newGame() ;

    //CLICK LISTENER

    $(".crystal").on("click", function () {
        
        //IF ELSE

    }) //END CLICK LISTENER


}); //END JQUERY