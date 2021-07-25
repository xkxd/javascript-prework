{
const playGame = function (playerInput) {
clearMessages();

const getMoveName = function(argMoveId){
if(argMoveId == 1){
return 'kamień';
} else if(argMoveId == 2){
return 'papier';
} else if(argMoveId == 3){
return 'nożyce';
  }
}
function displayResult(argComputerMove, argPlayerMove){
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

let randomNumber = Math.floor(Math.random() * 3 + 1);
const computerMove = getMoveName(randomNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
const playerMove = getMoveName(playerInput);

displayResult(computerMove, PlayerMove)
}
  document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1)('Zagrałeś kamień');
  });
  document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2)('Zagrałeś papier');
  });
  document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3)('Zagrałeś nożyce');
  });
}
