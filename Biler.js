class Biler {

    constructor(){
    this.x = random(width/2-100,width/2+100);
    this.y = -50;
    this.w;
    this.h;
    this.roedBil = loadImage('Img/roedBil.png');
    this.hvidMandArray = [loadImage('Img/hvid_mand0.png'),loadImage('Img/hvid_mand1.png'),loadImage('Img/hvid_mand2.png')];
    this.antalPoint;
    this.newPoint = 10;
    this.currentSpeed = 5;
    this.newSpeed = 2.5;
    this.liv;
    this.bool = true;
    this.ii = Math.floor(Math.random()*this.hvidMandArray.length - 0 );
    }

    koere(xx,yy){
    if(xx != undefined) this.x = xx;
    if(yy != undefined) this.y = yy;
        fill(255,0,0)

        if (spilType == 0) {
            this.w = 150;
            this.h = 150;
        image(this.roedBil,this.x,this.y,this.w,this.h)
        } else if(spilType == 1){
            this.w = 100;
            this.h = 100;
            fill(255);
            ellipse(this.x, this.y, this.w, this.h)
        }else if (spilType == 2){
            this.h = 200;
            this.w = 100;

            if(this.bool){

            this.ii = Math.floor(Math.random()*this.hvidMandArray.length - 0 )

            this.bool = false;

            }
            image(this.hvidMandArray[this.ii],this.x,this.y,this.w,this.h);
            // image(this.hvidMand,this.x,this.y,this.w,this.h)
        }

}

    bilGetPosX(){
       return this.x 
    }
    bilGetPosY(){

        this.antalPoint = antalPoint;
        this.liv = liv;

        if (this.antalPoint == this.newPoint){
            this.currentSpeed = this.currentSpeed += this.newSpeed;
            this.newPoint = this.newPoint += 10;
          }

          if (this.liv == 0){
            this.newPoint = 10;
            this.currentSpeed = 10;
          }
          return this.y += this.currentSpeed

        }

        nulstille(){
            this.newPoint = 10;
            this.currentSpeed = 10;
         }
}