//Back end
var containZero = function(num){
  if (num.toString().match(/0/) != null){
    return true;
  }
  else {
    return false;
  }
};

var containOne = function(num){
  if (num.toString().match(/1/) != null){
    return true;
  }
  else {
    return false;
  }
};

var divisThree = function(num){
  if (num % 3 === 0)
    return true;
  else {
    return false;
  }
};

var processInput = function(num){
  //Edge case for 0
  if(num === 0){
    return '"Beep!"';
  }
  else if (divisThree(num)){
    return '"I\'m sorry, Dave. I\'m afraid I can\'t do that."';
  }
  else if (containOne(num)){
    return '"Boop!"';
  }
  else if (containZero(num)){
    return '"Beep!"';
  }
  else {
    return num;
  }
};

//Front End
$(document).ready(function(){
  $("form#beepForm").submit(function(event){
    event.preventDefault();
    // This allows for exponential and float inputs
    var stop = Math.floor(Number($("#beepInput").val()));
    $("#results").html("");
    var result = "";
    for (var i = 0; i < stop; i++){
      result += processInput(i) + ", ";
    }
    result += processInput(stop);
    $("#results").typedText(result, 50);
  });
});
