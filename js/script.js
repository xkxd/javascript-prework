let randomFraction = Math.random();

printMessage('Wylosowany ułamek to: ' + randomFraction);

let calculation = randomFraction * 3 + 1;

printMessage('Ułamek pomnożony przez 3 i powiększony o 1: ' + calculation);

let roundNumber = Math.floor(calculation);

printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);

if(1 < 2){
  printMessage('Super! Papier owinął kamień');
} else if (1 > 2) {
  printMessage('Przegrywasz! Spróbuj jeszcze raz!');
}

if(1 < 3){
  printMessage('O nie! Nożyce się stępiły!');
} else if (1 > 3) {
  printMessage('Super! Wygrywasz!');
}

let computerMove = `papier`;

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

printMessage('Twój ruch to: ' + playerMove);

if(1 < 2){
  printMessage('Super! Papier owinął kamień');
} else if (1 > 2) {
  printMessage('Przegrywasz! Spróbuj jeszcze raz!');
}

if(1 < 3){
  printMessage('O nie! Nożyce się stępiły!');
} else if (1 > 3) {
  printMessage('Super! Wygrywasz!');
}
