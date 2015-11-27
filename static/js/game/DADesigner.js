var DADesigner = (function() {

	// Constructor de la clase diseñador
	function DADesigner(phaserGame, cursors) {

		// Guardando game
		this.game = phaserGame;

		// Guardando cursores
		this.cursors = cursors;

		// Generando diseñador
		this.createDesigner();
	}


	/**
	* Método para crear el diseñador utilizando un sprite
	*/
	DADesigner.prototype.createDesigner = function(){
		this.designer = this.game.add.sprite(32, 32, 'char_designer');
		this.designer.scale.setTo(2,2);

		// Añadimos animaciones
		this.designer.animations.add("up", [0,1,2,3], 10, true);
		this.designer.animations.add("right", [4,5,6,7], 10, true);
		this.designer.animations.add("left", [8,9,10,11], 10, true);
		this.designer.animations.add("down", [12,13,14,15], 10, true);

		this.game.physics.arcade.enable(this.designer);
		this.designer.enableBody = true;
		this.designer.body.collideWorldBounds = true;

	}

	/**
	* Método para mover el diseñador si alguna tecta del teclado está pulsada
	*/
	DADesigner.prototype.moveDesigner = function(velocidad) {

		if (this.cursors.right.isDown){ // Moviendo hacia la derecha

			this.designer.x += velocidad;
			this.designer.animations.play("right");

		}else if (this.cursors.left.isDown){ // Moviendo hacia la izquierda

			this.designer.x -= velocidad;
			this.designer.animations.play("left");

		} else if (this.cursors.up.isDown){ // Moviendo hacia arriba

			this.designer.y -= velocidad;
			this.designer.animations.play("up");

		} else if (this.cursors.down.isDown){ // Moviendo hacia abajo

			this.designer.y += velocidad;
			this.designer.animations.play("down");

		} else { // Si no se mueve, parar la animación
			this.designer.animations.stop();	
		}
	}


	return DADesigner;

})();