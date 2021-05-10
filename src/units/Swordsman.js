

class Swordsman extends Unit {
    constructor(i,j,faction){
        super(i,j,faction);
        //swordsman stats
        this.hitpoints = 8;
        this.damage = 2;
        this.range = 1;
        this.actionpoints = 2;
        this.possibleMoves = [ //TotalMoves = 14
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
            }







        ];
    }//end of constructor
    getPossibleMoves(){
        return this.possibleMoves;
    }




}//end of class 