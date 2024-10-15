document.addEventListener("DOMContentLoaded", function() {
    if(localStorage.getItem("loggedIn")){
        window.location.href = "../Main Page/main.html";
    }
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    const signUpForm = document.getElementById("signUpForm");
    document.getElementById("checkbox").checked = false;

    if (signUpForm) {
        signUpForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const newEmail = document.getElementById("email").value;
            const newPassword = document.getElementById("password").value;
            const errorMsg = document.getElementById("errorMsg");

            function emailValidation(){
                if(!emailAddress.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                    return false;
                }
                    return true;
            }

            function validatePassword(password){
                var passwordRe=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\s]{8,}$/;
                return passwordRe.test(password);
            }

            if (newEmail !== "" && newPassword !== "" && emailValidation() && validatePassword(newPassword)) {
                localStorage.setItem("loggedIn", true);
                localStorage.setItem("newEmail", newEmail);
                localStorage.setItem("newPassword", newPassword);
                window.location.href = "login.html";
            } else {
                if(newEmail === "" || newPassword === ""){
                    errorMsg.textContent = "Please fill out both fields.";
                    password.style.marginBottom = "2rem";
                    button.style.marginTop = "0.4rem";
                    errorMsg.style.marginLeft = "7.5rem";
                }else if(!validatePassword(newPassword)){
                    errorMsg.textContent = "Password must include at least 8 characters, 1 upper case letter and 1 number";
                    errorMsg.style.textAlign = "center";
                    password.style.marginBottom = "2rem";
                    button.style.marginTop = "1.5rem";
                    errorMsg.style.marginLeft = "1rem";
                    errorMsg.style.marginRight = "1rem";
                }

                password.style.border = "rgba(140, 5, 0, 0.5) solid 3px"
                email.style.border = "rgba(140, 5, 0, 0.5) solid 3px"
            }
        });
    }
});
