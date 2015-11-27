var DAFurniture = (function() {

	// Constructor de la clase mobiliario
	function DAFurniture(phaserGame, posX, posY) {

		// Guardando game
		this.game = phaserGame;

		// Guardando posición inicial
		this.posX = posX;
		this.posY = posY;

		// TODO: Crear mobiliario usando assets

		this.furniture = phaserGame.add.graphics(100, 100);
	    
	    // dibuja al mobiliario
	    this.furniture.lineStyle(0);
	    this.furniture.beginFill(0xEAD4A5, 1);
	    this.furniture.drawCircle(this.posX, this.posY, 50);
	    this.furniture.endFill();

	    window.graphics = this.furniture;
	}

	return DAFurniture;

})();