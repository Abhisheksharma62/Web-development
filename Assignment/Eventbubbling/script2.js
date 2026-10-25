 let grandparent1 = document.getElementById("grandparent1");
        let parent1 = document.getElementById("parent1");
        let child1 = document.getElementById("child1");

        
        grandparent1.addEventListener("click", function() {
            console.log(" Student dashboard clicked");
        });

       
        parent1.addEventListener("click", function() {
            console.log(" Course section clicked");
        });

       
        child1.addEventListener("click", function(event) {
            console.log(" View Course Details clicked");

           
            event.stopPropagation();
        });
           