

var cell;
var grid = [];
var gridWidth = 800;
var gridHeight = 800;
var w = gridWidth/20;             //dimension for the cell 40x40
var cellWidth = gridWidth/20;
var cellHeight = gridHeight/20;

//this is used for the player to selected one unit at a time
var selectedI;
var selectedJ;


class GameScene extends Phaser.Scene{
    constructor(){
        super("playGame");

    }

    create(){

        this.background = this.add.image(0, 0, "GameBackground");
        this.background.setOrigin(0, 0);
        //this.add.text(20, 20, "Playing Game", {font: "25px Arial", fill: "yellow"});

        for( var x = 0; x < gridWidth; x+=cellWidth ){          
            this.add.line(0,0,x,0,x,gridWidth*2,0xff0000); //we had to double the width to match the current width
            //(0,0) world position
            //(initial coordinate)
            //(ending coordinate)
        }
        for(var y = 0; y < gridHeight; y+=cellHeight){
            this.add.line(0,0,0,y,gridHeight*2,y,0xff0000);
        }

        //this.add.line(0,0,0,40,500,500,0xff0000);
        this.add.image(100,100,"StartButtfon"); //(1,2)

        //initialize grid 
        for(var i = 0; i<20; i++){
            let row = [];
            for(var j = 0; j <20; j++){
                cell = new Cell(i,j);
                //console.log(cell);
                row.push(cell);    
            }
            grid.push(row);
        }
        console.log(grid);

        //adding castle image here
        var castle = new Castle(2,2);
        this.add.image(castle.getx(),castle.gety(), "Castle");


        //placing default ally units 
        var allyarcher1 = new Archer(6,2,'a');
        var allyarcher2 = new Archer(2,6,'a');
        var allyswordman1 = new Swordsman(8,4,'a');
        grid[8][4].setUnit(allyswordman1);

        var allyswordman2 = new Swordsman(7,7,'a');
        var allyswordman3 = new Swordsman(4,8,'a');
        var allyhorseman1 = new Horseman(18,1,'a');
        
        //console.log(horseman1.getPossibleMoves());
        let allyarcher1Sprite = this.add.image(allyarcher1.getx(),allyarcher1.gety(),"MoveHighlight");
        let allyarcher2Sprite = this.add.image(allyarcher2.getx(),allyarcher2.gety(),"testunit");
        let allyswordman1Sprite = this.add.image(allyswordman1.getx(),allyswordman1.gety(),"testunit");
        let allyswordman2Sprite = this.add.image(allyswordman2.getx(),allyswordman2.gety(),"testunit");
        let allyswordman3Sprite = this.add.image(allyswordman3.getx(),allyswordman3.gety(),"testunit");
        let allyhorseman1Sprite = this.add.image(allyhorseman1.getx(),allyhorseman1.gety(),"AttackHighlight");

        //first event click is selecting a unit 
        this.input.on('pointerdown',function(event){ 
            console.log("first click");
            //console.log(Math.round(event.x));
            //console.log(Math.round(event.y));
            convertPixelToCoorPoint(event.x,event.y);

            //set the unit in this cell to be selected
            console.log(grid[selectedI][selectedJ].getUnit());
            //grid[selectedI][selectedJ].getUnit()

            //check if selected cell contains an ally unit
            console.log(selectedI);
            console.log(selectedJ);
            
            //if selected is an ally, do actions
            if(grid[selectedI][selectedJ].id == 'a')
            {
                console.log("is an ally");
                //we want to move to a desired location, try nested events
                
                

            }




        },this);



        // this.input.keyboard.on('keyup_D',function(event){
        //     this.image.x +=10;
        // },this);

    }//end of create function 

    listener(){

        console.log("inside update");


    }//end of update()


    
}//end of GameScene class 


function convertPixelToCoorPoint(pixelX,pixelY){
    var leftBoundX;
    var rightBoundX;
    var topBoundY;
    var bottomBoundY;

    for(var i = 0; i < 20 ; i++){
        for(var j = 0; j < 20; j++){
            leftBoundX = 40*i;
            rightBoundX = 40*i+40;
            topBoundY = 40*j;
            bottomBoundY = 40*j+40;

            if( (leftBoundX <= pixelX && pixelX < rightBoundX) && (topBoundY <= pixelY && pixelY < bottomBoundY) ){
                //bounds have been checked 
                //console.log(i);
                //console.log(j);
                selectedI = i;
                selectedJ = j;

            }
        }
    }

};//end of function











