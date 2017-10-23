$(document).ready(function() {
  $("form").submit(function(event) {
    var items = ["item1", "item2", "item3", "item4"];
    var myList = [];

    items.forEach(function(item) {
      var userInput = $("input#" + item).val();
      myList.push(userInput);
    });

    var myListUpper = myList.map(function(item) {
      return item.toUpperCase();
    });

    var myListUpperSort = myListUpper.sort();
    myListUpperSort.forEach(function(li) {
      $(".flavs").append("<li>" + li + "</li>");
    })


  event.preventDefault();
  });
});




//   flavors.forEach(function(flavor) {
//   $("ul").prepend("<li>" + flavor + "</li>");
// });
