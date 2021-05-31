function startSkaerm() {

  background(53,75,213)
  if(high_score > 0){
  document.getElementById('highScoreTekst').style.visibility = 'visible';
  document.getElementById('highScoreTekst').innerHTML = "Din nuværende high score er " + high_score + " point";
      } else {
        document.getElementById('highScoreTekst').style.visibility = 'hidden';
      }
        document.getElementById('buttonGenstart').style.visibility = 'hidden';
      }

function spilSkaerm(){

  document.getElementById('highScoreTekst').style.visibility = 'hidden';
  document.getElementById('antalPoint').style.visibility ='visible';
  document.getElementById('highScorePoint').style.visibility ='visible';
  document.getElementById('antalPoint').innerHTML = antalPoint + " point";
  document.getElementById('highScorePoint').innerHTML = "High score " + high_score + " point";
  document.getElementById('buttonExitFullScreen').style.visibility = 'hidden';
  document.getElementById('buttonFullScreen').style.visibility = 'hidden';  

  if(antalPoint >= 25 && antalPoint < 50){
        background(75);
      } else if (antalPoint >= 50 && antalPoint < 75){
        background(50);
      } else if (antalPoint >= 75 && antalPoint < 100){
        background(25);
      } else if (antalPoint >= 100){
        background(0);
      } else{ 
        background(100);
  }


    fill(255) 
    rect(width/2 - 300,0,25,9000)
    rect(width/2+300,0,25,9000)
  
      player1.move();
      var px = player1.getPosX()
      var py = player1.getPosY()
  
      var pointx = Point1.getPosX()
      var pointy = Point1.getPosY()
  
      bil1.koere();
      var bilX = bil1.bilGetPosX()
      var bilY = bil1.bilGetPosY()
  
      var d_Player_Point = int(dist(px+50,py+50,pointx,pointy))
      var d_Player_Bil = int(dist(px+50,py+50,bilX,bilY));
  
        if (Point1 != null ) {
          Point1.point1();
          }
        //console.log(" Afstand:" + " " + d)
        if( d_Player_Point  < 100 ) { //Hvis du rammer point
          //console.log("Du fik 1 point" + height)
          
              if(spilType != 2){
              pointLyd = createAudio('Lyd/PointSound.mp3');
              pointLyd.volume(0.5)
              pointLyd.autoplay(true);
              } else {
                    if (scream == 1){
                    pointLyd = createAudio('Lyd/woman_scream_1.mp3');
                    // pointLyd.volume(0.5)
                    pointLyd.autoplay(true);
                    scream = 2
                  } else{
                    pointLyd = createAudio('Lyd/woman_scream_2.mp3');
                    pointLyd.volume(0.5)
                    pointLyd.autoplay(true);
                    scream = 1
                  }
              }
          antalPoint ++;
          Point1.point1(random(width/2-200,width/2+200),0);


          if(antalPoint >= high_score) {
              high_score = antalPoint;
          }
          Point1.bool = true;
        }   
  
        if (pointy - 100 > py ) { // Hvis du misser point
          Point1.point1(random(width/2-200,width/2+200),0)
          Point1.bool = true;
        }
          
            if (bil1 != null ) {
              bil1.koere();
            }
  
            if(d_Player_Bil < 75){
              bil1.koere(random(width/2-200,width/2+200),0)
              bilRammerLyd = createAudio('Lyd/carCrash.mp3');
              bilRammerLyd.volume(0.5)
              bilRammerLyd.autoplay(true);
              liv --;
              //console.log("Du rammer bilen, du har nu " + " " + liv + "liv tilbage")
              bil1.bool = true;
            }
  
            if (bilY - 200 > py ){
              bil1.koere(random(width/2-200,width/2+200),0)
              bil1.bool = true;
            }
  
            if (liv == 3) {
  
              image(imgHjerte,width - 400,5,150,150);
              image(imgHjerte,width - 275,5,150,150);
              image(imgHjerte,width - 150,5,150,150);
  
            } else if (liv == 2){
              image(imgHjerte,width - 275,5,150,150);
              image(imgHjerte,width - 150,5,150,150);
  
            } else  if (liv == 1){
              image(imgHjerte,width - 150,5,150,150);
  
            } else if (liv == 0 ){
              if(antalPoint > high_score) {
                high_score = antalPoint;
                console.log("New highscore " + high_score);
              }
              mode = 4;
            } 
  
  }
  
  function pauseSkaerm() {
    background(53,75,213)
  
    textSize(62);
    let t = "Tryk på mellerum for at gå tilbage til spillet";
    fill(255);
    rectMode(CENTER);
    textAlign(CENTER);
    text(t, width/2, height/2, 800, 300); // Text wraps within text box
  
  }
  
  function slutSkaerm(){
  
    background(230,0,0)
    textSize(62);
    let t = "Spillet er slut, du fik" + " " + antalPoint + " " + "point"  ;
    fill(255);
    rectMode(CENTER);
    textAlign(CENTER);
    text(t, width/2, height/2, 800, 300);
    
    localStorage.setItem('high score',high_score);
  
    document.getElementById('buttonGenstart').style.visibility = 'visible';
    document.getElementById('antalPoint').style.visibility ='hidden';
    document.getElementById('highScorePoint').style.visibility ='hidden';
  
  }