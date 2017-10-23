$(document).ready(function() {
  $("button").click(function() {
    var flavors = ["vanilla", "mint chocolate chip", "caramel"];
    flavors.forEach(function(flavor) {
    $("ul").prepend("<li>" + flavor + "</li>");
  });

  });
});
