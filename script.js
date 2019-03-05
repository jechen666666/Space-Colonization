$(".container").mousemove (function(e) {
  var moveX = (e.pageX * -1/15);
  var moveY = (e.pageY * -1/15);
  $(".container").css("background-position", moveX + "px " + moveY + "px");
});

$(".chosenOne").hide();

$(".chosenTwo").hide();

$(".cplanetOne").hide();

$(".cplanetTwo").hide();

$(".cplanetThree").hide();

$(".hplanetOne").click (function() {
    $(".hplanets").hide();
    $("h1").hide();
    $(".chosenOne").show();
    $(".cplanetOne").show();
    $(".cplanetTwo").show();
    $(".cplanetThree").show();
});

$(".hplanetTwo").click (function() {
    $(".hplanets").hide();
    $("h1").hide();
    $(".chosenTwo").show();
    $(".cplanetOne").show();
    $(".cplanetTwo").show();
    $(".cplanetThree").show();
});

$(".hplanetOne").mouseenter (function() {
    $(".hplanetOne").css("transform", "translateY(-15px)");
});

$(".hplanetOne").mouseleave (function() {
    $(".hplanetOne").css("transform", "translateY(0px)");
});

$(".hplanetTwo").mouseenter (function() {
    $(".hplanetTwo").css("transform", "translateY(-15px)");
});

$(".hplanetTwo").mouseleave (function() {
    $(".hplanetTwo").css ("transform", "translateY(0px)");
});



    