var clicks = 5;
/*---------------------------------------------------------------------------------------------------*/
function marked_rating(cell){
  var preID = cell.getAttribute("id").charAt(0);
  var subID = cell.getAttribute("id").slice(1);
  var name = cell.getAttribute("name");
  var elements = document.getElementsByName(name)
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.setProperty("background-color", "white");
    elements[i].style.setProperty("border-color", "white");
    elements[i].style.color= "black";
  }
  for (var i = 1; i <= Number(preID); i++){
      document.getElementById(i+subID).style.backgroundColor = "#00ca9b";
      document.getElementById(i+subID).style.borderColor = "#00ca9b";
      document.getElementById(i+subID).style.color = "white";
      document.getElementById(i+subID).style.transition = "0.3s";
    }
}
/*---------------------------------------------------------------------------------------------------*/
function btn_sel(here){
    if (here.className == "active"){
      clicks += 1;
      var elements = document.getElementsByClassName("btn");
      for (var i = 0; i < elements.length; i++) {
        elements[i].disabled = false;
      }
      here.className = "btn";
    }
    else if(clicks > 0){
      clicks -= 1;
      if(here.className == "btn"){
        here.className = "active";
      }
    }else{
      var elements = document.getElementsByClassName("btn");
      for (var i = 0; i < elements.length; i++) {
      elements[i].disabled = true;
    }
  }
}

function window_size(here){
  var container = document.getElementsByClassName("container");
  var container2 = document.getElementsByClassName("page-container");
  if(window.innerWidth < 750){
    console.log("hey");
    container[0].style.width = "450px";
    container2[0].style.width = "450px";
  }
  if(window.innerWidth > 750){
    container[0].style.width = "700px";
    container2[0].style.width = "700px";
  }
}
