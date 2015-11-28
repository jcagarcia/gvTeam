var DACactus = (function() {

	// Constructor de la clase cactus
	function DACactus(phaserGame, posX, posY, spriteLabel) {

		// Guardando game
		this.game = phaserGame;

		// Guardando posición inicial
		this.posX = posX;
		this.posY = posY;

		// Variable para guardar el cactus
		this.cactus = undefined;

		// Guardamos el spriteLabel a usar
		this.spriteLabel = spriteLabel;

		// Creamos el mobiliario
		this.createCactus();
	}

	/**
	* Método para crear el cactus
	*/
	DACactus.prototype.createCactus = function() {
		this.cactus = this.game.add.sprite(this.posX, this.posY, this.spriteLabel);

		this.cactus.enableBody = true;
		this.game.physics.arcade.enable(this.cactus);
	}

	/**
	* Método para obtener el sprite del cactus
	*/
	DACactus.prototype.getSprite = function() {
		return this.cactus;
	}

	return DACactus;

})();