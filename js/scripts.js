


$(document).ready(function(){
  $(".flashcard").click(function(){
    $("#"+this.id + " .term").toggle();
    $("#"+this.id + " .definition").toggle();
  });
});
