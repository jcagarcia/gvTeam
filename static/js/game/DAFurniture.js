var DAFurniture = (function() {

	// Constructor de la clase mobiliario
	function DAFurniture(phaserGame, posX, posY, spriteLabel) {

		// Guardando game
		this.game = phaserGame;

		// Guardando posición inicial
		this.posX = posX;
		this.posY = posY;

		// Variable para guardar el mobiliario
		this.furniture = undefined;

		// Guardamos el spriteLabel a usar
		this.spriteLabel = spriteLabel;

		// Creamos el mobiliario
		this.createFurniture();
	}

	/**
	* Método para crear el mobiliario
	*/
	DAFurniture.prototype.createFurniture = function() {
		this.furniture = this.game.add.sprite(this.posX, this.posY, this.spriteLabel);
		this.furniture.scale.setTo(2,2);
		this.game.physics.arcade.enable(this.furniture);
		this.furniture.enableBody = true;
		this.furniture.body.collideWorldBounds = true;
		this.furniture.body.immovable = true;

	}

	/**
	* Método para obtener el sprite del furniture
	*/
	DAFurniture.prototype.getSprite = function() {
		return this.furniture;
	}

	return DAFurniture;

})();