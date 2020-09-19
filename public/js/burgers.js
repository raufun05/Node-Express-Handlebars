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
  



    // $(".create-form").on("submit", function(event) {
    //   // Make sure to preventDefault on a submit event.(prvent initial load)
    //   event.preventDefault();
  //creates new burger
      //let newBurger = {
       // name: $("#ca")
       // .val()
        //.trim(),
        //devoured: 0
      //};

      // Send the POST request.
    //   $.ajax("/api/burgers", {
    //     type: "POST",
    //     data: newBurger
    //   }).then(
    //     function() {
    //       console.log("created new burger");
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  




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
  