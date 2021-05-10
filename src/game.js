// New instance of a Phaser game
window.onload = function(){

    // Define basic characteristics of the game: dimensions and the background color
    var config = {
        width: 800,
        height: 800,
        backgroundColor: 0x000000,
        scene: [LoadGameScene, GameScene]
    }

 
    // New instance of a Phaser game
    var game = new Phaser.Game(config);
}

