

function wrong() {
    document.getElementById("answer-response").innerHTML = "Sorry, wrong answer. Try again!"
}

function correct() {
    document.getElementById("answer-response").innerHTML = "That's correct!"
}



function displayResponse() {
    var answer = document.querySelector('input[name="puzzle1-ans"]:checked').value;
    console.log(answer)
    if (answer == "Maria") {
        correct();
    } else {
        wrong();
    }




}