'use strict';

// 把element先選起來放
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const cuttent1El = document.getElementById('current--1');
//設定初始狀態
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const swithchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//擲出骰子
btnRoll.addEventListener('click', function () {
  if (playing) {
    //產生隨機數字
    const dice = Math.trunc(Math.random() * 6) + 1;
    //顯示骰子
    diceEl.classList.remove('hidden');
    //依據擲出的數字改圖片顯示
    diceEl.src = `dice-${dice}.png`;
    //確認數字不是一（是一的話要換人）
    if (dice !== 1) {
      //增加擲出的數字到分數
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //換人
      swithchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //把目前的直到的數字加入總分
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore
    //確認總分有沒有滿一百
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //滿一百的話結束遊戲
    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    }
    //沒滿的話換人
    swithchPlayer();
  }
});

btnNew.addEventListener('click', function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
});
