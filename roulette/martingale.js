import board from './board';
import boardColors from './boardColors';
import colors from 'colors';

const bet = {
    color: boardColors.red
};

let minimumBetAmount = 2;
let betAmount = 2;          // initialize bet
let balance = 100;
let minimumBalance = 10;
let numBets = 100;
let numWins = 0;
let numLosses = 0;
let targetBalance = 150;

let maxBets = 200;
let i=0;
// for (i = 0; i < numBets; i++) {
while(balance < targetBalance && i < maxBets && balance >= minimumBalance) {
    let displayMessage = `[[ Spin `+(i+1)+` ]]`;
    console.log(displayMessage.yellow);
    if (betAmount > balance && balance > minimumBetAmount) {
        // throw('Error: not enough balance to place bet for ' + betAmount + ', available balance: ' + balance);
        
        let message = '******Not enough balance to place bet for ' + betAmount + ', ';
        message += 'available balance: ' + balance + '******';
        console.log(message.red);
        console.log('******Setting bet amount to: ' + minimumBetAmount + '*******');
        betAmount = minimumBetAmount;
    }

    balance = balance - betAmount;
    let spin = board[Math.floor(Math.random() * board.length)];

    console.log('Balance before spin: ' + balance + '. Bet Amount: ' + betAmount);
    console.log('Result: ' + JSON.stringify(spin));
    if (spin.color === bet.color) {
        console.log('you win'.green);
        numWins ++;
        balance += (betAmount * 2);
        // set betAmount to minimumBetAmount if won
        betAmount = minimumBetAmount;
        console.log('Next bet amount: ' + betAmount);
    }
    else {
        console.log('you lose'.red);
        numLosses ++;
        // double the bet amount
        betAmount = betAmount * 2;
        console.log('Doubling the bet amount. New bet amount: ' + betAmount);
    }

    console.log('After spin ' + (i+1) +': balance -> ' + balance + ' , wins -> ' + numWins + ', losses -> ' + numLosses);
    console.log('_____________________________________________________________________________________________________');
    i++;
}

console.log('Num iterations: ' + i);
console.log('Final balance: ' + balance + ' , wins: ' + numWins + ', losses: ' + numLosses);