'use strict'

// document.querySelector('.start').textContent 
// = '🎉 Correct Number!!';

// document.querySelector('.qm').textContent = 2004;
// document.querySelector('.score').textContent = 2010;

// document.querySelector('.guess').value = 2023;
// console.log(document.querySelector('.guess').value);

const number = Math.trunc(Math.random() * 20) + 
1;
let score =20;



document.querySelector('.bt').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    //No Input
    if(!guess) {
        document.querySelector('.start').textContent 
        = '⛔ No Number!!';

        //When Player wins
    }  else if(guess === number){
        document.querySelector('.start').textContent 
        = '🎉 Correct Number!!';

        document.querySelector('.qm').textContent = number;

        document.querySelector('body').style.background
        = '#60b347';

        document.querySelector('.qm').style.width 
        = 'bold';
        //Guess too high
    } else if(guess > number) {
        if(score > 0) {
            document.querySelector('.start').textContent 
        = '📈 Too high!!';
        score = score - 1;
        document.querySelector('.score').textContent
        = score;
        } else {
            document.querySelector('.start').textContent
            = '💥 You lost the Game!!'
        }
        document.querySelector('body').style.background
        = 'orange';
        // document.querySelector('.start').textContent 
        // = '📈 Too high!!';
        // score = score - 1;
        // document.querySelector('.score').textContent
        // = score;

        //Guess too low
    } else if(guess < number) {
        if(score > 0) {
            document.querySelector('.start').textContent 
        = '📉 Too Low!!';
        score = score - 1;
        document.querySelector('.score').textContent
        = score;
        } else {
            document.querySelector('.start').textContent
            = '💥 You lost the Game.!!'
        }
        document.querySelector('body').style.background
        = 'blue';
        // document.querySelector('.start').textContent
        // = '📉Too Low!!';
        // score = score - 1;
        // document.querySelector('.score').textContent
        // = score;
    }
});

document.querySelector('.btn').addEventListener(click, function(){
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.start').textContent 
 = '🎉 start Guessing!!';
  document.querySelector('.qm').textContent = '?';
  document.querySelector('.score').textContent = 'score';
  document.querySelector('.guess').value = '';
 document.querySelector('body').style.background
       = '#222';
})