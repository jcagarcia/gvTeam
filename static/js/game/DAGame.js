var DAGame = (function() {

	// Constructor de la clase DAGame
	function DAGame (phaserGame) {

		// Creando el juego
		this.game = phaserGame;

		// Creando variable para el diseñador
		this.designer = undefined;

		// Creando variable para la oficina
		this.office = undefined;

		// Creando array de programadores
		this.arrDevelopers = [];
		
		// Creamos array de mobiliario
		this.arrFurniture = [];
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
		
		// Cargando floor asset
		this.game.load.image('floor_wood', 'static/assets/images/floors/floor_wood.jpg');
		
		// Cargando character assets
		this.game.load.spritesheet('char_designer', 'static/assets/images/characters/char_designer.png', 32, 48);
		this.game.load.spritesheet('char_developer_01', 'static/assets/images/characters/char_developer_01.png', 32, 48);
		this.game.load.spritesheet('char_developer_02', 'static/assets/images/characters/char_developer_02.png', 32, 48);
		this.game.load.spritesheet('char_developer_03', 'static/assets/images/characters/char_developer_03.png', 32, 48);
	}

	/**
	* Método para crear el estado in¡cial del juego
	*/
	DAGame.prototype.create = function() {

		// Creamos oficina
		this.office = new DAOffice(this.game);
		// Creamos el suelo de la oficina
		this.office.createFloor();

		// Creando el diseñador
		this.designer = new DADesigner(this.game, this.cursors);

		// Creando el programador
		this.arrDevelopers.push(new DADeveloper(this.game, 125, 300, "char_developer_01"));
		this.arrDevelopers.push(new DADeveloper(this.game, 200, 400, "char_developer_01"));
		this.arrDevelopers.push(new DADeveloper(this.game, 400, 20, "char_developer_01"));

		// Creamos el mobiliario
		this.arrFurniture.push(new DAFurniture(this.game, 400, 100));
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