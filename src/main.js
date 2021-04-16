//Danielle Kraljevski
//Rocket PAtrol Mods: Bee Blast
//4/16/2021


//Redesign the game's artwork, UI, and sound to change
// its theme/aesthetic (to something other than sci-fi) (60)

//Create 4 new explosion SFX and randomize which one plays on impact (10)

//New title screen (10)

//particles


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