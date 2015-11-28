var DAGame = (function() {

	// Constructor de la clase DAGame
	function DAGame (phaserGame) {
		this.arrLevels = [];

		this.arrLevels.push(new DAInitial(phaserGame));
		this.arrLevels.push(new DALevel1(phaserGame));
		this.arrLevels.push(new DALevel2(phaserGame));
		this.arrLevels.push(new DAGameOver(phaserGame));
		this.arrLevels.push(new DAFinishGame(phaserGame));
	}

	/**
	* Método que inicializa el escenario básico del juego
	*/
	DAGame.prototype.init = function() {
		for(i in this.arrLevels) {
			var level = this.arrLevels[i];
			level.init();
		}
	}

	/**
	* Método que carga los assets y recursos necesarios
	*/
	DAGame.prototype.preload = function() {
		for(i in this.arrLevels) {
			var level = this.arrLevels[i];
			level.preload();
		}
	}

	/**
	* Método para crear el estado in¡cial del juego
	*/
	DAGame.prototype.create = function() {
		this.arrLevels[GAME_LEVEL].create();
	}

	/**
	* Loop que actualizará el juego
	*/
	DAGame.prototype.update = function() {
		this.arrLevels[GAME_LEVEL].update();
	}

	return DAGame;

})();