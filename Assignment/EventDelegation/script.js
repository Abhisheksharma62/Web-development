
        const studentList = document.getElementById("studentList");
        const studentOutput = document.getElementById("studentOutput");

        studentList.addEventListener("click", function(event) {
            if (event.target.matches("li")) {
                studentOutput.textContent =
                    "You selected " + event.target.textContent;
            }
        });


       
        const taskInput = document.getElementById("taskInput");
        const addTaskBtn = document.getElementById("addTaskBtn");
        const taskList = document.getElementById("taskList");
        const taskOutput = document.getElementById("taskOutput");

        addTaskBtn.addEventListener("click", function() {
            const taskName = taskInput.value.trim();

            if (taskName === "") {
                alert("Please enter a task!");
                return;
            }

            const li = document.createElement("li");
            li.textContent = taskName;
            taskList.append(li);

            taskInput.value = "";
        });

        taskList.addEventListener("click", function(event) {
            if (event.target.matches("li")) {
                taskOutput.textContent =
                    "Selected Task: " + event.target.textContent;
            }
        });