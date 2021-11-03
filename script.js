
  //code-verlinkung zu script.js/script.php funktioniert nicht 
  var dice_num = 5;

  var num = 0;
  var ol = document.getElementById('ol');
  var or = document.getElementById('or');
  var ml = document.getElementById('ml');
  var m = document.getElementById('m');
  var mr = document.getElementById('mr');
  var ul = document.getElementById('ul');
  var ur = document.getElementById('ur');
  let arr = new Array(ol,or,ml,m,mr,ul,ur);
  
  function throw_all_dices (){
      for(d = 1; d<=dice_num; d++){
      throw_dice(d);
    }
  }
  
  
  
  function throw_dice(d) {

    var x = document.getElementById("result"); //lässt div mit würfel erscheinen
    if (x.style.display==="none"){
         x.style.display = "flex";
        }


    function set_back_color(item,index,arr){
      arr[index].style.backgroundColor ="white";
    }

    
    ol = document.getElementById('ol'+d);
    or = document.getElementById('or'+d);
    ml = document.getElementById('ml'+d);
    m = document.getElementById('m'+d);
    mr = document.getElementById('mr'+d);
    ul = document.getElementById('ul'+d);
    ur = document.getElementById('ur'+d);
    arr = new Array(ol,or,ml,m,mr,ul,ur);

        arr.forEach(set_back_color);

   
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
  
   
    
    }
  }


