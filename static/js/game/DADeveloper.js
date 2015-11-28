var DADeveloper = (function() {

	// Constructor de la clase developer
	function DADeveloper(phaserGame, posX, posY, velocity, spritSheetLabel, startPosition) {

		// Guardando game
		this.game = phaserGame;

		// Creando variable developer
		this.developer = undefined;

		// Guardamos la posicion original
		this.posX = posX;
		this.posY = posY;

		// Guardamos el spritSheet
		this.spritSheetLabel = spritSheetLabel;

		// Guardamos la posicion inicial
		this.startPosition = startPosition;

		// Generando programador
		this.createDeveloper();

		this.developerVelocity = velocity;	

		this.inMovement = false;

	}

	/**
	* Método para crear el developer utilizando un sprite
	*/
	DADeveloper.prototype.createDeveloper = function(){


		this.developer = this.game.add.sprite(this.posX, this.posY, this.spritSheetLabel);
		this.developer.scale.setTo(2,2);

		// Añadimos animaciones
		this.developer.animations.add("up", [0,1,2,3], 10, true);
		this.developer.animations.add("right", [4,5,6,7], 10, true);
		this.developer.animations.add("left", [8,9,10,11], 10, true);
		this.developer.animations.add("down", [12,13,14,15], 10, true);
		this.developer.enableBody = true;
		
		this.game.physics.arcade.enable(this.developer);
		//this.developer.body.moves = true;
		this.developer.body.allowGravity = true; 
		this.developer.body.velocity.setTo(this.developerVelocity, this.developerVelocity);
		this.developer.body.bounce.setTo(1,1);
		this.developer.body.collideWorldBounds = true;

		// Fijamos el tamaño para que colisione con la mitad
		this.developer.body.setSize(25, 30, 8, 30);
	}
	
	// Generando ruta 1 programador 
	DADeveloper.prototype.moveDeveloperToXY = function(fPosX, fPosY) {
		this.posX = this.developer.x;
		this.posY = this.developer.y;

		if (!this.inMovement){

			this.inMovement = true;

			if(this.posX > fPosX){
				this.developer.body.velocity.x = -this.developerVelocity;
				this.developer.animations.play(this.startPosition);
			}
			
			if(this.posX < fPosX){
				this.developer.body.velocity.x = +this.developerVelocity;
				this.developer.animations.play(this.startPosition);
			}

			if(this.posY > fPosY){
				this.developer.body.velocity.y = -this.developerVelocity;
				this.developer.animations.play(this.startPosition);
			}

			if(this.posX < fPosY){
				this.developer.body.velocity.y = +this.developerVelocity;
				this.developer.animations.play(this.startPosition);
			}
		}
	}

	/**
	* Método que devuelve el developer
	*/
	DADeveloper.prototype.getSprite = function() {
		return this.developer;
	}

	return DADeveloper;

})();