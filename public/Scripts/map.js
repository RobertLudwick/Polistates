var open = false;
var xmlns     ="http://www.w3.org/2000/svg";
var svg       = document.createElementNS (xmlns, "svg");

svg.setAttributeNS(null, 'width' ,  1000);
svg.setAttributeNS(null, 'height',  1000);

var hexsize = 150;
var hexlocationx = 0;
var hexlocationy = 0;
var polygon = document.createElementNS(xmlns, "polygon");

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

function hexagon(hexsize){
    var array = arr = [ [ 300,150 ], [ 225,280 ],[ 75,280 ], [ 0,150 ], [ 75,20 ],[ 225,20 ], ];
    var hexstring = "";
    var x = 300
    var x0 = 0
    var y = 150
    var y0 = 150
    console.log(Math.sqrt( ( x -= x0 ) * x + ( y -= y0 ) * y ));
    array[0][0] = hexsize *2;
    array[0][1] = hexsize;
    array[1][0] = hexsize *1.5;
    //array[1][1] = (hexsize *2)/8;
    array[2][0] = hexsize /2;
    //array[2][1] = hexsize *2;
    array[3][0] = 0;
    array[3][1] = hexsize;
    array[4][0] = hexsize /2;
    array[4][1] = 20;
    array[5][0] = hexsize *1.5;
    array[5][1] = 20;

    for (value of array) {
        hexstring = hexstring.concat(value[0].toString() + "," + value[1].toString() + " " );
    }

    console.log(hexstring)

    polygon.setAttributeNS(null, "points", hexstring);
    polygon.setAttributeNS(null, "stroke", "black");
    polygon.setAttributeNS(null, "stroke-width", "2");
    polygon.setAttributeNS(null, "class", "hex");

    svg.appendChild(polygon);
    document.getElementsByTagName('map')[0].appendChild(svg);
}