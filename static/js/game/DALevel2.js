var DALevel2 = (function() {

	// Constructor de la clase DAGame
	function DALevel2 (phaserGame, currentGame) {

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
	DALevel2.prototype.init = function() {

		// Poniendo color de fondo
		this.game.stage.backgroundColor = "#857868";

		// Inicializando los controles de teclado
		this.cursors = phaserGame.input.keyboard.createCursorKeys();
	}

	/**
	* Método que carga los assets y recursos necesarios
	*/
	DALevel2.prototype.preload = function() {
		
		// Cargando floor asset
		this.game.load.image('floor_wood', 'static/assets/images/floors/floor_wood.jpg');
		
		// Cargando character assets
		this.game.load.spritesheet('char_designer', 'static/assets/images/characters/char_designer.png', 32, 48);
		this.game.load.spritesheet('char_developer_01', 'static/assets/images/characters/char_developer_01.png', 32, 48);
		this.game.load.spritesheet('char_developer_02', 'static/assets/images/characters/char_developer_02.png', 32, 48);
		this.game.load.spritesheet('char_developer_03', 'static/assets/images/characters/char_developer_03.png', 32, 48);

		// Cargando objetos
		this.game.load.image('hearth_1', 'static/assets/images/objects/hearth_1.png', 32, 32);
		this.game.load.image('cactus_1', 'static/assets/images/objects/cactus_1.png', 32, 32);

		// Cargando mobiliario
		this.game.load.image('table', 'static/assets/images/furniture/table.png', 55, 41);
		this.game.load.image('round_table', 'static/assets/images/furniture/round_table.png', 62, 52);
		this.game.load.image('long_table', 'static/assets/images/furniture/long_table.png', 28, 73);
		this.game.load.image('single_armchair_front', 'static/assets/images/furniture/single_armchair_front.png', 32, 63);
		this.game.load.image('single_armchair_back', 'static/assets/images/furniture/single_armchair_back.png', 32, 47);
		this.game.load.image('door_1', 'static/assets/images/furniture/door_1.png', 32, 64);

		// Cargando backgrounds
		this.game.load.image('background_1', 'static/assets/images/backgrounds/background_1.jpg', 156, 63);
	}

	/**
	* Método para crear el estado in¡cial del juego
	*/
	DALevel2.prototype.create = function() {

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
		this.arrBackgrounds = this.office.createBackground("background_1");
		this.door = this.office.createExitDoor(50, 20);

		// Creando el diseñador
		this.designer = new DADesigner(this.game, this.cursors, GAME_WIDTH - 250, GAME_HEIGHT - 48, "up");
		
		// Creando el programador
		this.arrDevelopers.push(new DADeveloper(this.game, 125, 200, 60, "char_developer_01", "up"));
		this.arrDevelopers.push(new DADeveloper(this.game, 600, 160, 60, "char_developer_01", "right"));
		this.arrDevelopers.push(new DADeveloper(this.game, 400, 120, 60, "char_developer_01", "up"));
		this.arrDevelopers.push(new DADeveloper(this.game, 600, 130, 60, "char_developer_01", "left"));
		this.arrDevelopers.push(new DADeveloper(this.game, 300, 120, 60, "char_developer_01", "left"));

		// Creamos el mobiliario
		this.arrFurniture.push(new DAFurniture(this.game, 450, 120, "single_armchair_front"));

		this.arrFurniture.push(new DAFurniture(this.game, 625, 150, "table"));
		
		var tableWithChair = new DAFurniture(this.game, 425, 150, "table");
		var tableWithChair1 = new DAFurniture(this.game, 225, 275, "table");
		this.arrFurniture.push(tableWithChair);
		this.arrFurniture.push(tableWithChair1);

		this.arrFurniture.push(new DAFurniture(this.game, 225, 150, "table"));
		this.arrFurniture.push(new DAFurniture(this.game, 625, 275, "table"));
		this.arrFurniture.push(new DAFurniture(this.game, 425, 275, "table"));
		this.arrFurniture.push(new DAFurniture(this.game, 225, 275, "table"));
		this.arrFurniture.push(new DAFurniture(this.game, 20, 200, "round_table"));
	    this.arrFurniture.push(new DAFurniture(this.game, 250, 285, "single_armchair_back"));
		this.arrFurniture.push(new DAFurniture(this.game, 40, 235, "single_armchair_back"));

		this.cactus = new DACactus(this.game, 625, 150, "cactus_1");

		// Subimos arriba del todo los objetos
		this.game.world.bringToTop(this.pnlStatus);
		this.game.world.bringToTop(this.designer.getSprite());
		
	}

	/**
	* Loop que actualizará el juego
	*/
	DALevel2.prototype.update = function() {

		// Necesitamos crear primero
		if(this.designer == undefined) {
			this.create();
		}

		this.designer.getSprite().tint = 0xffffff;

		// Moviendo el diseñador a velocidad 150
		this.designer.moveDesigner(150);

		for(i in this.arrDevelopers){
			var developer = this.arrDevelopers[i];

			// Moviendo los desarroladores aleatoriamente
			var randomX = Math.floor(Math.random() * 200);
			var randomY = Math.floor(Math.random() * 200);	
			developer.moveDeveloperToXY(randomX, randomY);

			// Añadiendo overlap entre diseñadores y programadores
			this.game.physics.arcade.overlap(this.designer.getSprite(), developer.getSprite(), this.designer.tryToKill);
		}	

		// Añadiendo overlap entre el diseñador y la puerta de salida
		this.game.physics.arcade.overlap(this.designer.getSprite(), this.door, this.finishLevel);

		// Añadiendo overlap entre el disñador y el cactus
		this.game.physics.arcade.overlap(this.designer.getSprite(), this.cactus.getSprite(), this.designer.catchCactus);

		// Añadiendo collide entre el diseñador y el background
		for(i in this.arrBackgrounds) {
			var background = this.arrBackgrounds[i];
			this.game.physics.arcade.collide(this.designer.getSprite(), background);
		}
		
		// Añadiendo collide entre el developer y el background
		for(i in this.arrBackgrounds) {
			var background = this.arrBackgrounds[i];
			for(j in this.arrDevelopers){
				var developer = this.arrDevelopers[j];
				this.game.physics.arcade.collide(developer.getSprite(), background);
			}
		}

		// Añadiendo collide entre el diseñador y el mobiliario
		for(i in this.arrFurniture) {
			var furniture = this.arrFurniture[i];
			this.game.physics.arcade.collide(this.designer.getSprite(), furniture.getSprite());
		}

		// Añadiendo collide entre desarrolladores y desarrolladores
		for(i in this.arrDevelopers) {
			var currenDeveloper = this.arrDevelopers[i];
			for(j in this.arrDevelopers){
				var otherDeveloper = this.arrDevelopers[j];

				if(j != i) {
					this.game.physics.arcade.collide(currenDeveloper.getSprite(), otherDeveloper.getSprite());
				}
			}
		}
		
		// Añadiendo collide entre los desarrolladores y el mobiliario
		for(i in this.arrFurniture) {
			var furniture = this.arrFurniture[i];
			for(j in this.arrDevelopers){
				var developer = this.arrDevelopers[j];
				this.game.physics.arcade.collide(developer.getSprite(), furniture.getSprite());
			}
		}

		// Actualizando panel de estado
		this.updatePanelStatus();
		
	}
	

	DALevel2.prototype.updatePanelStatus = function () {


		// Gestionando vidas

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

		// Gestionando el cactus en el panel de estado
		if(this.designer.getSprite().hasCactus) {
			this.cactusStatus = this.game.add.sprite(GAME_WIDTH - 200, 5, "cactus_1");
			this.pnlStatus.add(this.cactusStatus);
		}
	}

	/**
	* Método para finalizar el nivel
	*/
	DALevel2.prototype.finishLevel = function(designer, door) {
		
		// Para finalizar el nivel necesitamos que el diseñador haya cogido el cactus
		if(designer.hasCactus) {
			GAME_LEVEL = 4;
		}
	}

	DALevel2.prototype.gameOver = function() {
		GAME_LEVEL = 3;
	}

	return DALevel2;

})();