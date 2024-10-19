// Initialize state based on login status
if(localStorage.getItem("loggedIn") === "true"){
    document.getElementById("signUpButton").hidden = true;
    document.getElementById("loginButton").hidden = true;
    document.getElementById("profile").hidden = false;
}else{
    document.getElementById("signUpButton").hidden = false;
    document.getElementById("loginButton").hidden = false;
    document.getElementById("profile").hidden = true;
}

// Sign out functionality
function signOut(){
    localStorage.removeItem("loggedIn");
    window.location.href = "../Login and Sign up/login.html";
}

// Hiding and showing the menu and profile elements
var showMenu = document.getElementById('menu_bar');
var showProfile = document.getElementById('user_info');
var displayMenu = 0;
var displayProfile = 0;

function hideShowMenu() {
    if (displayMenu === 0) {
        showMenu.classList.add('show');
        displayMenu = 1;
    } else {
        showMenu.classList.remove('show');
        displayMenu = 0;
    }
}

function hideShowProfile() {
    if (displayProfile === 0) {
        showProfile.classList.add('show');
        displayProfile = 1;
    } else {
        showProfile.classList.remove('show');
        displayProfile = 0;
    }
}

// Initialize checkbox values and reset profile info
document.getElementById("checkboxEmail").checked = false;
document.getElementById("checkboxPassword").checked = false;
document.getElementById("profile_info_mail").value = "";
document.getElementById("profile_info_password").value = "";

// Email and password validation
function emailValidation() {
    var emailAddress = document.getElementById("profile_info_mail");
    return emailAddress.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

function validatePassword(password) {
    var passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\s]{8,}$/;
    return passwordRe.test(password);
}

// Show email and password
var profile_email = document.getElementById("profile_email");
var profile_password = document.getElementById("profile_password");
var displayEmail = 0;
var displayPassword = 0;

function showEmail() {
    if (displayEmail === 0) {
        profile_email.textContent = localStorage.getItem("newEmail") || "########";
        displayEmail = 1;
    } else {
        profile_email.textContent = "########";
        displayEmail = 0;
    }
}

function showPassword() {
    if (displayPassword === 0) {
        profile_password.textContent = localStorage.getItem("newPassword") || "########";
        displayPassword = 1;
    } else {
        profile_password.textContent = "########";
        displayPassword = 0;
    }
}

// Change email and password
var profile_info_mail = document.getElementById("profile_info_mail");
var profile_info_password = document.getElementById("profile_info_password");
var changeEmailConfirm = document.getElementById("changeEmailConfirm");
var changePasswordConfirm = document.getElementById("changePasswordConfirm");
var emailChangeErrorMsg = document.getElementById("emailChangeErrorMsg");
var passwordChangeErrorMsg = document.getElementById("passwordChangeErrorMsg");

function changeEmail() {
    profile_info_mail.classList.add('show');
    changeEmailConfirm.classList.add('show');
}

function changePassword() {
    profile_info_password.classList.add('show');
    changePasswordConfirm.classList.add('show');
}

function confirmChangeEmail() {
    var profile_info_mail_value = document.getElementById("profile_info_mail").value;
    if (profile_info_mail_value !== "" && emailValidation()) {
        localStorage.setItem("newEmail", profile_info_mail_value);
        location.reload();
    } else {
        emailChangeErrorMsg.textContent = "Invalid email address";
        profile_info_mail.style.border = "rgba(140, 5, 0) solid 3px";
    }
}

function confirmChangePassword() {
    var profile_info_password_value = document.getElementById("profile_info_password").value;
    if (profile_info_password_value !== "" && validatePassword(profile_info_password_value)) {
        localStorage.setItem("newPassword", profile_info_password_value);
        location.reload();
    } else {
        passwordChangeErrorMsg.textContent = "Password must include at least 8 characters, 1 upper case letter and 1 number";
        profile_info_password.style.border = "rgba(140, 5, 0) solid 3px";
    }
}
