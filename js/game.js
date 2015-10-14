$(document).ready(function() {
    // The world is yours to explore!
    GAME.candies = 0;
    GAME.candiesEaten = 0;
    GAME.lolipops = 0;
    GAME.redraw();

    setInterval(GAME.getMoreCandies, 750);
    setInterval(GAME.redraw, 500);
    
    
    GAME.addButton('candies-eaten', 'Eat All Candies', GAME.eatAllCandies);
    GAME.enableButton('candies-eaten');
    GAME.addButton('lolipops-made', 'Transfer Candies to Lolipops', GAME.transferCandyLolipops);
    GAME.disableButton('lolipops-made');

});

//Adds candies, needs a setinterval to function properly
GAME.getMoreCandies = function() {
	GAME.candies = GAME.candies + 1;
}

GAME.transferCandyLolipops = function(){
	GAME.lolipops += 1;
	GAME.candies -= 10;
}

//Function that eats all the canides
GAME.eatAllCandies = function(){
	GAME.candiesEaten = GAME.candiesEaten + GAME.candies;
	GAME.candies = 0;
	GAME.setText('candies-eaten','You have eaten' + candies);
}
//Function that sets all the text in the game
GAME.setAllText = function(){
	GAME.setText('candy-counter', 'You have ' + GAME.candies + " candies.");
	
	//If Statement that sets candies-eaten-text-box.
	if(GAME.candiesEaten > 0 && GAME.candiesEaten < 10){
		GAME.setText('candies-eaten-text-box', 'You have eaten ' + GAME.candiesEaten + ' candies.');
	}else if(GAME.candiesEaten >= 10 && GAME.candiesEaten < 100){
		GAME.setText('candies-eaten-text-box', 'You have eaten '+ GAME.candiesEaten + ' candies. :)');
	}else if(GAME.candiesEaten >= 100 && GAME.candiesEaten < 1000){
		GAME.setText('candies-eaten-text-box', 'You have eaten '+ GAME.candiesEaten + ' candies. :>');
	}else if(GAME.candiesEaten >= 1000){
		GAME.setText('candies-eaten-text-box', 'You have eaten '+ GAME.candiesEaten +' candies. Y u so fat?');
	}
	GAME.setText('','You have ' + GAME.lolipops + 'lolipops');

	//If Statement that disables eat candies button if number of canides is less than or equal to 0.
	if(GAME.candies <= 0){
    	GAME.disableButton('candies-eaten');
    }else{
    	GAME.enableButton('candies-eaten');
    }

    if(GAME.candies > 10){
		GAME.enableButton('lolipops-made');
	}
}

GAME.redraw = function(){
	GAME.setAllText();
}

