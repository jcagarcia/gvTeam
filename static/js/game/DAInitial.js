var DAInitial = (function() {

	// Constructor de la clase DAInitial
	function DAInitial (phaserGame) {

		// Creando el juego
		this.game = phaserGame;

	}

	/**
	* Método que inicializa el escenario básico del juego
	*/
	DAInitial.prototype.init = function() {

		// Poniendo color de fondo
		this.game.stage.backgroundColor = "#857868";

		// Inicializando los controles de teclado
		this.cursors = phaserGame.input.keyboard.createCursorKeys();
	}

	/**
	* Método que carga los assets y recursos necesarios
	*/
	DAInitial.prototype.preload = function() {
		// Cargando floor asset
		this.game.load.image('logo', 'static/assets/images/backgrounds/logo.png');
	}

	/**
	* Método para crear el estado in¡cial del juego
	*/
	DAInitial.prototype.create = function() {

		this.logo = this.game.add.sprite(0, 100, "logo");
		this.logo.scale.setTo(0.8,0.8);

		var style = { font: "18px Arial", fill: "#ff0044", align: "center" };

    	text = this.game.add.text(GAME_WIDTH / 2, 250, "Click to continue", style);
    	text.anchor.set(0.5);
	}

	/**
	* Loop que actualizará el juego
	*/
	DAInitial.prototype.update = function() {

		if (this.game.input.activePointer.isDown){ // Moviendo hacia la derecha
			GAME_LEVEL++;
		}
		
	}

	return DAInitial;

})();