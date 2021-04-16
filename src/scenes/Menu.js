

class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload(){
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.mp3');
        this.load.audio('sfx_explosion2', './assets/explosion39.mp3');
        this.load.audio('sfx_explosion3', './assets/explosion40.mp3');
        this.load.audio('sfx_explosion4', './assets/explosion41.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.image('menu', './assets/menu.png');
    }

    create() {
         // Menu text config
         let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#85EACD',
            color: '#38816C',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.menu = this.add.tileSprite(0,0,640,480, 'menu').setOrigin(0,0);

        //text
        //this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'BEE BLAST!!!', 
           // menuConfig).setOrigin(0.5);
       // this.add.text(game.config.width/2, game.config.height/2, 'Use <--> arrows to move & (F) to fire', 
           // menuConfig).setOrigin(0.5);
       // menuConfig.backgroundColor = '#98ECBE';
      //  menuConfig.color = '#638CB0';
      //  this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 
            //'Press an Arrow Key to Start', menuConfig).setOrigin(0.5);


         // define move keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
              spaceshipSpeed: 3,
              gameTimer: 60000    
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');    
          }
          if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
              spaceshipSpeed: 4,
              gameTimer: 45000    
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');    
          }
    }
}
