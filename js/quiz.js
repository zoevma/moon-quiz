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
    var foodNames = ["lazania","sandwich","pasta","m&ms","cheese"];

  console.log(result);
    if (result > 19) {
    output = "You will slowly become a hipster" ;
    } else if (result > 10) {
      output = "You will eat lots of your favorite food :" + foodNames[result-11];
    } else if (result > 0) {
      output = "You will get a pet";
    } else {
      output = "You will visit your dream destination";
    }
document.getElementById("results").innerHTML = output;

}
