function check() {
  window.alert("clicked");
  
  var a1 = document.getElementById("a1").checked;
    var a3 = document.getElementById("a3").checked;

    if (a1) {
        document.getElementById("result").innerHTML = "you will get a rose as a gift";
    } if else (a1 && a3) {
        document.getElementById("result").innerHTML = "you will get a black rose as a gift";
    }


}
