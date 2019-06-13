//front end logic
$(document).ready(function() {
  console.log("jQuery is working");
  $("form#input").submit(function(event) {
    event.preventDefault()
    var userInput = parseInt($("input#number").val());

    console.log(userInput)
    $("#result").append(userInput);
  });
});
