/**
 * The function "Strength" calculates the strength of a password based on its length, presence of
 * uppercase letters, lowercase letters, numbers, and special characters.
 * @param password - The parameter "password" is a string that represents the password that needs to be
 * evaluated for its strength.
 * @returns the strength of the password based on certain criteria. The strength is represented by the
 * variable "i", which is incremented based on the length of the password, presence of uppercase
 * letters, presence of numbers, and presence of alphanumeric characters.
 */
function Strength(password) {
    let i = 0;
    if (password.length > 6) {
        i++;
    }
    if (password.length >= 10) {
        i++;
    }
    if (/[A-Z]/.test(password)) {
        i++;
    }
    if (/[0-9]/.test(password)) {
        i++;
    }
    if (/[A-Za-z0-8]/.test(password)) {
        i++;
    }
    return i;
}

/* The code you provided is responsible for handling the strength of a password input field and
updating the visual representation of the password strength. */
let container = document.querySelector(".container")
document.addEventListener("keyup", function(e) {
    let password = document.querySelector("#YourPassword").value;

    let strength = Strength(password);
    if (strength <= 2) {
        container.classList.add("weak");
        container.classList.remove("moderate");
        container.classList.remove("strong");
    } else if (strength >= 2 && strength <= 4) {
        container.classList.remove("weak");
        container.classList.add("moderate");
        container.classList.remove("strong");
    } else {
        container.classList.remove("weak");
        container.classList.remove("moderate");
        container.classList.add("strong");
    }
});

/* This code is responsible for toggling the visibility of the password input field. */
let password = document.querySelector('#YourPassword');
let show = document.querySelector('.show');
show.onclick = function () {
    if(password.type === "password") {
        password.setAttribute("type", "text");
        show.classList.add("hide");
    } else {
        password.setAttribute("type", "password");
        show.classList.remove("hide");
    }
};
