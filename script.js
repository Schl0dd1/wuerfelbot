
  //code-verlinkung zu script.js/script.php funktioniert nicht 
  let dice_num = 5;

  let num = 0;
  let ol = document.getElementById('ol');
  let or = document.getElementById('or');
  let ml = document.getElementById('ml');
  let m = document.getElementById('m');
  let mr = document.getElementById('mr');
  let ul = document.getElementById('ul');
  let ur = document.getElementById('ur');
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
    let color = "#238465";
    
    switch(num){
      case 1: m.style.backgroundColor = color; 
      break;
      case 2: 
        or.style.backgroundColor = color;
        ul.style.backgroundColor = color;  
      break;
      case 3: 
        m.style.backgroundColor = color; 
        or.style.backgroundColor = color;
        ul.style.backgroundColor = color;
      break;
      case 4:
        or.style.backgroundColor = color;
        ul.style.backgroundColor = color;  
        ol.style.backgroundColor = color;
        ur.style.backgroundColor = color;  
      break;
      case 5: 
        m.style.backgroundColor = color;
        or.style.backgroundColor = color;
        ul.style.backgroundColor = color;  
        ol.style.backgroundColor = color;
        ur.style.backgroundColor = color; 
      break;
      case 6:
        or.style.backgroundColor = color;
        ul.style.backgroundColor = color;  
        ol.style.backgroundColor = color;
        ur.style.backgroundColor = color; 
        ml.style.backgroundColor = color;
        mr.style.backgroundColor = color;
      break; 
  
   
    
    }

    result.classList.remove('hidden');
    loader.classList.add('hidden');
  }


