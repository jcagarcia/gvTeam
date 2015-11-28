var DAFinishGame = (function() {

	// Constructor de la clase DAFinishGame
	function DAFinishGame (phaserGame) {

		// Creando el juego
		this.game = phaserGame;

		this.gameFinished = false;

	}

	/**
	* Método que inicializa el escenario básico del juego
	*/
	DAFinishGame.prototype.init = function() {

		// Poniendo color de fondo
		this.game.stage.backgroundColor = "#857868";

		// Inicializando los controles de teclado
		this.cursors = phaserGame.input.keyboard.createCursorKeys();
	}

	/**
	* Método que carga los assets y recursos necesarios
	*/
	DAFinishGame.prototype.preload = function() {
		this.game.load.image('win', 'static/assets/images/backgrounds/you_win.png');
	}

	/**
	* Método para crear el estado in¡cial del juego
	*/
	DAFinishGame.prototype.create = function() {
		// Creamos oficina
		this.office = new DAOffice(this.game);
		// Creamos el suelo de la oficina
		this.office.createFloor("floor_wood");

		this.img = this.game.add.sprite(GAME_WIDTH / 2 - 225, 100, "win");
	}

	/**
	* Loop que actualizará el juego
	*/
	DAFinishGame.prototype.update = function() {
		
		if (!this.gameFinished) {
			this.gameFinished = true;
			this.create();
		}
	}

	return DAFinishGame;

})();