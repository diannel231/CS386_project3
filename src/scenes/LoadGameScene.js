class LoadGameScene extends Phaser.Scene{
    constructor(){

        // "loadGame" will be the identifier of this scene
        super("loadGame");
    }

    preload(){
        this.load.image("MenuBackground", "assets/MenuBackground.jpg");
        this.load.image("GameBackground", "assets/Map001.png");
        this.load.image("StartButton", "assets/StartButton.png");
        this.load.image("Castle", "assets/Castle.png");
        this.load.image("testunit", "assets/black_square.jpg");
        this.load.image("MoveHighlight","assets/path_highlight.png");
        this.load.image("AttackHighlight","assets/attack_highlight.png")
    }

    create(){
        this.add.text(20, 20, "Loading Game...");
        this.scene.start("playGame");
    }
}