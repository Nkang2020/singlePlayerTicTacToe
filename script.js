$(document).ready(function(){
  var player = 1;
  var randomNumber = 0;
  var playerWon = false;
  function reset(){
    playerWon = false;
    if($("#turnX").hasClass("btn-default")){
      $("#turnX").removeClass("btn-default")
      $("#turnX").addClass("btn-primary")
      $("#turnO").removeClass("btn-primary")
      $("#turnO").addClass("btn-default")
      player = 1;
    }
  if($("#0").hasClass("X")){
    $("#0").removeClass("X");
    $("#0").text("#");
  }
    else{
      $("#0").removeClass("O");
    $("#0").text("#");
    }
    if($("#1").hasClass("X")){
    $("#1").removeClass("X");
    $("#1").text("#");
  }
    else{
      $("#1").removeClass("O");
    $("#1").text("#");
    }
    if($("#2").hasClass("X")){
    $("#2").removeClass("X");
    $("#2").text("#");
  }
    else{
      $("#2").removeClass("O");
    $("#2").text("#");
    }
    if($("#3").hasClass("X")){
    $("#3").removeClass("X");
    $("#3").text("#");
  }
    else{
      $("#3").removeClass("O");
    $("#3").text("#");
    }
    if($("#4").hasClass("X")){
    $("#4").removeClass("X");
    $("#4").text("#");
  }
    else{
      $("#4").removeClass("O");
    $("#4").text("#");
    }
    if($("#5").hasClass("X")){
    $("#5").removeClass("X");
    $("#5").text("#");
  }
    else{
      $("#5").removeClass("O");
    $("#5").text("#");
    }
    if($("#6").hasClass("X")){
    $("#6").removeClass("X");
    $("#6").text("#");
  }
    else{
      $("#6").removeClass("O");
    $("#6").text("#");
    }
    if($("#7").hasClass("X")){
    $("#7").removeClass("X");
    $("#7").text("#");
  }
    else{
      $("#7").removeClass("O");
    $("#7").text("#");
    }
    if($("#8").hasClass("X")){
    $("#8").removeClass("X");
    $("#8").text("#");
  }
    else{
      $("#8").removeClass("O");
    $("#8").text("#");
    }
  }
  function isOver(symbol1,symbol2){
    if(($("#0").hasClass(symbol1)||$("#0").hasClass(symbol2))&&($("#1").hasClass(symbol1)||$("#1").hasClass(symbol2))&&($("#2").hasClass(symbol1)||$("#2").hasClass(symbol2))&&($("#3").hasClass(symbol1)||$("#3").hasClass(symbol2))&&($("#4").hasClass(symbol1)||$("#4").hasClass(symbol2))&&($("#5").hasClass(symbol1)||$("#5").hasClass(symbol2))&&($("#6").hasClass(symbol1)||$("#6").hasClass(symbol2))&&($("#7").hasClass(symbol1)||$("#7").hasClass(symbol2))&&($("#8").hasClass(symbol1)||$("#8").hasClass(symbol2))){
       alert("Draw!")
       }  
  }
  $("#reset").click(function(){
    reset();
  });
  
  function newNumber(){
    randomNumber = Math.floor(Math.random()*9)
  }
  function doesItContain(){
    newNumber();
    if ($("#"+randomNumber).hasClass("X")||$("#"+randomNumber).hasClass("O")){
      doesItContain();
    }   
  }
  $(".board").click(function(){
    var squareSelected = $(this);
    
  if(squareSelected.hasClass("X")||squareSelected.hasClass("O")){
      alert("this square is already used.")
    }
    else{
      if(player === 1){
        $("#turnX").removeClass("btn-primary").addClass("btn-default");
        $("#turnO").removeClass("btn-default").addClass("btn-primary");
        squareSelected.addClass("X");
        squareSelected.text("X");
        player = 2;
      }
    }
    if($("#0").hasClass("X")&&$("#3").hasClass("X")&&$("#6").hasClass("X")){
      playerWon = true;
      alert("Winner X")
    }
    else if($("#1").hasClass("X")&&$("#4").hasClass("X")&&$("#7").hasClass("X")){
      playerWon = true;
      alert("Winner X")
    }
    else if($("#2").hasClass("X")&&$("#5").hasClass("X")&&$("#8").hasClass("X")){
      playerWon = true;
      alert("Winner X")
    }
   else if($("#0").hasClass("X")&&$("#1").hasClass("X")&&$("#2").hasClass("X")){
     playerWon = true;
      alert("Winner X")
    }
    else if($("#3").hasClass("X")&&$("#4").hasClass("X")&&$("#5").hasClass("X")){
      playerWon = true;
      alert("Winner X")
    }
    else if($("#6").hasClass("X")&&$("#7").hasClass("X")&&$("#8").hasClass("X")){
      playerWon = true;
      alert("Winner X")
    }   
    else if($("#0").hasClass("X")&&$("#4").hasClass("X")&&$("#8").hasClass("X")){
      playerWon = true;
      alert("Winner X")
    }
    else if($("#2").hasClass("X")&&$("#4").hasClass("X")&&$("#6").hasClass("X")){
      playerWon = true;
      alert("Winner X")
    }
   else
     {
      isOver("X","O");
    }
  });
   $(".board").click(function(){
     if(playerWon===false){
  if (player === 2){
    doesItContain();
    $("#turnO").removeClass("btn-primary").addClass("btn-default");
    $("#turnX").removeClass("btn-default").addClass("btn-primary");
    $("#"+randomNumber).addClass("O");
    $("#"+randomNumber).text("O");
    player = 1;
  }
    if($("#0").hasClass("O")&&$("#3").hasClass("O")&&$("#6").hasClass("O")){
      alert("Winner O")
    }
    else if($("#1").hasClass("O")&&$("#4").hasClass("O")&&$("#7").hasClass("O")){
      alert("Winner O")
    }
    else if($("#2").hasClass("O")&&$("#5").hasClass("O")&&$("#8").hasClass("O")){
      alert("Winner O")
    }
   else if($("#0").hasClass("O")&&$("#1").hasClass("O")&&$("#2").hasClass("O")){
      alert("Winner O")
    }
    else if($("#3").hasClass("O")&&$("#4").hasClass("O")&&$("#5").hasClass("O")){
      alert("Winner O")
    }
    else if($("#6").hasClass("O")&&$("#7").hasClass("O")&&$("#8").hasClass("O")){
      alert("Winner O")
    }   
    else if($("#0").hasClass("O")&&$("#4").hasClass("O")&&$("#8").hasClass("O")){
      alert("Winner O")
    }
    else if($("#2").hasClass("O")&&$("#4").hasClass("O")&&$("#6").hasClass("O")){
      alert("Winner O")
    }
   else
     {
      isOver("X","O");
    }
     }
 });
});