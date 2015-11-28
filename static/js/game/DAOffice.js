var DAOffice = (function() {

	// Constructor de la clase oficina
	function DAOffice(phaserGame) {

		// Guardando game
		this.game = phaserGame;

		// Variable para guardar la puerta
		this.door = undefined;

	}
	/**
	* Método para crear suelo
	*/
	DAOffice.prototype.createFloor = function(spriteLabel) {
		var floorWidth = 0;
		var floorHeight = 0;
		while(floorWidth < GAME_WIDTH){

			floorHeight = 0;

			while(floorHeight < GAME_HEIGHT) {
				this.game.add.sprite(floorWidth, floorHeight, spriteLabel);
				floorHeight += 32;
			}
			
			floorWidth += 32;
		}
	}

	/**
	* Método para crear el fondo
	*/
	DAOffice.prototype.createBackground = function(spriteLabel) {
		this.background = this.game.add.sprite(0, 0, spriteLabel);
		this.background.scale.setTo(2,2);

		this.background.enableBody = true;
		this.game.physics.arcade.enable(this.background);

		this.background2 = this.game.add.sprite(this.background.width - 40, 0, spriteLabel);
		this.background2.scale.setTo(2,2);
		
		this.background2.enableBody = true;
		this.game.physics.arcade.enable(this.background2);
	}

	/**
	* Método para crear la puerta de salida
	*/
	DAOffice.prototype.createExitDoor = function(posX, posY) {

		this.door = this.game.add.sprite(posX, posY, 'door_1');
		this.door.scale.setTo(3,3);

		this.door.enableBody = true;
		this.game.physics.arcade.enable(this.door);

	    return this.door;
		
	}

	return DAOffice;

})();