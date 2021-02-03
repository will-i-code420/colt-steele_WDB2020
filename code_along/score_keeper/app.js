const p1Btn = document.querySelector('#p1-btn');
const p2Btn = document.querySelector('#p2-btn');
const resetBtn = document.querySelector('#reset-btn');
const p1ScoreContainer = document.querySelector('#p1-score');
const p2ScoreContainer = document.querySelector('#p2-score');
let p1Score = 0;
let p2Score = 0;
const maxScore = 5;

p1Btn.addEventListener('click', e => {
  p1Score++;
  p1ScoreContainer.innerText = p1Score;
  if (p1Score === maxScore) {
    p1Btn.disabled = true;
  }
})

p2Btn.addEventListener('click', e => {
  p2Score++;
  p2ScoreContainer.innerText = p2Score;
  if (p2Score === maxScore) {
    p2Btn.disabled = true;
  }
})

resetBtn.addEventListener('click', e => {
  p1Score = 0;
  p2Score = 0;
  p1ScoreContainer.innerText = p1Score;
  p2ScoreContainer.innerText = p2Score;
  p1Btn.disabled = false;
  p2Btn.disabled = false;
})
