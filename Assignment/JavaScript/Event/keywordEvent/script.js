const input=document.getElementById("input");
const press=document.getElementById("press");

function down(){

    press.innerText="A key was pressed";
}
function up(){
    press.innerText="The key was released";
    press.classList.add("text-primary");
}
  function showKeyDown() {
            document.getElementById("keyDownStatus").innerText =
                "A key was pressed!";
        }

        function showKeyUp() {
            document.getElementById("keyUpStatus").innerText =
                "A key was released!";
        }