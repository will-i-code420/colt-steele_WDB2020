const p1 = {
  score: 0,
  btn: document.querySelector('#p1-btn');,
  display: document.querySelector('#p1-score');
};

const p2 = {
  score: 0,
  btn: document.querySelector('#p2-btn');,
  display: document.querySelector('#p2-score');
};

const resetBtn = document.querySelector('#reset-btn');
let winScoreOption = document.querySelector('#win-score');
let winScore = parseInt(winScoreOption.value);
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score++;
    if (player.score === winScore) {
      isGameOver = true;
      player.btn.disabled = true;
      opponent.btn.disabled = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
    }
    player.display.innerText = p1Score;
  }
};

winScoreOption.addEventListener('change', e => {
  winScore = parseInt(e.target.value);
  resetGame();
});

p1.btn.addEventListener('click', e => {
  updateScores(p1, p2);
})

p2.btn.addEventListener('click', e => {
  updateScores(p2, p1);
})

resetBtn.addEventListener('click', resetGame);

function resetGame() {
  p1.score = 0;
  p2.score = 0;
  p1.display.innerText = p1.score;
  p2.display.innerText = p2.score;
  p1.display.classList.remove('has-text-success', 'has-text-danger');
  p2.display.classList.remove('has-text-success', 'has-text-danger');
  isGameOver = false;
  p1.btn.disabled = false;
  p2.btn.disabled = false;
}
