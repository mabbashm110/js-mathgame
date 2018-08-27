// When click start button
let playing = false;
let score;

document.getElementsById("button").onclick = function(){
    if (playing){
        location.reload();  //reloads the page
    }
    else {
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        document.getElementById("timeremains").style.display = "block";

    }
}
// Check if we are playing
// Change button to reset and reload the page

// if not playing
    // Set score to 0
    // show countdown box
    // reduce time by one second in a loop
        // is time left?
            // Yes -> Continue
            // Else -> Game over
    // Change button to reset
    // Generate new question and multiple answers


// When an answer box is clicked
    // check if we are playing
        // Check if the answer is correct
            // Yes -> increase score by 1
                // show correct box for 1 second
                // Generate new question
            // No -> 
                // show try again for 1 second