var DAGameOver = (function() {

	// Constructor de la clase DAInitial
	function DAGameOver (phaserGame) {

		// Creando el juego
		this.game = phaserGame;

		this.gameOverCreated = false;

	}

	/**
	* Método que inicializa el escenario básico del juego
	*/
	DAGameOver.prototype.init = function() {

		// Poniendo color de fondo
		this.game.stage.backgroundColor = "#857868";

		// Inicializando los controles de teclado
		this.cursors = phaserGame.input.keyboard.createCursorKeys();
	}

	/**
	* Método que carga los assets y recursos necesarios
	*/
	DAGameOver.prototype.preload = function() {
		this.game.load.image('game_over', 'static/assets/images/backgrounds/game_over.png');
	}

	/**
	* Método para crear el estado in¡cial del juego
	*/
	DAGameOver.prototype.create = function() {

    	// Creamos oficina
		this.office = new DAOffice(this.game);
		// Creamos el suelo de la oficina
		this.office.createFloor("floor_wood");

		this.img = this.game.add.sprite(GAME_WIDTH / 2 - 225, 100, "game_over");
		this.img.scale.setTo(0.8,0.8);

	}

	/**
	* Loop que actualizará el juego
	*/
	DAGameOver.prototype.update = function() {

		if(this.gameOverCreated == false) {
			this.gameOverCreated = true;
			this.create();
		}
		
	}


	return DAGameOver;

})();