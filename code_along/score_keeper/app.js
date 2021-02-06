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
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.innerText = p.score;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.btn.disabled = false;
  }
  isGameOver = false;
}
