const password = document.getElementById("password")
const passwordCon = document.getElementById("password-con")
const mail = document.getElementById("mail")
const country = document.getElementById("country")
const zip = document.getElementById("zip")
const submitBtn = document.getElementById("submit-btn")

myInputs = [password, passwordCon, mail, country, zip]
let activeHelp = false

submitBtn.addEventListener("click", function(e){
    myInputs.forEach(element => {
        if(element == passwordCon){
            if(passwordCon.value != password.value){
                errorMessage(element)
                e.preventDefault()
            }
        }else if(element.validity.valid){
            removeError(element)
            element.nextElementSibling.textContent = ""
        }else{
            errorMessage(element)
            e.preventDefault()
        }    
    });
}) 
//---active help after trying to submit---///

myInputs.forEach(element => {
    element.addEventListener("input", function(){
        if(element == passwordCon){
            if(passwordCon.value == password.value){
                removeError(element)
                element.nextElementSibling.textContent = ""
                passwordCon.style.border = "2px solid #294936"
            }else{
                errorMessage(element)
                passwordCon.style.border = "2px solid red"
            }
        }else if(element.validity.valid){
            removeError(element)
            element.nextElementSibling.textContent = ""
        }else{
            errorMessage(element)
        }   
    })
});
//---active help after trying to submit---///


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
        }else if(zip.validity.valueMissing){
            displayError(zip)
            zip.nextElementSibling.textContent = "Five numbers thx :)"
        }
    }else if(type == password){
        if(password.validity.patternMismatch){
            displayError(password)
            password.nextElementSibling.textContent = "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
        }else{
            displayError(password)
            password.nextElementSibling.textContent = "Enter a password"
        }
    }else if(type == passwordCon){
        displayError(passwordCon)
        passwordCon.nextElementSibling.textContent = "Must match password"
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