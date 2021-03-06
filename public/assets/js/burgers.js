// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

  $(".devour-burger").on("click", function (event) {
    var id = $(this).data("id");
    var devouredState = $(this).data("devouredState");
    console.log(devouredState);
    var newDevouredState = {
      devoured: true
    };
    console.log(newDevouredState);
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("changed devoured state to", newDevouredState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
    
  });
  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");
    delete(id)
    console.log(id);
    $.ajax("/api/burgers/" + id,{
      type: "DELETE",
      
    }).then(
      function() {
        console.log("deleted Burger", id);
      location.reload();
    })
  })

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burger_name").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
})