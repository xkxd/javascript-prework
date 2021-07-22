let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'papier';

if(randomNumber == 1){
  computerMove = 'kamień';
}
else if (1 < 2) {
	printMessage('Super! Papier owinął kamień!');
}
else if (1 < 3){
	printMessage('Przegrywasz! Twoje nożyce się stępiły!');
}

printMessage('Mój ruch to: ' + computerMove);

let computerMove = `papier`
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

if(playerInput == '2'){
  playerMove = 'papier';
}

if(playerInput == '3'){
  playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);
