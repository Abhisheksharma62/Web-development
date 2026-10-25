 let showBtn1 = document.getElementById("showBtn1");
        let disableBtn = document.getElementById("disableBtn");
        let message1 = document.getElementById("message1");

        function showCourseMessage() {
            message1.textContent = "Welcome to the RICR course portal!";
        }

      
        showBtn1.addEventListener("click", showCourseMessage);

      
        disableBtn.addEventListener("click", function() {
            showBtn1.removeEventListener("click", showCourseMessage);

            message1.textContent = "Course message disabled!";
        });

     