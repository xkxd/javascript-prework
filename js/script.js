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
