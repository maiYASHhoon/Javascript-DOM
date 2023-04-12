$("document").ready(function () {
  // 🎆 # when id is specified
  // 🎆 . when class is specified

  // to diplay the code outside the box from span tag
  /*$(".div1").click(function () {
      var x = $(".p1").html();
      $("#span1").text(x);
    });
    $(".div1").click(function () {
      alert($(".p1").text());
      //  .html() displays the html txt This is <i>box 1</i>
      // .text() display the text in the box
    });
  
    $(".p1").click(function () {
      alert($(".p1").attr("id"));
    });
    $("#btn1").click(function () {
      $(".p1").attr("id", "p2id");
    });
    // the id of the paragraph can be changed by attribute tag
  
    $("#btn1").click(function () {
      $(".div1").css("background-color", "green");
    });
    $(".div1").click(function () {
      alert($(".div1").css("background-color"));
    });
  
    // 🎇 APPEND AND PREPEND METHOD AFTER BEFORE REMOVE AND EMPTY 🎇
  
    $("#btn1").click(function () {
      $(".div1").append("<p> This is new text </p>");
    });*/

  $("#btn1").click(function () {
    $(".div1").append(
      '<img src= "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" height = "100px" width= "100px" >'
    );
  });
  $("#btn2").click(function () {
    $(".div1").prepend("<p>This is using prepend</p>");
  });
  $("#btn3").click(function () {
    $(".div1").before("<p>This is the before method</p>");
  });
  $("#btn4").click(function () {
    $(".div1").after("<p>This is the after method</p>");
  });
  $("#btn5").click(function () {
    $(".div1").remove();
  });
  $("#btn6").click(function () {
    $(".div1").empty();
  });
});
