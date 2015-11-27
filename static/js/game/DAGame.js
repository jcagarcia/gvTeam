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

		// Creando diseñador
		this.createDesigner();
	}

	/**
	* Loop que actualizará el juego
	*/
	DAGame.prototype.update = function() {

		// Moviendo el diseñador a velocidad 3
		this.moveDesigner(3);

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

	/**
	* Método para mover el diseñador si alguna tecta del teclado está pulsada
	*/
	DAGame.prototype.moveDesigner = function(velocidad) {

		// Moviendo hacia la derecha
		if (this.cursors.right.isDown){
			this.designer.x += velocidad;
		}

		// Moviendo hacia la izquierda
		if (this.cursors.left.isDown){
			this.designer.x -= velocidad;
		}

		// Moviendo hacia arriba
		if (this.cursors.up.isDown){
			this.designer.y -= velocidad;
		}

		// Moviendo hacia arriba
		if (this.cursors.down.isDown){
			this.designer.y += velocidad;
		}

    
	}

	return DAGame;

})();