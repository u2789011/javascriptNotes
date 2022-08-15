'use strict';
/*
//用.可以選到類別，用＃可以選到ID
console.log(document.querySelector('.message').textContent);

//DOM = 從document作為進入點選到網頁中的物件
//HTML內會有head跟body
//網頁是樹狀結構，往下有更多標籤可以選
//DOM其實不是JavaScript的一部分，DOM是一種Web APIs

//可以用JavaScript更新網頁上的字
document.querySelector('.message').textContent = 'Correct Number! 🎉';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 100;
document.querySelector('.guess').value = 23;

//可以拿到字也可以拿到值
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.guess').value);*/

//在app一開始的時候定義正確數字答案
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//把分數記下來
let score = 20; //state variable
let highScore = 0;

const displayMassege = function (message) {
  document.querySelector('.message').textContent = message;
};

//設定重玩按鈕
document.querySelector('.again').addEventListener('click', function () {
  //恢復分數
  score = 20;
  document.querySelector('.score').textContent = score;

  //重設正確答案
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //恢復訊息
  displayMassege('Start guessing...');
  //恢復數字問號
  document.querySelector('.number').textContent = '?';
  //恢復輸入框
  document.querySelector('.guess').value = '';
  //恢復背景顏色和框框大小
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//增加按鈕被按時的動作，寫一個function按下按鈕時執行回傳一個值
document.querySelector('.check').addEventListener('click', function () {
  //把輸入的value轉成number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //新增例外情況如果沒有值的話去改訊息
    displayMassege('No secretNumber... 🚫');
  } else if (guess === secretNumber) {
    //如果數字相等顯示數字正確的訊息
    displayMassege('Correct Number! 🎉');
    // document.querySelector('.message').textContent = 'Correct Number! 🎉';
    //顯示答案的謎底
    document.querySelector('.number').textContent = secretNumber;
    //把背景改成綠色
    document.querySelector('body').style.backgroundColor = '#60b347';
    //把字的外框寬度改大
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    //猜錯的時候
    if (score > 1) {
      //顯示太高或太低的提示
      displayMassege(guess > secretNumber ? 'Too high!' : 'Too low!');
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low!';
      //減少分數
      score--;
      //更新畫面顯示的分數
      document.querySelector('.score').textContent = score;
    } else {
      //如果分數從1變成0顯示輸
      displayMassege('You Lose!');
      // document.querySelector('.message').textContent = 'You Lose!';
      //把分數改成0
      document.querySelector('.score').textContent = 0;
    }
    // } else if (guess > secretNumber) {
    //   //確認分數還夠
    //   if (score > 1) {
    //     //顯示太高或太低的提示
    //     document.querySelector('.message').textContent = 'Too High!';
    //     //減少分數
    //     score--;
    //     //更新畫面顯示的分數
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     //如果分數從1變成0顯示輸
    //     document.querySelector('.message').textContent = 'You Lose!';
    //     //把分數改成0
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too Low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You Lose!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    //
  }
});
