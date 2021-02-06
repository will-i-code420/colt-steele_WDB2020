// add more players
// animation for win
// best 2 of 3 or more games for same players

const player1 = {
  score: 0,
  btn: document.querySelector('#p1-btn'),
  display: document.querySelector('#p1-score')
};

const player2 = {
  score: 0,
  btn: document.querySelector('#p2-btn'),
  display: document.querySelector('#p2-score')
};

const resetBtn = document.querySelector('#reset-btn');
let winScoreOption = document.querySelector('#win-score');
let winScore = parseInt(winScoreOption.value);
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score++;
    if (player.score === winScore && winByTwo(player, opponent)) {
      isGameOver = true;
      player.btn.disabled = true;
      opponent.btn.disabled = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
    }
    player.display.innerText = player.score;
  }
};

function winByTwo(player, opponent) {
  if (opponent.score + 1 === player.score) {
    winScore++;
    return false;
  }
  return true;
};

winScoreOption.addEventListener('change', e => {
  winScore = parseInt(e.target.value);
  resetGame();
});

player1.btn.addEventListener('click', e => {
  updateScores(player1, player2);
})

player2.btn.addEventListener('click', e => {
  updateScores(player2, player1);
})

resetBtn.addEventListener('click', resetGame);

function resetGame() {
  for (let p of [player1, player2]) {
    p.score = 0;
    p.display.innerText = p.score;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.btn.disabled = false;
  }
  isGameOver = false;
}
