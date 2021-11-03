<?php //include "../script.js";?>

<div class="result" id="result"style="display:none;">
  <p>Du hast eine</p>
  <div class="dice">
      <div class="rows">
        <div class="dots" id="ol">&nbsp;&nbsp;&nbsp;</div>
        <div class="dots">&nbsp;&nbsp;&nbsp;</div>
        <div class="dots" id="or">&nbsp;&nbsp;&nbsp;</div>
      </div>
      <div class="rows">
        <div class="dots" id="ml">&nbsp;&nbsp;&nbsp;</div>
        <div class="dots" id="m">&nbsp;&nbsp;&nbsp;</div>
        <div class="dots" id="mr">&nbsp;&nbsp;&nbsp;</div>
      </div>
      <div class="rows">
        <div class="dots" id="ul">&nbsp;&nbsp;&nbsp;</div>
        <div class="dots">&nbsp;&nbsp;&nbsp;</div>
        <div class="dots" id="ur">&nbsp;&nbsp;&nbsp;</div>
      </div>
    </div> 
  <p>gewürfelt.</p>

  <p></p>
</div>
</form>

<script>
  //code-verlinkung zu script.js/script.php funktioniert nicht 

var num = 0;
var ol = document.getElementById('ol');
var or = document.getElementById('or');
var ml = document.getElementById('ml');
var m = document.getElementById('m');
var mr = document.getElementById('mr');
var ul = document.getElementById('ul');
var ur = document.getElementById('ur');
let arr = new Array(ol,or,ml,m,mr,ul,ur);


function throw_dice() {
  var x = document.getElementById("result"); //lässt div mit würfel erscheinen
  if (x.style.display==="none"){
    x.style.display = "flex";
  }
  
//funktioniert nicht: 
  /*for (let i = 0; i < arr.length; i++) {
    i.style.backgroundColor ="white"; //clear dice after throwing
  } */

  num = Math.floor(Math.random() * (1,6)+1);
  
  switch(num){
    case 1: m.style.backgroundColor = "red"; 
    break;
    case 2: 
      or.style.backgroundColor = "red";
      ul.style.backgroundColor = "red";  
    break;
    case 3: 
      m.style.backgroundColor = "red"; 
      or.style.backgroundColor = "red";
      ul.style.backgroundColor = "red";
    break;
    case 4:
      or.style.backgroundColor = "red";
      ul.style.backgroundColor = "red";  
      ol.style.backgroundColor = "red";
      ur.style.backgroundColor = "red";  
    break;
    case 5: 
      m.style.backgroundColor = "red";
      or.style.backgroundColor = "red";
      ul.style.backgroundColor = "red";  
      ol.style.backgroundColor = "red";
      ur.style.backgroundColor = "red"; 
    break;
    case 6:
      or.style.backgroundColor = "red";
      ul.style.backgroundColor = "red";  
      ol.style.backgroundColor = "red";
      ur.style.backgroundColor = "red"; 
      ml.style.backgroundColor = "red";
      mr.style.backgroundColor = "red";
    break; 
 
/* switch(num){
    case 1 || 3 || 5: m.style.backgroundColor = "red"; 
    break;
    case 2 || 3 || 4 || 5: 
      or.style.backgroundColor = "red";
      ul.style.backgroundColor = "red";  
    break;
    case 4 || 5 || 6:
      ol.style.backgroundColor = "red";
      ur.style.backgroundColor = "red";  
    break;
    case 6:
      ml.style.backgroundColor = "red";
      mr.style.backgroundColor = "red";
    break; */
  }
}


</script>

