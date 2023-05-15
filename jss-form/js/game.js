// this file is for code needed for input, quiz, and truth game.

// global variable for first name. A variable that can be used in all functions.

let fname = "";

//function to get info from intro form
// chec input and produce a sentence

function greet() {

    let greetParagraph = document.getElementById("greet");

    //get values from the form

    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    // check the input
    if (fname === "" || lname === ""){
        alert("First and last name cannot be an emptry string!");
        return;
    }

    //age check
    if (age==="" || age < 18){
        alert("Invalid age! You must be 18 or older!");
        return;
    }

    //update output paragraph

    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + "!";
}

// function to play the trivia game
function trivia1(){
    //get handle to answer paragraph
    let triviaAnswer = document.getElementById("trivia-answer");

    //get handles and values from radio selections

    let chocSelected = document.getElementById("chocolate").checked;

    let tunaSelected = document.getElementById("tuna").checked;

    let honeySelected = document.getElementById("honey").checked;

    //give the results
    if (chocSelected) {
        triviaAnswer.innerHTML = fname + ", chocolate wrong!"
    }
    else if (tunaSelected){
        triviaAnswer.innerHTML = fname + ", tuna is wrong!"
    }
    else if (honeySelected){
        triviaAnswer.innerHTML = fname + " you are right!"
    }
    else{
        triviaAnswer.innerHTML = "Uh oh, something went wrong."
    }
}

function trivia2(){
    //get handle to answer paragraph
    let truthAnswer = document.getElementById("truth-answer");

    //get handles and values from radio selections

    let unicornSelected = document.getElementById("unicorn").checked;

    let towerSelected = document.getElementById("tower").checked;

    let pastaSelected = document.getElementById("pasta").checked;

    //give the results
    if (unicornSelected) {
        truthAnswer.innerHTML = fname + ", wrong! Unicorns are the national animal of Scotland."
    }
    else if (towerSelected){
        truthAnswer.innerHTML = fname + ", you are correct! The Eiffel Tower was constructed for the World's Fair!"
    }
    else if (pastaSelected){
        truthAnswer.innerHTML = fname + ", wrong! Single strands of spaghetti are called a spaghetto."
    }
    else{
        truthAnswer.innerHTML = "Uh oh, something went wrong."
    }
}