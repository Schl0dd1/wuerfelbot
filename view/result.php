<?php //include "../script.js";?>

<div class="result" id="result"style="display:none;">
  <p>Du hast eine</p>

 <div class="dice_wrapper">


    <?php 
    
    for($d=1;$d<=5;$d++){
      include 'wuerfel.php';
    }

    ?>
 
 </div>
 
  <p>gewürfelt.</p>

</div>
</form>



