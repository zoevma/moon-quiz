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
  console.log(result);
    if (result > 19) {
    output = "You will slowly become a hipster";
    } else if (result > 10) {
      output = "You will eat lots of your favorite food : " + foodNames[result-11];
    } else if (result > 0) {
      output = "You will get a pet: " + petNames[result-1];
    } else {
      output = "You will visit your dream destination" + [result+11];
    }
document.getElementById("results").innerHTML = output;

}
