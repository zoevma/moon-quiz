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
      output = "You will visit your dream destination" + destinations[result+11];
    }
document.getElementById("results").innerHTML = output;

}

// trying a method of evaluation with arrays

function giveres() {
  var x = [];
  var output;
  var one = document.getElementsByName("zmorge");
  var two = document.getElementsByName("lunch");
  var three = document.getElementsByName("drink");
  var four = document.getElementsByName("dinner");
  var five = document.getElementsByName("sweet");

  one.forEach(function(element){
    if (element.checked){
      x.push(element.value);
    }
  });

  two.forEach(function(element){
    if (element.checked){
      x.push(element.value);
    }
  });

  three.forEach(function(element){
    if (element.checked){
      x.push(element.value);
    }
    });

  four.forEach(function(element){
    if (element.checked){
      x.push(element.value);
    }
  });

  five.forEach(function(element){
    if (element.checked){
      x.push(element.value);
    }
  });

function gb(element){
  return element == 1;
}
  console.log(x.filter(gb));

function europe(element){
  return element == 2;
}
  x.filter(europe);

function asia(element){
    return element == 3;
}
  x.filter(asia);

function merica(element){
  return element == 4;
}
  x.filter(merica);

function finally(checkfilter){
  if (x.filter(gb) > x.filter(europe) || x.filter(asia) ||x.filter(merica))
  output = "Great Britain";
  else if (x.filter(europe) > x.filter(gb) || x.filter(asia) || x.filter(merica))
  output = "Europe"
}
}
