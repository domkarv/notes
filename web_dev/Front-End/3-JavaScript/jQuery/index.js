$(document).keydown(function (event) {
  $("h1").text(event.key);
});

$("p").on({
  mouseenter: function () {
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function () {
    $(this).css("background-color", "lightblue");
  },
  click: function () {
    $(this).css("background-color", "yellow");
  },
});

$("button").click(function () {
  $("div").slideUp().slideDown().animate({
    left: "250px",
    opacity: "0.5",
    height: "150px",
    width: "150px",
  });
});
