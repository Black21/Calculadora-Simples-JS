function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
        var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }

function outcome() {
  let num1 = Number(document.getElementById("num-one").value = 0);
  let num2 = Number(document.getElementById("num-two").value = 0);
  let total = 0;

  if (document.getElementById("box1").checked) total = num1 + num2;
  else if (document.getElementById("box2").checked) total = num1 - num2;
  else if (document.getElementById("box3").checked) total = num1 * num2;
  else total = num1 / num2;
  document.getElementById("resultArea").innerHTML =
    "Resultado: " + String(total);
}
function limpar() {
  document.getElementById("num-one").value = 0;
  document.getElementById("num-two").value = 0;
  document.getElementById("resultArea").innerHTML = "";
}
