import board from './board';
import boardColors from './boardColors';

const bet = {
    color: boardColors.red
};

let betIncrement = 1;
let betDecrement = 1;
let minimumBetAmount = 2;
let betAmount = 2;          // initialize bet
let balance = 100;
let numBets = 100;
let numWins = 0;
let numLosses = 0;

let i;
for (i = 0; i < numBets; i++) {
    balance = balance - betAmount;
    if (balance <= 0) {
        //console.log('Error: negative balannce');
        throw('Error: negative balance');
    }

    let spin = board[Math.floor(Math.random() * board.length)];
    //console.log('Bet Amount: ' + betAmount);
    console.log('Spin ' + (i+1) + ': bet amount -> ' + betAmount + ', result: ' + JSON.stringify(spin));
    if (spin.color === bet.color) {
        console.log('you win');
        numWins ++;
        balance += betAmount * 2;
        // decrease bet if won (upto the minimum bet about)
        if (betAmount > minimumBetAmount) {
            betAmount -= betDecrement;
            console.log('Reducing bet amount by ' + betDecrement + ', new bet amount: ' + betAmount);
        }
        console.log('Next bet amount: ' + betAmount);
    }
    else {
        console.log('you lose');
        numLosses ++;
        // increate bet if lost
        betAmount += betIncrement;
        console.log('Increasing bet amount by ' + betIncrement + ', new bet amount: ' + betAmount);
    }

    console.log('After spin ' + (i+1) +': balance -> ' + balance + ' , wins -> ' + numWins + ', losses -> ' + numLosses);
    console.log('_____________________________________________________________________________________________________');
}

console.log('Final balance: ' + balance + ' , wins: ' + numWins + ', losses: ' + numLosses);