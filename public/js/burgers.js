// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    //eatBurger class
    $(".eatBurger").on("click", function(event) {


      let id = $(this).data("id");
      let devouredState = {
//devoured set to true
        devoured: 1 
    
      };

      console.log(devouredState)
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(function() {
          console.log("Burger devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

     

    $(".delete-burger").on("click", function(event) {
      let id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  