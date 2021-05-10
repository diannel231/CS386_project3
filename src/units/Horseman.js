

class Horseman extends Unit {
    constructor(i,j,faction){
        super(i,j,faction);
        //swordsman stats
        this.hitpoints = 6;
        this.damage = 3;
        this.range = 1;
        this.actionpoints = 4;
        this.possibleMoves = [ //TotalMoves = 41
            {
                //leftleftleftdown
                i: this.i-3,
                j:this.j+1
            },
            {
                //leftleftdowndown
                i: this.i-2,
                j:this.j+2
            },
            {
                //leftleftdown
                i: this.i-2,
                j:this.j+1
            },
            {
                //leftdowndowndown
                i: this.i-1,
                j:this.j+3
            },
            {
                //leftdowndown
                i: this.i-1,
                j:this.j+2
            },
            {
                //rightrightrightdown
                i: this.i+3,
                j:this.j+1
            },
            {
                //rightrightdowndown
                i: this.i+2,
                j:this.j+2
            },
            {
                //rightrightdown
                i: this.i+2,
                j:this.j+1
            },
            {
                //rightdowndowndown
                i: this.i+1,
                j:this.j+3
            },
            {
                //rightdowndown
                i: this.i+1,
                j:this.j+2
            },
            {
                //rightrightrightup
                i: this.i+3,
                j:this.j-1
            },
            {
                //rightrightupup
                i: this.i+2,
                j:this.j-2
            },
            {
                //rightrightup
                i: this.i+2,
                j:this.j-1
            },
            {
                //rightupupup
                i: this.i+1,
                j:this.j-3
            },
            {
                //rightupup
                i: this.i+1,
                j:this.j-2
            },
            {
                //leftleftleftup
                i: this.i-3,
                j:this.j-1
            },
            {
                //leftleftupup
                i: this.i-2,
                j:this.j-2
            },
            {
                //leftleftup
                i: this.i-2,
                j:this.j-1
            },
            {
                //leftupupup
                i: this.i-1,
                j:this.j-3
            },
            {
                //leftupup
                i: this.i-1,
                j:this.j-2
            },
            {
                //rightrightrightright
                i: this.i+4,
                j:this.j
            },
            {
                //rightrightright
                i: this.i+3,
                j:this.j
            },
            {
                //downdowndowndown
                i: this.i,
                j:this.j+4
            },
            {
                //downdowndown
                i: this.i,
                j:this.j+3
            },
            {
                //leftleftleftleft
                i:this.i-4,
                j:this.j
            },
            {
                //leftleftleft
                i:this.i-3,
                j:this.j
            },
            {
                //upupupup
                i:this.i,
                j:this.j-4
            },
            {
                //upupup
                i:this.i,
                j:this.j-3
            },
            {
                //up
                i: this.i,
                j:this.j-1
            },
            {
                //upup
                i: this.i,
                j:this.j-2
            },
            {
                //down
                i: this.i,
                j:this.j+1
            },
            {
                //downdown
                i: this.i,
                j:this.j+2
            },
            {
                //left
                i: this.i-1,
                j:this.j
            },
            {
                //leftleft
                i: this.i-2,
                j:this.j
            },
            {
                //right
                i: this.i+1,
                j:this.j
            },
            {
                //rightright
                i: this.i+2,
                j:this.j
            },
            {
                //upleft
                i: this.i-1,
                j:this.j-1
            },
            {
                //upright
                i: this.i+1,
                j:this.j-1
            },
            {
                //downleft
                i: this.i-1,
                j:this.j+1
            },
            {
                //downright
                i: this.i+1,
                j:this.j+1
            },
            {
                //center
                i:this.i,
                j:this.j
            },
            






        ]; 
        


    }//end of constructor
    getPossibleMoves(){
        return this.possibleMoves;
    }

    


}//end of class 

