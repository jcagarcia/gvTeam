var DADesigner = (function() {

	// Constructor de la clase diseñador
	function DADesigner(phaserGame, cursors, posX, posY, initialPosition) {

		// Guardando game
		this.game = phaserGame;

		// Guardando posicion inicial
		this.posX = posX;
		this.posY = posY;

		this.initialPosition = initialPosition;

		// Guardando cursores
		this.cursors = cursors;

		// Creando variable diseñador
		this.designer = undefined;

		// Generando diseñador
		this.createDesigner();
		
	}


	/**
	* Método para crear el diseñador utilizando un sprite
	*/
	DADesigner.prototype.createDesigner = function(){
		this.designer = this.game.add.sprite(this.posX, this.posY, 'char_designer');
		this.designer.scale.setTo(2,2);

		// Añadimos animaciones
		this.designer.animations.add("up", [0,1,2,3], 10, true);
		this.designer.animations.add("right", [4,5,6,7], 10, true);
		this.designer.animations.add("left", [8,9,10,11], 10, true);
		this.designer.animations.add("down", [12,13,14,15], 10, true);

		this.game.physics.arcade.enable(this.designer);
		this.designer.enableBody = true;
		
		// Fijamos el tamaño para que colisione con la base
		this.designer.body.setSize(32, 10, 0, 80);
		
		this.designer.body.collideWorldBounds = true;

		this.designer.animations.play(this.initialPosition);

		this.designer.hearths = 3;
		this.designer.hasCactus = false;
	}

	/**
	* Método para mover el diseñador si alguna tecta del teclado está pulsada
	*/
	DADesigner.prototype.moveDesigner = function(velocidad) {
	
		if (this.cursors.right.isDown){ // Moviendo hacia la derecha
		
			this.designer.body.velocity.x = velocidad;
			this.designer.animations.play("right");
		
		} else if (this.cursors.left.isDown){ // Moviendo hacia la izquierda
		
			this.designer.body.velocity.x = -velocidad;
			this.designer.animations.play("left");
		
		} else if (this.cursors.up.isDown){ // Moviendo hacia arriba
		
			this.designer.body.velocity.y = -velocidad;
			this.designer.animations.play("up");
		
		} else if (this.cursors.down.isDown){ // Moviendo hacia abajo
		
			this.designer.body.velocity.y = velocidad;
			this.designer.animations.play("down");
		
		} else { // Si no se mueve, parar la animación
			this.designer.body.velocity.x =0;
			this.designer.body.velocity.y =0; 
			this.designer.animations.stop(); 
		}
	}

	/**
	* Método que intenta matar al diseñador dependiendo de las vidas que tenga
	*/
	DADesigner.prototype.tryToKill = function(designer, developer) {

		// En primer lugar marcamos como golpeado al diseñador
		designer.tint = 0xE41937;

		// Comprobamos que no haya sido golpeado ya por este developer
		if(designer.lastCollisionWith != developer){
			designer.hearths--;
		}

		// Guardamos al developer contra el que hemos colisionado
		designer.lastCollisionWith = developer;
	}

	/**
	* Método que coge el cactus
	*/
	DADesigner.prototype.catchCactus = function(designer, cactus) {

		// Eliminamos el sprite del cactus
		cactus.kill();

		// Marcamos al diseñador como que tiene el cactus
		designer.hasCactus = true;
	}

	/**
	* Método que intenta parar al diseñador
	*/
	DADesigner.prototype.stop = function(designer, furniture) {

	}


	/**
	* Método que devuelve el designer
	*/
	DADesigner.prototype.getSprite = function() {
		return this.designer;
	}


	return DADesigner;

})();