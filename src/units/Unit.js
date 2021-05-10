

class Unit {
    constructor(i,j,faction){
        this.i = i;
        this.j = j;
        this.isSelected = false;
        this.hasMoved = false;
        this.faction = faction;//ally 'a' faction or enemy 'e' faction
        
        
        if(faction == 'a'){
            grid[i][j].setid('a');
        }else{
            grid[i][j].setid('e');
        }


    }
    geti(){
        return this.i;
    }
    getj(){
        return this.j;
    }
    getx(){
        return this.x = this.i * 40 + (20);
        
    }
    gety(){
        return this.y = this.j * 40 + (20);
    }
    // getUnit(){
    //     return this.unit;
    // }

    move(i2,j2){
        grid[i][j].setid('o');//sets the old position to an open cell
        this.i = i2;
        this.j = j2;
        //update the image position as well below
        //
        //
        //
        this.hasMoved = true; 

    }
    


}