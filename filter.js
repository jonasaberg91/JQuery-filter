// 1.0 loop through elements and count items in list
var elements = document.getElementsByClassName('div-class');
var msg = elements.length;

var fun = {
  fire: function(value){  
      if(sel.value == value) {
        var elts = document.getElementsByClassName('div-class');
        for(var i=0; i<elts.length; i++){
          var content = elts[i];
          var ct = content.getElementsByClassName('div-class');
          console.log(ct);
          if(ct[0].textContent.indexOf(value)<0) elts[i].className = 'div-class hide'; // add css element hide with display none
          else elts[i].className = 'div-class show'; // add css element show with display block
        }
    }            
  }
};

// 2.0 print out number of items in list
document.getElementById('field-count').innerHTML = "Showing all content " + "<span>(" + msg + ")</span>";
document.getElementById("sel").addEventListener("change", function(){                        
    if(sel.value == "div-class") {
      fun.fire('div-class');
  }
  else if (sel.value == "div-class"){
   fun.fire('div-class');
  }
}, false);