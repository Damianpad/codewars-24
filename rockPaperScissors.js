/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

P:
string: input1
string: input2

Return:
string
Player 1 won!
Player 2 won!
Draw!

E:
"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

P:

*/

const rps = (p1, p2) => {
  if(p1 === p2){
    return "Draw!"
  } else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
) {
    return "Player 1 won!";
} else {
    return "Player 2 won!";
}
};