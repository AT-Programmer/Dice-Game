var activeplayer,dice,roundscore,score,gamePlaying;

reset();

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click',function(){

if(gamePlaying){
		dice = Math.floor(Math.random() * 6) + 1;
	roundscore = roundscore + dice;


	if (dice != 1){
	document.querySelector('#current-' + activeplayer).textContent = roundscore;  
	var dicedom = document.querySelector('.dice').src = 'dice-' + dice + '.png' 
	
	document.querySelector('.dice').style.display = 'block'}
	else{
		nextPlayer();
	}
}

})
function nextPlayer(){
if(gamePlaying){
	if(activeplayer == 0){
		activeplayer = 1;
	}
	else{
		activeplayer = 0;
	}
		document.querySelector('#current-0').textContent = "0";
	document.querySelector('#current-1').textContent = "0";
	roundscore = 0;

document.querySelector('.dice').style.display = 'none';
document.querySelector('.player-0-panel').classList.toggle('active')
document.querySelector('.player-1-panel').classList.toggle('active')
}
}

document.querySelector('.btn-hold').addEventListener('click',function(){
if(gamePlaying){	
	score[activeplayer] += roundscore
 document.querySelector('#score-' + activeplayer).textContent = score[activeplayer];
 nextPlayer();
}
 if(score[activeplayer] >= 100){
 	document.querySelector('#name-' + activeplayer).textContent = "Winner!"
 	document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner')
 	document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active')
  	gamePlaying = false;



  }
})

document.querySelector('.btn-new').addEventListener('click',reset)





function reset(){
	activeplayer = 0;
	dice = 0;
	roundscore = 0;
	score = [0,0];
	gamePlaying = true;
	document.querySelector('.dice').style.display = 'none';


	document.querySelector('#score-0').textContent = "0";
	document.querySelector('#score-1').textContent = "0";
	document.querySelector('#current-0').textContent = "0";
	document.querySelector('#current-1').textContent = "0";
	document.querySelector('#name-0').textContent = "Player 1"
	document.querySelector('#name-1').textContent = "Player 2"
	document.querySelector('.player-' + activeplayer + '-panel').classList.add('active')
}