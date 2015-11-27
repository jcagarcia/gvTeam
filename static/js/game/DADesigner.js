var DADesigner = (function() {

	// Constructor de la clase diseñador
	function DADesigner(phaserGame, cursors) {

		// Guardando game
		this.game = phaserGame;

		// Guardando cursores
		this.cursors = cursors;

		// Añadir sprite
		this.designer = phaserGame.add.sprite(32, 32, 'char_designer');

	    window.graphics = this.designer;
	}

	/**
	* Método para mover el diseñador si alguna tecta del teclado está pulsada
	*/
	DADesigner.prototype.moveDesigner = function(velocidad) {

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


	return DADesigner;

})();