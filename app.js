var numSquares = 6;
var color = generateColor(numSquares);
var squares = document.getElementsByClassName("square");
var correctColor = pickColor();
var gameStatus = document.getElementById("message");
var newButton = document.getElementById("NewColor");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
document.getElementById("colorPicked").textContent = correctColor;

assignColor();
//Easy and Hard Buttons event listener
easyButton.addEventListener("click", function () {  
    numSquares = 3;
    newButton.textContent = "New Colors";
    gameStatus.textContent = "";
    document.querySelector("h1").style.backgroundColor = "steelblue";
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    color = generateColor(numSquares);
    correctColor = pickColor();
    document.getElementById("colorPicked").textContent = correctColor;
    for (var i = 0; i < squares.length; i++) {
        if (i < 3)
            squares[i].style.backgroundColor = color[i];
        else
            squares[i].style.display = "none";
    }

});

hardButton.addEventListener("click", function () {
    numSquares = 6;
    newButton.textContent = "New Colors";
    gameStatus.textContent = "";
    document.querySelector("h1").style.backgroundColor = "steelblue";
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    color = generateColor(numSquares);
    correctColor = pickColor();
    document.getElementById("colorPicked").textContent = correctColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color[i];
        squares[i].style.display = "block";
    }
});

//Assignment of colors to all the squares
function assignColor() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color[i];
        squares[i].addEventListener("click", function () {
            console.log(this.style.backgroundColor);

            if (this.style.backgroundColor === correctColor) {
                changeBoxColor(correctColor);
            }
            else {
                this.style.backgroundColor = '#232323';
                gameStatus.textContent = "try again";
            }
        });
    }
}

//New Color Game
newButton.addEventListener("click", function () {
    newButton.textContent = "New Colors";
    gameStatus.textContent = "";
    document.querySelector("h1").style.backgroundColor = "steelblue";
    color = generateColor(numSquares);
    correctColor = pickColor();
    document.getElementById("colorPicked").textContent = correctColor;
    assignColor();

});

//When the right option is selected, then all the color of the boxes are changed
function changeBoxColor(Color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = Color;
        gameStatus.textContent = "Correct!";
        newButton.textContent = "Play Again!";
        document.querySelector("h1").style.backgroundColor = Color;
    }
}

//Selection of random color to be searched for
function pickColor() {
    var random = Math.floor(Math.random() * color.length);
    console.log("Color picked is: " + color[random]);
    return color[random];
}

//Selection of 6 random colors
function generateColor(squareNumber) {
    var arr = [];
    for (var i = 0; i < squareNumber; i++) {
        arr[i] = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
    }
    console.log(arr);
    return arr;
}

