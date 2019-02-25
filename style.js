function cal(num){
  return document.getElementById("show").value += num;
}
function equal(num){
  var ada = document.getElementById("show").value;
  if (ada) {
    return document.getElementById("show").value  = eval(ada);
  }
}
function clean(){
  document.getElementById("show").value ="";
}
