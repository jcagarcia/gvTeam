var DADeveloper = (function() {

	// Constructor de la clase developer
	function DADeveloper(phaserGame, posX, posY) {

		// Guardando game
		this.game = phaserGame;

		// Guardamos la posicion original
		this.posX = posX;
		this.posY = posY;

		this.developer = phaserGame.add.graphics(100, 100);
	    
	    // dibuja al developer
	    this.developer.lineStyle(0);
	    this.developer.beginFill(0xDD0029, 0.8);
	    this.developer.drawCircle(posX, posY, 50);
	    this.developer.endFill();

	    window.graphics = this.developer;
	}


	return DADeveloper;

})();