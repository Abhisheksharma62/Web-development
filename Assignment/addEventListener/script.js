        
        let message = document.getElementById("message");

        function showProfile() {
            message.textContent = "Your profile details are displayed.";
        }

     
        document.getElementById("profileBtn")
            .addEventListener("click", showProfile);


       
        document.getElementById("courseBtn")
            .addEventListener("click", () => {
                message.textContent = "Your course details are displayed.";
            });


        
        document.getElementById("attendanceBtn")
            .addEventListener("click", function() {
                message.textContent = "Your attendance details are displayed.";
            });

