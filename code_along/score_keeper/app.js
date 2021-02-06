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

winScoreOption.addEventListener('change', e => {
  winScore = parseInt(e.target.value);
  resetGame();
});

p1Btn.addEventListener('click', e => {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winScore) {
      isGameOver = true;
      p1Btn.disabled = true;
      p2Btn.disabled = true;
      p1ScoreContainer.classList.add('has-text-success');
      p2ScoreContainer.classList.add('has-text-danger');
    }
    p1ScoreContainer.innerText = p1Score;
  }
})

p2Btn.addEventListener('click', e => {
  if (!isGameOver) {
    p2Score++;
    if (p2Score === winScore) {
      isGameOver = true;
      p1Btn.disabled = true;
      p2Btn.disabled = true;
      p1ScoreContainer.classList.add('has-text-danger');
      p2ScoreContainer.classList.add('has-text-success');
    }
    p2ScoreContainer.innerText = p2Score;
  }
})

resetBtn.addEventListener('click', resetGame);

function resetGame() {
  p1Score = 0;
  p2Score = 0;
  p1ScoreContainer.innerText = p1Score;
  p2ScoreContainer.innerText = p2Score;
  p1ScoreContainer.classList.remove('has-text-success', 'has-text-danger');
  p2ScoreContainer.classList.remove('has-text-success', 'has-text-danger');
  isGameOver = false;
  p1Btn.disabled = false;
  p2Btn.disabled = false;
}
