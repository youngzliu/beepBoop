$(document).ready(function(){
  $("form#beepForm").submit(function(event){
    event.preventDefault();
    var stop = parseInt($("#beepInput").val());
    for (var i = 0; i <  stop; i++){
      $("#results").append(i);
    }
  })
});
