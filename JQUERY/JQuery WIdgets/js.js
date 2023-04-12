$("document").ready(function () {
  // 🧨 DATE PICKER
  /*$("#date").datepicker({
      showOtherMonths: true,
      selectOtherMonths: true,
      showButtonPanel: true,
      changeMonth: true,
      changeYear: true,
      minDate: new Date(2000, 1, 1),
      maxDate: new Date(2024, 1, 1),
      numberOfMonths: 2,
    });
  // 🧨 HOVER MESSAGE
    $("#tool").tooltip({
      track: true,
      content: "This is place for name",
      show: { effect: "pulsate", duration: 2000, delay: 250 },
      hide: { effect: "fade", duration: 2000 },
    });
    // 🧨  DROP DOWN
    $("#div1").accordion({
      collapsible: true,
      icons: {
        header: "ui-icon-extlink",
        activeHeader: " ui-icon-arrowthick-2-ne-sw",
      },
      event: "mouseover",
    });
  
    // 🧨 MESSAGE BOX
    $("#btn1").click(function () {
      $("#dialog").dialog("open");
    });
    $("#dialog").dialog({
      title: "Title using Property",
      draggable: false,
      resizable: false,
      closeOnEscape: false,
      modal: true,
      autoOpen: false,
    });
  
    // AUTO-COMPLETE
    $("#input").autocomplete(
      {
        source: [
          "HTML",
          "Javascript",
          "Python",
          "Ruby",
          "Java",
          "C",
          "COBOL",
          "Basic",
          "Scala",
          "Perl",
          "C++",
          "C#",
          "Fortran",
          "TypeScript",
          "PHP",
          "Lisp",
        ],
      },
      {
        delay: 500,
        minLength: 3,
        autoFocus: true,
      }
    );*/

  // 🧨 WIDGET MODIFICATION
  $("#dialog").dialog({
    draggable: true,
    resizable: true,
    closeOnEscape: true,
    modal: false,
    autoOpen: true,
    height: 250,
    width: 250,
  });
  $("#btn1").click(function () {
    // alert("GET IS WORKING");
    var modal = $("#dialog").dialog("option", "height");
    alert(modal);
  });
  $("#btn2").click(function () {
    // alert("GET IS WORKING");
    $("#dialog").dialog("option", "height", 300);
  });
});
