const form = document.querySelector(".email-form");
const errorMessage = document.querySelector(".error-message")
const emailField = document.querySelector(".email-field");
const successPage = document.getElementById("success-message")
const signupPage = document.getElementById("signup-form")
const emailValue = document.querySelector(".email-value")
const dismissBtn = document.getElementById("dismiss-link")

function validateEmail(){
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailField.value.match(pattern)){
        errorMessage.innerHTML = "Valid email required";
        emailField.style.border = "2px solid #ff6257";
        location.href = form.getAttribute("action");
        return false;
    }
    errorMessage.innerHTML = "";
    emailField.style.border = "2px solid #C5C5C5";
    location.href = form.getAttribute("action");
    successPage.style.display = "flex";
    signupPage.style.display = "none";
    emailValue.innerHTML = emailField.value;
    returnToPage()
    return true;
}

function returnToPage(){
    dismissBtn.addEventListener("click", () => {
        signupPage.style.display = "grid";
        successPage.style.display = "none";
        location.href = dismissBtn.getAttribute("href");
    })
}
