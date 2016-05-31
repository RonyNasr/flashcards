var active;
var previous = "";

$(document).ready(function(){
  $(".flashcard").click(function(){
    active=this.id;
    $("#"+this.id + " .term").toggle();
    $("#"+this.id + " .definition").toggle();
    togglePrevious(active,previous);
    previous=this.id;
     //alert("active toggled");
  });
});


var togglePrevious = function(active,previous){
if (previous !== "" && previous !== active){
  $("#"+previous + " .term").toggle();
  $("#"+previous + " .definition").toggle();
//  alert("prev toggled");

  }
}
