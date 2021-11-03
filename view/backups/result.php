<?php //include "../script.js";?>

<div class="result" id="result"style="display:none;">
  <h2>Du hast eine</h2>

 <div class="dice_wrapper">


    <?php 
    
    for($d=1;$d<=5;$d++){
      include 'wuerfel.php';
    }

    ?>
 
 </div>
 
  <h2>gewürfelt</h2>

</div>
</form>



