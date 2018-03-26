$(document).ready(function () {
    // choose a goal number to obtain between 50-100
    var random = Math.floor(Math.random() * 100 + 50)
    $("#randomNumber").text(random);

    // setting random numbers for each crystal
    var c1 = Math.floor(Math.random() * 50 + 1);
    var c2 = Math.floor(Math.random() * 40 + 1);
    var c3 = Math.floor(Math.random() * 30 + 1);
    var c4 = Math.floor(Math.random() * 20 + 1);

    // variables for scores
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    // prints the wins and losses
    $("#wins").text(wins);
    $("#losses").text(wins);

    // function alert for wins
    function winner() {
        alert("Good Job! You've won.");
        wins++;
        $("#wins").text(wins);
        reset();
    }

    // function alert for losses
    function loser() {
        alert("Opps, You lost.")
        losses++;
        $("#losses").text(losses);
        reset();
    }

    // make crystals work with numbers
    $("#blue").on("click", function () {
        userTotal = userTotal + c1;
        $("#finalScore").text(userTotal);
        if (userTotal == random) {
            winner();
        }
        else if (userTotal > random) {
            loser();
        }

    })

    $("#green").on("click", function () {
        userTotal = userTotal + c2;
        $("#finalScore").text(userTotal);
        if (userTotal == random) {
            winner();
        }
        else if (userTotal > random) {
            loser();
        }
    })

    $("#red").on("click", function () {
        userTotal = userTotal + c3;
        $("#finalScore").text(userTotal);
        if (userTotal == random) {
            winner();
        }
        else if (userTotal > random) {
            loser();
        }
    })

    $("#purple").on("click", function () {
        userTotal = userTotal + c4;
        $("#finalScore").text(userTotal);
        if (userTotal == random) {
            winner();
        }
        else if (userTotal > random) {
            loser();
        }
    })

    // resetting the game
    function reset() {
        Random = Math.floor(Math.random() * 100 + 50);
        $('#randomNumber').text(Random);
        var c1 = Math.floor(Math.random() * 50 + 1);
        var c2 = Math.floor(Math.random() * 40 + 1);
        var c3 = Math.floor(Math.random() * 30 + 1);
        var c4 = Math.floor(Math.random() * 20 + 1);
        userTotal = 0
        $("#finalScore").text(userTotal);
    }





})