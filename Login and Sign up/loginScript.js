document.addEventListener("DOMContentLoaded", function() {
    if(localStorage.getItem("loggedIn")){
        window.location.href = "../Main Page/main.html";
    }
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    const loginForm = document.getElementById("loginForm");
    document.getElementById("checkbox").checked = false;

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const inputedEmail = document.getElementById("email").value;
            const inputedPassword = document.getElementById("password").value;
            const errorMsg = document.getElementById("errorMsg");

            if (inputedEmail === localStorage.getItem("newEmail") && inputedPassword === localStorage.getItem("newPassword")) {
                localStorage.setItem("loggedIn", true);
                window.location.href = "../Main Page/main.html";
            } else {
                errorMsg.textContent = "Invalid username or password";
                password.style.border = "rgba(140, 5, 0, 0.5) solid 3px"
                password.style.marginBottom = "2rem";
            }
        });
    }
});