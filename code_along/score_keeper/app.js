// animation for win
// best 2 of 3 or more games for same players

/* Global Variables */
let isGameOver = false;
let resetBtn;
const gameBtnsContainer = document.querySelector('#game-btns');
const scoreDisplay = document.querySelector('#score-display');
let winScoreOption = document.querySelector('#win-score');
let winScore = parseInt(winScoreOption.value);
let numOfPlayersOption = document.querySelector('#player-select');
let players = [];
createPlayers(numOfPlayersOption.value);




function createPlayers(numOfPlayers) {
  // remove previous btns
  while (gameBtnsContainer.firstChild) {
    gameBtnsContainer.removeChild(gameBtnsContainer.firstChild);
  }

  // remove previous score span tags
  while (scoreDisplay.firstChild) {
    scoreDisplay.removeChild(scoreDisplay.firstChild);
  }

  players = [];

  for (let i = 0; i < numOfPlayers; i++) {
    let newPlayer = {
      score: 0,
      btn: createBtn('player', i),
      display: createScoreBoard(i, numOfPlayers)
    };
    players.push(newPlayer);
  }
  createBtn('reset');
};

function createScoreBoard(player, totalPlayers) {
  let span = document.createElement('span');
  span.id = `player${player + 1}-display`;
  span.innerText = '0';
  if (player === totalPlayers - 1) {
    scoreDisplay.append(span);
  } else {
    scoreDisplay.append(span);
    scoreDisplay.append(' to ');
  }
  return document.querySelector(`#player${player + 1}-display`)
};

function createBtn(type, playerNum) {
  const btnColors = ['is-primary', 'is-info', 'is-success', 'is-link'];
  let newBtn = document.createElement('button');
  if (type === 'reset') {
    newBtn.id = `reset-btn`;
    newBtn.onclick = resetGame;
    newBtn.classList.add('button', 'is-large', 'is-danger', 'card-footer-item');
    newBtn.innerText = 'Reset';
    gameBtnsContainer.append(newBtn);
    resetBtn = document.querySelector('#reset-btn');
    return
  }
  newBtn.id = `player${playerNum + 1}-btn`;
  newBtn.onclick = updateScores;
  newBtn.classList.add('button', 'is-large', `${btnColors[playerNum]}`, 'card-footer-item');
  newBtn.innerText = `Player ${playerNum + 1} +1`;
  gameBtnsContainer.append(newBtn);
  return document.querySelector(`#player${playerNum + 1}-btn`);
};

function updateScores(e) {
  const regex = /[0-9]/g;
  const playerId = e.target.id.match(regex);
  let opponentIds = [];
  let opponentScores = [];
  for (let i = 0; i < players.length; i++) {
    if (i + 1 != playerId) {
      opponentIds.push(parseInt(players[i].btn.id.match(regex)) - 1);
      opponentScores.push(players[i].score);
    }
  }
  if (!isGameOver) {
    players[playerId - 1].score++;
    if (players[playerId - 1].score === winScore && winByTwo(players[playerId - 1].score, opponentScores)) {
      isGameOver = true;
      players[playerId - 1].btn.disabled = true;
      players[playerId - 1].display.classList.add('has-text-success');
      for (let opponent in opponentIds) {
        players[opponentIds[opponent]].btn.disabled = true;
        players[opponentIds[opponent]].display.classList.add('has-text-danger');
      }
    }
  }
  players[playerId - 1].display.innerText = players[playerId - 1].score;
};

function winByTwo(playerScore, opponentScores) {
  let defeatList = [];
  let wonByTwo;
  for (let i = 0; i < opponentScores.length; i++) {
    if (opponentScores[i] + 1 === playerScore) {
      defeatList.push(false);
    } else {
      defeatList.push(true);
    }
  }
  if (defeatList.includes(false)) {
    winScore++;
    return false
  }
  return true
};

winScoreOption.addEventListener('change', e => {
  winScore = parseInt(e.target.value);
  resetGame();
});

numOfPlayersOption.addEventListener('change', e => {
  numOfPlayers = parseInt(e.target.value);
  createPlayers(numOfPlayers);
  resetGame();
});

resetBtn.addEventListener('click', resetGame);

function resetGame() {
  for (let player of [...players]) {
    player.score = 0;
    player.display.innerText = player.score;
    player.display.classList.remove('has-text-success', 'has-text-danger');
    player.btn.disabled = false;
  }
  isGameOver = false;
}
