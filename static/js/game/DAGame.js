var DAGame = (function() {

	// Constructor de la clase DAGame
	function DAGame (phaserGame) {
		// Inicializamos nivel 1
		this.currentLevel = 0;

		this.arrLevels = [];

		this.arrLevels.push(new DALevel1(phaserGame));
		this.arrLevels.push(new DALevel2(phaserGame));
	}

	/**
	* Método que inicializa el escenario básico del juego
	*/
	DAGame.prototype.init = function() {
		this.arrLevels[this.currentLevel].init();
	}

	/**
	* Método que carga los assets y recursos necesarios
	*/
	DAGame.prototype.preload = function() {
		this.arrLevels[this.currentLevel].preload();
	}

	/**
	* Método para crear el estado in¡cial del juego
	*/
	DAGame.prototype.create = function() {
		this.arrLevels[this.currentLevel].create();
	}

	/**
	* Loop que actualizará el juego
	*/
	DAGame.prototype.update = function() {
		this.arrLevels[this.currentLevel].update();
	}

	return DAGame;

})();