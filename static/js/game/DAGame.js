var DAGame = (function() {

	// Constructor de la clase DAGame
	function DAGame (phaserGame) {

		// Creando el juego
		this.game = phaserGame;

		// Creando variable para el diseñador
		this.designer = undefined;
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
		this.designer = this.game.add.graphics(100, 100);
	    
	    // dibuja al diseñador
	    this.designer.lineStyle(0);
	    this.designer.beginFill(0xFFFF0B, 0.5);
	    this.designer.drawCircle(0, 0, 50);
	    this.designer.endFill();

	    window.graphics = this.designer;
	}

	return DAGame;

})();