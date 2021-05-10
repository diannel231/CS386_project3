class Castle{
    constructor(i,j){
        this.i = i;
        this.j = j;
        this.hitpoints = 20;
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
    getHitpoints(){
        return this.hitpoints;
    }


}