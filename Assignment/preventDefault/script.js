
        const cssLink = document.getElementById("cssLink");

        cssLink.addEventListener("click", function(event) {
           
            event.preventDefault();

            console.log("CSS Course link clicked. Navigation prevented.");
        });
 
const registrationForm = document.getElementById("registrationForm");
const nameInput = document.getElementById("nameInput");
const feedback = document.getElementById("feedback");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();

  if (name === "") {
    feedback.textContent = "Please enter your name.";
  } else {
    feedback.textContent = "Welcome, " + name + "!";
  }
});
