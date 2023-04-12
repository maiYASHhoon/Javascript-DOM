$("document").ready(function () {
  // 🧨  Draggable Interaction
  /*$(".box").draggable({
      // axis: "y",
      cursor: "grabbing",
      opacity: "0.5",
      // contatinment: "parent", // will move in parent box direction only
      // grid: [300, 300],
      snap: true,
      snapTolerance: 100,
    });
  
    // 🧨  Sortable Interaction
    $(".sort").sortable({
      opacity: 0.5,
      cursor: "grabbing",
      containment: "parent",
      delay: 300,
      distance: 50,
    });*/

  // 🧨  Resizable Interaction
  $("#img1").resizable({
    // animate: true,
    maxHeight: 400,
    maxWidth: 400,
    minHeight: 150,
    minWidth: 150,
    ghost: true,
    aspectRatio: 16 / 9,
  });
});
