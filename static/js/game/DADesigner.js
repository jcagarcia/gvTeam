var DADesigner = (function() {

	// Constructor de la clase diseñador
	function DADesigner(phaserGame, cursors) {

		// Guardando game
		this.game = phaserGame;

		// Guardando cursores
		this.cursors = cursors;

		// TODO: Crear diseñador usando assets

		this.designer = phaserGame.add.graphics(100, 100);
	    
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