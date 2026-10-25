let grandparent1 = document.getElementById("grandparent1");
        let parent1 = document.getElementById("parent1");
        let captureBtn = document.getElementById("captureBtn");
        let bubbleBtn = document.getElementById("bubbleBtn");

    
       
        grandparent1.addEventListener("click", function(event) {
            if (event.target === captureBtn) {
                console.log(" Grandparent");
            }
        }, { capture: true });

        parent1.addEventListener("click", function(event) {
            if (event.target === captureBtn) {
                console.log(" Parent");
            }
        }, { capture: true });

      
        captureBtn.addEventListener("click", function() {
            console.log("Capturing: Child");
        });


        
        grandparent1.addEventListener("click", function(event) {
            if (event.target === bubbleBtn) {
                console.log("Bubbling: Grandparent");
            }
        });

        parent1.addEventListener("click", function(event) {
            if (event.target === bubbleBtn) {
                console.log("Bubbling: Parent");
            }
        });

        bubbleBtn.addEventListener("click", function() {
            console.log("Bubbling: Child");
        });