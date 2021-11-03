
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
    
  
  
    arr.forEach(set_back_color);
    function set_back_color(item,index,arr){
      arr[index].style.backgroundColor ="white";
    }
  
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


