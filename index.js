const password = document.getElementById("password")
const passwordCon = document.getElementById("password-con")
const mail = document.getElementById("mail")
const country = document.getElementById("country")
const zip = document.getElementById("zip")
const submitBtn = document.getElementById("submit-btn")

myInputs = [password, passwordCon, mail, country, zip]

myInputs.forEach(element => {
        element.addEventListener("input", function(){
            if(element.validity.valid){
                removeError(element)
                element.nextElementSibling.textContent = ""
            }else{
                errorMessage(element)
            } 
        })
});


function errorMessage(type){
    if(type == mail){
        displayError(type)
        if(mail.validity.tooShort){
            mail.nextElementSibling.textContent = "Minimum of 3 characters"
        }else{
            mail.nextElementSibling.textContent = "Somthing@gmail.com"
        }
    }else if(type == country){
        if(country.validity.patternMismatch){
            displayError(type)
            country.nextElementSibling.textContent = "No numbers!"
        }else if(country.validity.valueMissing){
            displayError(type)
            country.nextElementSibling.textContent = "Where do you live?"
        }
    }else if(type == zip){
        if(zip.validity.patternMismatch){
            displayError(zip)
            zip.nextElementSibling.textContent = "Five numbers"
        }
    }else if(type == password){
        if(password.validity.patternMismatch){
            displayError(password)
            password.nextElementSibling.textContent = "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
        }
    }
}
submitBtn.addEventListener("click", function(){
    
})

function displayError(type){
    type.nextElementSibling.classList.add("active-error")
}
function removeError(type){
    type.nextElementSibling.classList.remove("active-error")
}