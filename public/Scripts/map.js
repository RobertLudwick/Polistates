var open = false;

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    //document.getElementById("main").style.marginLeft = "250px";
    //document.getElementById("myDIV").style.display="none";
    open = true;
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    //document.getElementById("main").style.marginLeft= "0";
    //document.getElementById("myDIV").style.display="none";
    open =false;
  }

  function toggle() {
    if (open == false){
        openNav()
    }
    else{
        closeNav()
    }
  }
