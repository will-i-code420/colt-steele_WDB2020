const p1Btn = document.querySelector('#p1-btn');
const p2Btn = document.querySelector('#p2-btn');
const resetBtn = document.querySelector('#reset-btn');
const p1ScoreContainer = document.querySelector('#p1-score');
const p2ScoreContainer = document.querySelector('#p2-score');
let p1Score = 0;
let p2Score = 0;
let winScore = 5;
let isGameOver = false;

p1Btn.addEventListener('click', e => {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winScore) {
      isGameOver = true;
    }
    p1ScoreContainer.innerText = p1Score;
  }
})

p2Btn.addEventListener('click', e => {
  if (!isGameOver) {
    p2Score++;
    if (p2Score === winScore) {
      isGameOver = true;
    }
    p2ScoreContainer.innerText = p2Score;
  }
})

resetBtn.addEventListener('click', e => {
  p1Score = 0;
  p2Score = 0;
  p1ScoreContainer.innerText = p1Score;
  p2ScoreContainer.innerText = p2Score;
  isGameOver = false;
})
