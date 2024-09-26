console.log("from script file");
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "") {
    x.innerHTML = "Swapped text!";
  } else {
    x.innerHTML = "";
  }
}
