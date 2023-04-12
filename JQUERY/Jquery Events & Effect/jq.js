// 🎈 EVENTS IN JQUERY
/*function func1() {
  document.getElementById("img1").style.width = "500px";
}*/

/*$("button").click(func1);
function func1() {
  $("#img1").css("width", "500px");
}*/

// $("document").ready(function () {
//   /*$("button").dblclick(function () {
//     function func1() {
//     $("#img1").css("width", "500px");
//   });*/

//   // mouse🏊‍♂️
//   /*$("#img1").mouseenter(function () {
//     $("#img1").css("width", "500px");
//   });
//   $("#img1").mouseleave(function () {
//     $("#img1").css("width", "300px");
//   });*/

//   $("#img1").hover(func1, func2);
//   function func1() {
//     $("#img1").css("width", "500px");
//   }
//   function func2() {
//     $("#img1").css("width", "300px");
//   }
// })

// 🎈 EFFECTS IN JQUERY
/*$("document").ready(function () {
  $("#btn1").click(function () {
    $("#img1").hide();
  });
  $("#btn2").click(function () {
    $("#img1").show();
  });
  $("#btn3").click(function () {
    $("#img1").toggle(); //perform the task of both hide and show
  });
  $("#btn4").click(function () {
    $("#img1").fadeIn(2000);
  });
  $("#btn5").click(function () {
    $("#img1").fadeOut();
  });
  $("#btn6").click(function () {
    $("#img1").fadeToggle();
  });
  $("#btn7").click(function () {
    $("#img1").slideUp(2000);
  });
  $("#btn8").click(function () {
    $("#img1").slideDown(2000);
  });
  $("#btn9").click(function () {
    $("#img1").slideToggle(2000);
  });
  $("#btn10").click(function () {
    $("#img1").stop(2000);
  });
});*/

$("document").ready(function () {
  $("#btn1").click(function () {
    $("#img1").animate(
      {
        left: "150px",
        opacity: "1",
        height: "300px",
        width: "300px",
      },
      "slow"
    );
  });
  $("#btn2").click(function () {
    $("#img1").animate(
      {
        left: "0px",
        opacity: "0.4",
        postion: "absolute",
      },
      "slow"
    );
  });
});

// $('#img1').animate({}, 2000, function(){})

/*$("document").ready(function () {
  $("#btn1").click(function () {
    $("#img1").slideUp(2000, function () {
      $("#img1").slideDown(2000);
    });
  });
});*/
/*$("document").ready(function () {
  $("#btn1").click(function () {
    $("#img1")
      .slideUp(2000)
      .css("opacity", "1")
      .slideDown(3000)
      .fadeOut(2000)
      .fadeIn(2000);
  });
});*/
