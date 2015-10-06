$(document).ready(function() {
  $("#hiss").click(function(){
    $("#hiss-showing").toggle();
    $("#hiss-hidden").toggle();
  });

  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Bark!</li>");
    $("ul#stop").prepend("<li>No wet food for you tonight!</li>");
  });


  $("button#bark").click(function() {
    $("ul#cat").prepend("<li>Hiss!</li>");
    $("ul#dog").prepend("<li>Woof!</li>");
    $("ul#stop").prepend("<li>Dangit, Ranger!</li>");
  });

  $("button#stop").click(function() {
    $("ul#cat").prepend("<li>::ignores::</li>");
    $("ul#dog").prepend("<li>::whimpers::</li>");
    $("ul#stop").prepend("<li>Oh all right. Come snuggle with me.</li>");
  });


});
