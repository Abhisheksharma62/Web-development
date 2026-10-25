 let showBtn = document.getElementById("showBtn");
        let stopBtn = document.getElementById("stopBtn");
        let message = document.getElementById("message");

        
        function showNotification() {
            message.textContent = "New notification: Welcome to RICR!";
        }

       
        showBtn.addEventListener("click", showNotification);

       
        stopBtn.addEventListener("click", function() {

          
            showBtn.removeEventListener("click", showNotification);

            message.textContent = "Notifications stopped!";
        });