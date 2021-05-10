//***************************************************************************** */
class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.x = this.i * w + (w/2);
        this.y = this.j * w + (w/2);
        this.id = 'o';//open cell
        this.unit;
    }
    getPixelX(){
        return this.x;
    }
    getPixelY(){
        return this.y;
    }
    setid(c){
        this.id = c;
    }
    getUnit(){
         return this.unit;
     }
    setUnit(unit){
         this.unit = unit; 
     }
    
}//end of Cell class 
