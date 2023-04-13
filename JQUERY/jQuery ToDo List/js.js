$("document").ready(function () {
  $("#button").click(function () {
    var toAdd = $("input[name=ListItem]").val();
    $("ul").append("<li>" + toAdd + "</li>");
  });

  $(document).on("dblclick", "li", function () {
    $(this).toggleClass("strike").fadeOut("slow");
  });
  // to empty the textbox again on clicking on it
  $("input").focus(function () {
    $(this).val(" ");
  });
  $("ul").sortable();
});
