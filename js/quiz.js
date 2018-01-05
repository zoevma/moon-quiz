const AUDIO_PATH = '/audio/';
const AUDIO_EXT = '.mp3';

function check() {

    console.log("try clicked");
    var a1 = document.getElementsByName("color");
    var b1 = document.getElementsByName("word");
    var c1 = document.getElementsByName("dessert");
    var result = 0;
    var output;

    a1.forEach(function(element) {
      //  console.log(element);
        if (element.checked){
          result = result + Number(element.value) ;
        }
    });

    b1.forEach(function(element) {
      //  console.log(element);
        if (element.checked){
          result = result + Number(element.value) ;
        }
    });

    c1.forEach(function(element) {
      //  console.log(element);
        if (element.checked){
          result = result + Number(element.value);
        }
    });
    // [0,1,2,...]
    var foodNames = ["lazania","eggs","sushi","grapes","cheese","fish", "rice","pizza", "chilli"];
    var petNames = ["turtle", "dragon", "a rock", "rabbit", "monkey", "cat", "mouse", "guinea pig","pig","butterfly"]
    var destinations = ["New Zealand", "Peru","Jamaica", "Mexico", "Japan", "Australia", "Russia", "Papua New Guinea", "Spain", "South Africa", "Canada"]
    var musics = ["gummybear","redflavor","watermelon","gummybear","redflavor","watermelon","gummybear","redflavor","watermelon","gummybear","redflavor","watermelon"];

  console.log(result);
    if (result > 19) {
      output = "You will slowly become a hipster";
      file_path = AUDIO_PATH+"grimes"+AUDIO_EXT;
    } else if (result > 10) {
      output = "You will eat lots of your favorite food : " + foodNames[result-11];
      file_path = AUDIO_PATH+musics[result-11]+AUDIO_EXT;


    } else if (result > 0) {
      output = "You will get a pet: " + petNames[result-1];
      var file_path = AUDIO_PATH+musics[result-1]+AUDIO_EXT;
    } else {
      output = "You will visit your dream destination" + [result+11];
    }
      var sound_pleyer = new Sound(file_path,100,true);
      sound_pleyer.init(100,false);
      sound_pleyer.start();

document.getElementById("results").innerHTML = output;

}

function Sound(source,volume,loop)
{
    this.source=source;
    this.volume=volume;
    this.loop=loop;
    var son;
    this.son=son;
    this.finish=false;
    this.stop=function()
    {
        document.body.removeChild(this.son);
    }
    this.start=function()
    {
        if(this.finish)return false;
        this.son=document.createElement("embed");
        this.son.setAttribute("src",this.source);
        this.son.setAttribute("hidden","true");
        this.son.setAttribute("volume",this.volume);
        this.son.setAttribute("autostart","true");
        this.son.setAttribute("loop",this.loop);
        document.body.appendChild(this.son);
    }
    this.remove=function()
    {
        document.body.removeChild(this.son);
        this.finish=true;
    }
    this.init=function(volume,loop)
    {
        this.finish=false;
        this.volume=volume;
        this.loop=loop;
    }
}
