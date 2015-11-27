var DAGame = (function() {

	// Constructor de la clase DAGame
	function DAGame (phaserGame) {

		// Creando el juego
		this.game = phaserGame;
	}

	/**
	* Método que inicializa el escenario básico del juego
	*/
	DAGame.prototype.init = function() {

		// Setting background color
		this.game.stage.backgroundColor = "#857868";
	}

	/**
	* Método que carga los assets y recursos necesarios
	*/
	DAGame.prototype.preload = function() {
	}

	/**
	* Método para crear el estado in¡cial del juego
	*/
	DAGame.prototype.create = function() {
	}


	/**
	* Loop que actualizará el juego
	*/
	DAGame.prototype.update = function() {
	}

	return DAGame;

})();