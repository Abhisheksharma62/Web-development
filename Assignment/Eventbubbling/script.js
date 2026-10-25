 let grandparent = document.getElementById("grandparent");
        let parent = document.getElementById("parent");
        let child = document.getElementById("child");

       
        child.addEventListener("click", function() {
            console.log(" Button clicked");
        });

   
        parent.addEventListener("click", function() {
            console.log(" Parent div clicked");
        });

        grandparent.addEventListener("click", function() {
            console.log(" Grandparent div clicked");
        });

