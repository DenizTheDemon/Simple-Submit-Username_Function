

document.getElementById("submit").onclick = function(){ //When the submit button is clicked
    let username = document.getElementById("username").value; //it takes the user input from the input box
    document.getElementById('h1').textContent = username//and prints it at the bottom
}