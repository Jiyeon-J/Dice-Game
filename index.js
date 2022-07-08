let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const player1ScoreBoard = document.getElementById("player1ScoreBoard")
const player2ScoreBoard = document.getElementById("player2ScoreBoard")
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showResetButton() {
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
}

rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    if(player1Turn) {
        message.textContent = "✅Player 1 Turn";
        player1Dice.classList.add("active");
        player2Dice.classList.remove("active");
        player1Dice.textContent = randomNumber;
        player1Score += randomNumber;
        player1ScoreBoard.textContent = player1Score;
    } 
    
    else {
        message.textContent = "✅Player 2 Turn";
        player2Dice.classList.add("active");
        player1Dice.classList.remove("active");
        player2Dice.textContent = randomNumber;
        player2Score += randomNumber;
        player2ScoreBoard.textContent = player2Score;
    }

    player1Turn = !player1Turn

    if(player1Score >=20) {
        message.textContent = "Player 1 won🎉";
        showResetButton();
    } 
    else if(player2Score >=20) {
        message.textContent = "Player 2 won🎉";
        showResetButton();
    } 
    
})

function reset() {
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    player1Dice.textContent = "0";
    player2Dice.textContent = "0";
    player1ScoreBoard.textContent = "0";
    player2ScoreBoard.textContent = "0";
    rollBtn.style.display = "block";
    resetBtn.style.display = "none";
    message.textContent="✅Player 1 Turn";
}

resetBtn.addEventListener("click", reset) 

