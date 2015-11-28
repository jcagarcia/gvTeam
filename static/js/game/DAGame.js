var DAGame = (function() {

	// Constructor de la clase DAGame
	function DAGame (phaserGame) {
		// Inicializamos nivel 1
		this.level1 = new DALevel1(phaserGame);
	}

	/**
	* Método que inicializa el escenario básico del juego
	*/
	DAGame.prototype.init = function() {
		this.level1.init();
	}

	/**
	* Método que carga los assets y recursos necesarios
	*/
	DAGame.prototype.preload = function() {
		this.level1.preload();
	}

	/**
	* Método para crear el estado in¡cial del juego
	*/
	DAGame.prototype.create = function() {
		this.level1.create();
	}

	/**
	* Loop que actualizará el juego
	*/
	DAGame.prototype.update = function() {
		this.level1.update();
	}

	return DAGame;

})();