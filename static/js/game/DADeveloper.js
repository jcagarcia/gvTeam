var DADeveloper = (function() {

	// Constructor de la clase developer
	function DADeveloper(phaserGame, posX, posY, spritSheetLabel) {

		// Guardando game
		this.game = phaserGame;

		// Guardamos la posicion original
		this.posX = posX;
		this.posY = posY;

		// Guardamos el spritSheet
		this.spritSheetLabel = spritSheetLabel;

		// Generando programador
		this.createDeveloper();

	}

	/**
	* Método para crear el developer utilizando un sprite
	*/
	DADeveloper.prototype.createDeveloper = function(){
		this.developer = this.game.add.sprite(this.posX, this.posY, this.spritSheetLabel);
		this.developer.scale.setTo(2,2);

		// Añadimos animaciones
		this.developer.animations.add("up", [0,1,2,3], 10, true);
		this.developer.animations.add("right", [4,5,6,7], 10, true);
		this.developer.animations.add("left", [8,9,10,11], 10, true);
		this.developer.animations.add("down", [12,13,14,15], 10, true);

	}


	return DADeveloper;

})();