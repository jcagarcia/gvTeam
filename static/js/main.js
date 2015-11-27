// Clase main que inicializará juego

// Variables globales de tamaño del juego
var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;

// Generando objeto state que contiene todas las funciones
var state = {
	init: init,
	preload: preload,
	update: update,
	create: create
};

// Creamos un nuevo juego Phaser
var phaserGame = new Phaser.Game(
	GAME_WIDTH,
	GAME_HEIGHT,
	Phaser.Auto,
	'oficina',
	state
);

var dAGame = new DAGame(phaserGame);

function init() {
	dAGame.init();
}

function preload() {
	dAGame.preload();
}

function update() {
	dAGame.update();
}

function create() {
	dAGame.create();
}