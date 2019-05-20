import board from './board';
import boardColors from './boardColors';
import colors from 'colors';

let minimumBetAmount = 2;
//let betAmountRed = 2;          // initialize bet
//let betAmountBlack = 2;
let balance = 200;
let maxBetAmount = 128;
let maxBalanceReached = balance;
//let minimumBalance = 10;
let numBets = 100;

let betRed = {
    color: boardColors.red,
    amount: minimumBetAmount 
};

const betBlack = {
    color: boardColors.black,
    amount: minimumBetAmount
};

let i;
for (i = 0; i < numBets; i++) {
// while(balance < targetBalance && i < maxBets && balance >= minimumBalance) {
    let displayMessage = `[[ Spin `+(i+1)+` ]]`;
    console.log(displayMessage.yellow);
    
    if ( (betRed.amount + betBlack.amount) > balance) {
        // throw('Error: not enough balance to place bet for, available balance: ' + balance);
        
        /*
        let message = '******Not enough balance to place bet for ' + betAmount + ', ';
        message += 'available balance: ' + balance + '******';
        console.log(message.red);
        console.log('******Setting bet amount to: ' + minimumBetAmount + '*******');
        betAmount = minimumBetAmount;
        */
       console.log('****Error: not enough balance to place bet for, available balance: ' + balance + '***');
       if (balance >= 2 * minimumBetAmount) {
           // reset both to minimum amount
           betRed.amount = minimumBetAmount;
           betBlack.amount = minimumBetAmount;
       }
       else {
           let error = 'Failed allocating minimum amount to both red and black. Max balance reached: ' + maxBalanceReached; 
           throw(error);
       }
    }
    // update balance after placing bet
    balance = balance - (betRed.amount + betBlack.amount);
    let spin = board[Math.floor(Math.random() * board.length)];

    console.log('Balance before spin: ' + balance + '. Bet amount Red: ' + betRed.amount + '. Bet amount Black: ' + betBlack.amount);
    console.log('Result: ' + JSON.stringify(spin));

    if (spin.color === betRed.color) {
        console.log('You win on Red'.green);
        balance += (betRed.amount * 2);
        // set betAmount to minimumBetAmount if won
        betRed.amount = minimumBetAmount;
        console.log('Next bet amount for Red: ' + betRed.amount);
    }
    else {
        console.log('you lose on Red'.red);
        // double the bet amount
        betRed.amount = betRed.amount * 2;
        if (betRed.amount > maxBetAmount) {
            // reset to minimum amount if max amount is reached
            betRed.amount = minimumBetAmount;
        }
        console.log('Doubling the bet amount on Red. New bet amount: ' + betRed.amount);
    }

    if (spin.color === betBlack.color) {
        console.log('You win on Black'.green);
        balance += (betBlack.amount * 2);
        // set betAmount to minimumBetAmount if won
        betBlack.amount = minimumBetAmount;
        console.log('Next bet amount for Black: ' + betBlack.amount);
    }
    else {
        console.log('you lose on Black'.red);
        // double the bet amount
        betBlack.amount = betBlack.amount * 2;
        if (betBlack.amount > maxBetAmount) {
            betBlack.amount = minimumBetAmount;
        }
        console.log('Doubling the bet amount on Black. New bet amount: ' + betBlack.amount);
    }
    if (balance >= maxBalanceReached) {
        maxBalanceReached = balance;
    }
    console.log('After spin ' + (i+1) +': balance -> ' + balance);
    console.log('_____________________________________________________________________________________________________');
}

//console.log('Num iterations: ' + i);
console.log('Final balance: ' + balance);
console.log('Max balance reached: ' + maxBalanceReached);