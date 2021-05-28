
class Point{ 

    constructor(x,y){
    this.x = x
    this.y  = y 
    this.weight1 = 100
    this.height1 = 100
    this.imgPoint0 = loadImage('Img/Point2.png');
    this.imgPoint1 = loadImage('Img/sortMenneske.png'); 
    this.antalPoint;
    this.newPoint = 10;
    this.currentSpeed = 10;
    this.newSpeed = 2.5;

    }

    point1(xx, yy){
      if(xx != undefined) this.x = xx;
      if(yy != undefined) this.y = yy;
        fill(255,255,0)
        //ellipse(this.x,this.y,this.weight1,this.height1)

      if (spilType == 0 ){
        this.height1 = 100;
        image(this.imgPoint0,this.x,this.y,this.weight1,this.height1)
      } else if(spilType == 1){
        fill(0);
        this.height1 = 100;
        ellipse(this.x, this.y, this.weight1, this.height1);
      }
      else if (spilType == 2) {
        this.height1 = 200;
        image(this.imgPoint1,this.x,this.y,this.weight1,this.height1)
      }
    }

    getPosX() {
      return this.x;
      }
       getPosY() {

          this.antalPoint = antalPoint;
          this.liv = liv;
          if (this.antalPoint == this.newPoint){
            this.currentSpeed = this.currentSpeed += this.newSpeed;
            this.newPoint = this.newPoint += 10;
  
          }
          return this.y += this.currentSpeed
          
       }

       nulstille(){
          this.newPoint = 10;
          this.currentSpeed = 10;
       }

}