let grandparent = document.getElementById("grandparent");
        let parent = document.getElementById("parent");
        let child = document.getElementById("child");

      
        grandparent.addEventListener("click", function() {
            console.log("Grandparent clicked");
        }, true);

      
        parent.addEventListener("click", function() {
            console.log("Parent clicked");
        }, true);


        child.addEventListener("click", function() {
            console.log("Child button clicked");
        });