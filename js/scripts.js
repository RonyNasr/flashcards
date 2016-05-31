var active="";

$(document).ready(function(){
  $(".flashcard").click(function(){
    $("#"+this.id + " .term").toggle();
    $("#"+this.id + " .definition").toggle();
    togglePrevious(active);
     //active=this.id;
     //alert("toggled");
  });
});


var togglePrevious = function(previous){
if (previous !== "" && previous !== this.id){
  $("#"+previous + " .term").toggle();
  $("#"+previous + " .definition").toggle();
  //alert("toggled");

  }
}
