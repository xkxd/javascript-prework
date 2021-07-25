function getMoveName (argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
  else if (argMoveId == 2){
    return 'papier';
  }
  else if (argMoveId == 3){
    return 'nożyce';
  }
  else {
    printMessage('Nie znam ruchu o id' + argMoveId + '.');
    return 'nieznany ruch';
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
console.log('playerMove: ' +playerMove);

function displayResult(argComputerMove, argPlayerMove){
    argComputerMove = computerMove;
    argPlayerMove = playerMove;
    printMessage('Ruch komputera to: ' + argComputerMove);
    printMessage('Twój ruch to: ' + argPlayerMove);

console.log('moves:'+ argComputerMove,  argPlayerMove);

if(argPlayerMove == 'Nieznany ruch'){
  printMessage('Nieznany ruch');
  }
else if ( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
  printMessage('Ty wygrywasz!');
  }
else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
  printMessage('Przegrywasz!');
  }
else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
  printMessage('Remis!');
  }
else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
  }
else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
  printMessage('Przegrywasz!');
  }
else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
  printMessage('Remis!');
  }
else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
  }
else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
  printMessage('Przegrywasz!');
  }
else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
  printMessage('Remis!');
  }
}
displayResult(computerMove, playerMove);
console.log('Gracz wpisał: ' + playerInput);
console.log('PlayerMove: ' + playerMove);
