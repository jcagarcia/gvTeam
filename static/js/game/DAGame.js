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

		// Creando diseñador
		this.createDesigner();
	}

	/**
	* Loop que actualizará el juego
	*/
	DAGame.prototype.update = function() {
	}

	/**
	* Método que crea un diseñador
	* TODO: Use asset
	*/
	DAGame.prototype.createDesigner = function() {
		var graphics = this.game.add.graphics(100, 100);
	    
	    // dibuja al diseñador
	    graphics.lineStyle(0);
	    graphics.beginFill(0xFFFF0B, 0.5);
	    graphics.drawCircle(0, 0, 50);
	    graphics.endFill();

	    window.graphics = graphics;
	}

	return DAGame;

})();