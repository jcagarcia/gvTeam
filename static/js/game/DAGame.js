var DAGame = (function() {

	// Constructor de la clase DAGame
	function DAGame (phaserGame) {

		// Creando el juego
		this.game = phaserGame;

		// Creando variable para el diseñador
		this.designer = undefined;

		// Creando variable para la oficina
		this.office = undefined;

		// Creando variable para la puerta de salida
		this.door = undefined;

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

		// Inicializando physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
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

		// Cargando objetos
		this.game.load.image('door_1', 'static/assets/images/objects/door_1.jpg', 8, 34);

		// Cargando mobiliario
		this.game.load.image('table', 'static/assets/images/furniture/table.png', 55, 41);

		// Cargando backgrounds
		this.game.load.image('background_1', 'static/assets/images/backgrounds/background_1.jpg', 156, 63);
	}

	/**
	* Método para crear el estado in¡cial del juego
	*/
	DAGame.prototype.create = function() {

		// Creamos oficina
		this.office = new DAOffice(this.game);
		// Creamos el suelo de la oficina
		this.office.createFloor("floor_wood");
		this.door = this.office.createExitDoor(GAME_WIDTH - 10, GAME_HEIGHT - 150);
		this.office.createBackground("background_1");

		// Creando el diseñador
		this.designer = new DADesigner(this.game, this.cursors);
		
		// Creando el programador
		this.arrDevelopers.push(new DADeveloper(this.game, 125, 200, "char_developer_01"));
		this.arrDevelopers.push(new DADeveloper(this.game, 600, 90, "char_developer_01"));
		this.arrDevelopers.push(new DADeveloper(this.game, 300, 20, "char_developer_01"));

		// Creamos el mobiliario
		this.arrFurniture.push(new DAFurniture(this.game, 400, 100, "table"));
	}

	/**
	* Loop que actualizará el juego
	*/
	DAGame.prototype.update = function() {

		this.designer.designer.tint = 0xffffff;

		// Moviendo el diseñador a velocidad 3
		this.designer.moveDesigner(3);

		for(i in this.arrDevelopers){
			var developer = this.arrDevelopers[i];

			developer.getSprite().animations.play("up");

			// Añadiendo overlap entre diseñadores y programadores
			this.game.physics.arcade.overlap(this.designer.getSprite(), developer.getSprite(), this.designer.tryToKill);
		}	

		// Añadiendo overlap entre el diseñador y la puerta de salida
		this.game.physics.arcade.overlap(this.designer.getSprite(), this.door, this.finishLevel);
		
	}

	/**
	* Método para finalizar el nivel
	*/
	DAGame.prototype.finishLevel = function(designer, door) {
		console.log("Nivel finalizado!");
	}

	return DAGame;

})();