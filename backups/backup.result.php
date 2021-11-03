<?php //include "../script.js";?>

<div class="result" id="result"style="display:none;">
  <p>Du hast eine</p>
 <div class="dice"><h2 id="ausgabe"></h2></div> 
  <p>gewürfelt.</p>

  <p></p>
</div>
</form>

<script>
  //code-verlinkung zu script.js/script.php funktioniert nicht 

var num = 0;
function throw_dice() {
  var x = document.getElementById("result");
  if (x.style.display==="none"){
    x.style.display = "flex";
  }
  
  num = Math.floor(Math.random() * (1,6)+1);
  document.getElementById("ausgabe").innerHTML = num;
}


</script>

<?php 



?>