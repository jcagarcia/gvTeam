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

		// Creando variable para el cactus
		this.cactus = undefined;

		// Creando variable para el fondo
		this.arrBackgrounds = undefined;

		// Creando array de programadores
		this.arrDevelopers = [];
		
		// Creamos array de mobiliario
		this.arrFurniture = [];

		// Variable para almacenar el tiempo entre vidas
		this.timeBetweenKills = 0;
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

		// Cargando objetos
		this.game.load.image('door_1', 'static/assets/images/objects/door_1.jpg', 8, 34);
		this.game.load.image('hearth_1', 'static/assets/images/objects/hearth_1.png', 32, 32);
		this.game.load.image('cactus_1', 'static/assets/images/objects/cactus_1.png', 32, 32);

		// Cargando mobiliario
		this.game.load.image('table', 'static/assets/images/furniture/table.png', 55, 41);

		// Cargando backgrounds
		this.game.load.image('background_1', 'static/assets/images/backgrounds/background_1.jpg', 156, 63);
	}

	/**
	* Método para crear el estado in¡cial del juego
	*/
	DAGame.prototype.create = function() {

		// Inicializando physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		// Creando grupo para panel superior
		this.pnlStatus = this.game.add.group();
		this.hearth1 = this.game.add.sprite(GAME_WIDTH - 150, 10, "hearth_1");
		this.hearth2 = this.game.add.sprite(GAME_WIDTH - 100, 10, "hearth_1");
		this.hearth3 = this.game.add.sprite(GAME_WIDTH - 50, 10, "hearth_1");
		this.pnlStatus.add(this.hearth1);
		this.pnlStatus.add(this.hearth2);
		this.pnlStatus.add(this.hearth3);
		

		// Creamos oficina
		this.office = new DAOffice(this.game);
		// Creamos el suelo de la oficina
		this.office.createFloor("floor_wood");
		this.door = this.office.createExitDoor(GAME_WIDTH - 10, GAME_HEIGHT - 150);
		this.arrBackgrounds = this.office.createBackground("background_1");

		// Creando el diseñador
		this.designer = new DADesigner(this.game, this.cursors);
		
		// Creando el programador
		this.arrDevelopers.push(new DADeveloper(this.game, 125, 200, "char_developer_01"));
		this.arrDevelopers.push(new DADeveloper(this.game, 600, 90, "char_developer_01"));
		this.arrDevelopers.push(new DADeveloper(this.game, 300, 20, "char_developer_01"));

		// Creamos el mobiliario
		this.arrFurniture.push(new DAFurniture(this.game, 400, 100, "table"));

		// Creando el cactus
		this.cactus = new DACactus(this.game, 400, 100, "cactus_1");

		// Subimos arriba del todo el panel de estado
		this.game.world.bringToTop(this.pnlStatus);
	}

	/**
	* Loop que actualizará el juego
	*/
	DAGame.prototype.update = function() {

		this.designer.getSprite().tint = 0xffffff;

		// Moviendo el diseñador a velocidad 150
		this.designer.moveDesigner(150);

		for(i in this.arrDevelopers){
			var developer = this.arrDevelopers[i];

			developer.getSprite().animations.play("up");

			// Añadiendo overlap entre diseñadores y programadores
			this.game.physics.arcade.overlap(this.designer.getSprite(), developer.getSprite(), this.designer.tryToKill);
		}	

		// Añadiendo overlap entre el diseñador y la puerta de salida
		this.game.physics.arcade.overlap(this.designer.getSprite(), this.door, this.finishLevel);

		// Añadiendo collide entre el diseñador y el background
		for(i in this.arrBackgrounds) {
			var background = this.arrBackgrounds[i];
			this.game.physics.arcade.collide(this.designer.getSprite(), background);
		}

		// Añadiendo collide entre el diseñador y el mobiliario
		for(i in this.arrFurniture) {
			var furniture = this.arrFurniture[i];
			this.game.physics.arcade.collide(this.designer.getSprite(), furniture.getSprite());
		}

		// Actualizando panel de vidas
		this.updateHearths();
		
	}

	DAGame.prototype.updateHearths = function () {

		var hearths = this.designer.getSprite().hearths;

		if(hearths == 2) {
			this.hearth1.kill();
		}else if(hearths == 1) {
			this.hearth2.kill();
		}else if (hearths == 0){
			this.hearth3.kill();
			this.gameOver();
		}

		this.timeBetweenKills++;

		if(this.timeBetweenKills >= 200){
			this.timeBetweenKills = 0;
			this.designer.getSprite().lastCollisionWith = undefined;
		}
	}

	/**
	* Método para finalizar el nivel
	*/
	DAGame.prototype.finishLevel = function(designer, door) {
		console.log("Nivel finalizado!");
	}

	DAGame.prototype.gameOver = function() {
		console.log("GAME OVER!");
	}

	return DAGame;

})();