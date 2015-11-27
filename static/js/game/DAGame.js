var DAGame = (function() {

	// Constructor de la clase DAGame
	function DAGame (phaserGame) {

		// Creando el juego
		this.game = phaserGame;

		// Creando variable para el diseñador
		this.designer = undefined;

		// Creando array de programadores
		this.arrDevelopers = [];
	}

	/**
	* Método que inicializa el escenario básico del juego
	*/
	DAGame.prototype.init = function() {

		// Poniendo color de fondo
		this.game.stage.backgroundColor = "#857868";

		// Inicializando los controles de teclado
		this.cursors = phaserGame.input.keyboard.createCursorKeys();
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

		// TODO: Creamos oficina y mobiliario

		// Creando el diseñador
		this.designer = new DADesigner(this.game, this.cursors);

		// Creando el programador
		this.arrDevelopers.push(new DADeveloper(this.game, this.cursors, 125, 300));
		this.arrDevelopers.push(new DADeveloper(this.game, this.cursors, 200, 400));
		this.arrDevelopers.push(new DADeveloper(this.game, this.cursors, 400, 20));
	}

	/**
	* Loop que actualizará el juego
	*/
	DAGame.prototype.update = function() {

		// Moviendo el diseñador a velocidad 3
		this.designer.moveDesigner(3);

	}

	return DAGame;

})();