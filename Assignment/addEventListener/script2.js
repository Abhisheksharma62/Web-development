let offerBtn = document.getElementById("offerBtn");
        let offerMessage = document.getElementById("offerMessage");

        let taskBtn = document.getElementById("taskBtn");
        let taskMessage = document.getElementById("taskMessage");
        let progressMessage = document.getElementById("progressMessage");

       
        offerBtn.addEventListener("click", function() {
            offerMessage.textContent = "Offer claimed successfully!";
        }, { once: true });


       
        taskBtn.addEventListener("click", function() {
            taskMessage.textContent = "Course task completed.";
        });

      
        taskBtn.addEventListener("click", function() {
            progressMessage.textContent = "Progress updated successfully.";
        });