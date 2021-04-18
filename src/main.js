//Danielle Kraljevski
//Rocket PAtrol Mods: Bee Blast
//4/18/2021

//Hours spent on mods :12
//Create a new scrolling tile sprite for the background (5)

//particle emitter from phaser(20)

//Redesign the game's artwork, UI, and sound to change
// its theme/aesthetic (to something other than sci-fi) (60)

//Create 4 new explosion SFX and randomize which one plays on impact (10)

//New title screen (10)

//Background Music (5)

//110 total


let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],
}

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;