var DAOffice = (function() {

	// Constructor de la clase oficina
	function DAOffice(phaserGame) {

		// Guardando game
		this.game = phaserGame;

	}


	/**
	* Método para crear suelo
	*/
	DAOffice.prototype.createFloor = function() {
		var floorWidth = 0;
		var floorHeight = 0;
		while(floorWidth < GAME_WIDTH){

			floorHeight = 0;

			while(floorHeight < GAME_HEIGHT) {
				this.game.add.sprite(floorWidth, floorHeight, 'floor_wood');
				floorHeight += 32;
			}
			
			floorWidth += 32;
		}
	}

	return DAOffice;

})();