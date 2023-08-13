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
    let password = document.querySelector("#CheckPassword").value;

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
let password = document.querySelector('#CheckPassword');
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


// JS CODES FOR PASSWORD VALIDATION CHECKER //

const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

// An array of password requirements with corresponding 
// regular expressions and index of the requirement list item
const requirements = [
    { regex: /.{8,}/, index: 0}, //Mininum of 8 characters
    { regex:/\d/ , index:1 },      //At least one number
    { regex:/[a-z]/, index :2 },   //At least one lowercase letter
    { regex:/[A-Z]/ , index:3 },    //At least on uppercase letter
    { regex:/[^a-zA-Z\d]/ , index:4 }     //At least one special character
]

passwordInput.addEventListener ("keyup", (e) => {
    requirements.forEach(item => {
        // Check if the password matches the requirement regex
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        // Updating class and icon of requirement item if requirement matched or not
        if (isValid) {
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-check";
        } else {
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
        }
    });
});

eyeIcon.addEventListener("click", () => {
    // Toggle the password input type between "password" and "text"
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    // Update the eye icon class based on the password input type
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});