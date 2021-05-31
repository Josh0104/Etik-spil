
class Point{ 

    constructor(x,y){
    this.x = x
    this.y = y 
    this.width1 = 100
    this.height1 = 100
    this.imgPoint0 = loadImage('Img/Point2.png');
    this.sortKvindeArray = [loadImage('Img/sort_kvinde0.png'),loadImage('Img/sort_kvinde1.png'),loadImage('Img/sort_kvinde2.png')] 
    this.antalPoint;
    this.newPoint = 10;
    this.currentSpeed = 10;
    this.newSpeed = 2.5;
    this.bool = true;
    this.ii = Math.floor(Math.random()*this.sortKvindeArray.length -0);

    }

    point1(xx, yy){
      if(xx != undefined) this.x = xx;
      if(yy != undefined) this.y = yy;
        fill(255,255,0)
        
      if (spilType == 0 ){
        this.height1 = 100;
        this.width1 = 100
        image(this.imgPoint0,this.x,this.y,this.width1,this.height1)
      } else if(spilType == 1){
        fill(0);
        this.height1 = 100;
        ellipse(this.x, this.y, this.width1, this.height1);
      }
      else if (spilType == 2) {
        this.height1 = 200;
        this.width1 = 150;

        if(this.bool){

          this.ii = Math.floor(Math.random()*this.sortKvindeArray.length - 0);

          this.bool = false;

          }

        image(this.sortKvindeArray[this.ii],this.x,this.y,this.width1,this.height1)
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