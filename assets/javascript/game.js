// Set up variables to keep score

var wins = 0;
$("#wins").text("Wins: " + wins);

var losses = 0;
$("#losses").text("Losses: " + losses);

// Set up random target number variable 

var targetNumber = Math.floor((Math.random()* 101) + 19);
$("#targetNumber").text("Target number: " + targetNumber);

// Set variable for number picked

var userNumber = 0;
$("#userNumber").text("Your number " + userNumber);

// Set up each crystal random number variable 

var blue = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);
var pink = Math.floor((Math.random()* 12) + 1);
var purple = Math.floor((Math.random()* 12) + 1);

// Reset the game function

 function reset() {
     targetNumber = Math.floor((Math.random()* 101) + 19);
     $("#targetNumber").text("Target number: " + targetNumber);
     blue = Math.floor((Math.random()* 12) + 1);
     green = Math.floor((Math.random()* 12) + 1);
     pink = Math.floor((Math.random()* 12) + 1);
     purple = Math.floor((Math.random()* 12) + 1);
     userNumber = 0;
     $("#userNumber").text("Your number " + userNumber);
 }

 // Function for crystals to change value every time clicked 

 function changeNumber() {
    blue = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);
    pink = Math.floor((Math.random()* 12) + 1);
    purple = Math.floor((Math.random()* 12) + 1);
 }

// Function for wins and losses

function win() {
    wins++;
    $("#wins").text("Wins: " + wins);
    reset();
}

function lose() {
    losses++;
    $("#losses").text("Losses: " + losses);
    reset();

}

// Set up click functions for each crystal

$("#blue").on("click", function () {
    userNumber = userNumber + blue 
    $("#userNumber").text("Your number: " + userNumber);
    changeNumber();

   if (userNumber === targetNumber) {
       win();
   }

   else if (userNumber > targetNumber) {
       lose();
   }

    
});

$("#green").on("click", function () {
    userNumber = userNumber + green
    $("#userNumber").text("Your number: " + userNumber);
    changeNumber();

    if (userNumber === targetNumber) {
        win();
    }
 
    else if (userNumber > targetNumber) {
        lose();
    }
    
});

$("#pink").on("click", function () {
    userNumber = userNumber + pink
    $("#userNumber").text("Your number: " + userNumber);
    changeNumber();

    if (userNumber === targetNumber) {
        win();
    }
 
    else if (userNumber > targetNumber) {
        lose();
    }
    
});

$("#purple").on("click", function () {
    userNumber = userNumber + purple
    $("#userNumber").text("Your number: " + userNumber);
    changeNumber();

    if (userNumber === targetNumber) {
        win();
    }
 
    else if (userNumber > targetNumber) {
        lose();
    }
});

