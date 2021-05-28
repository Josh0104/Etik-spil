var pointLyd 
var antalPoint = 0;
var liv = 3;
var s;
var spilType = undefined;
var mode = undefined;
let canvasZoom = screen.width;


if(sessionStorage.getItem('high score') == null){
  var high_score = 0;
}else {
  high_score = sessionStorage.getItem('high score');
  }

function preload(){
imgHjerte = loadImage('Img/hjerteLiv.png')
}

function startUp(){
  mode = 0
}

function setup() {

  //createCanvas(1536, 864);
  createCanvas(windowWidth,windowHeight)

  startUp() //Startskærm
  player1 = new Player();
  Point1 = new Point(random(width/2-100,width/2+100),0);
  bil1 = new Biler();

  frameRate(60)
  background(100);

}

function draw(){
  canvasZoom = screen.width;
  currentScalling = windowWidth/canvasZoom;
  scale(currentScalling); 
  console.log(currentScalling);

  if (mode == 0){
    startSkaerm();

  } else if(mode == 1){
    spilSkaerm();
  
  } else if (mode == 2){
    pauseSkaerm();

  } else if (mode == 4){
    slutSkaerm();

  } else if (mode == 5){
    infoSkaerm();

  }

    }
      
//funktioner 
function startSkaerm() {

  background(53,75,213)

  // textSize(50);
  // let t = "Vælg en spilletilstand for at starte spillet";
  // fill(255);
  // rectMode(CENTER);
  // textAlign(CENTER);
  // text(t, width/2, height/2, 500, 300); // Text wraps within text box

  if(high_score != 0){
    let t = "Din nuværende highscore er " + high_score + " point"
    fill(255);
    rectMode(CENTER);
    textAlign(CENTER);
    text(t, width/2, height/2 + 450, 500, 300);
  
  }
  document.getElementById('buttonGenstart').style.visibility = 'hidden';
  // document.getElementById('buttonTilbage').style.visibility = 'hidden';
}


    function keyPressed(){
        spilLyd = false

      if (keyCode === ENTER) {
        if(mode==0){
        mode=1;
       } }

      if ( key=== "p" || key === "P"){
          mode =2;
        }

      if (key === " "){
            mode=1;
          }
      
      // if (key === "h") {
      //   if (!spilLyd) {

      //   dyt = createAudio('Lyd/Dyt.mp3')
      //   dyt.play(true);
      //   spilLyd = true
      //   }
      // }
      }     

        function genstartKnap() {
         //window.location.reload(true);

         mode = 0;
         liv = 3;
         antalPoint = 0;
         bil1.nulstille();
         Point1.nulstille();

         showObjects();

          }

        function infoKnap(){
            mode = 5;
            hideObjects(); 
        }

        function tilbageKnap(){
          mode = 0;
          showObjects();
        }

        function startGameNormal(){
          mode = 1;
          spilType = 0;
          hideObjects();  
        }

        function startGameNeutral(){
          mode = 1;
          spilType = 1;
          hideObjects();
        }

        function startGameEkstrem(){
          mode = 1;
          spilType = 2;
          hideObjects();
        }

       function hideObjects(){

        document.getElementById('titel').style.visibility = 'hidden';
        document.getElementById('startTekst').style.visibility = 'hidden';
        document.getElementById('buttonNormal').style.visibility = 'hidden';
        document.getElementById('buttonNeutral').style.visibility = 'hidden';
        document.getElementById('buttonRacist').style.visibility = 'hidden'; 
        document.getElementById('buttonInfo').style.visibility = 'hidden'; 

        }

      function showObjects(){

        document.getElementById('titel').style.visibility = 'visible';
        document.getElementById('startTekst').style.visibility = 'visible';
        document.getElementById('buttonNormal').style.visibility = 'visible';
        document.getElementById('buttonNeutral').style.visibility = 'visible';
        document.getElementById('buttonRacist').style.visibility = 'visible'; 
        document.getElementById('buttonInfo').style.visibility = 'visible';

      }


/*Mode er forskellige skærme 

mode 0 = startskærm 
mode 1 = spillet 
mode 2 = pasue skærm 
mode 3 = død særm 
mode 4 = instruktion skærm */