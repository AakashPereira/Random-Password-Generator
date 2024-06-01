const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const lengthEl = document.getElementById("length-el")
const allowChar = document.getElementById("allow-char-el")

const generatePwdBtn = document.getElementById("generate-pwd-btn")

let format = ""

const passwordOneEl = document.getElementById("password-one-el")
const passwordTwoEl = document.getElementById("password-two-el")

const statusMsgEl = document.getElementById("status-msg-el")

generatePwdBtn.addEventListener("click", function() {
    let passwordOne = generatePassword(lengthEl.value, allowChar.checked)
    let passwordTwo = generatePassword(lengthEl.value, allowChar.checked)
    
    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo
})

passwordOneEl.addEventListener("click", copyPasswordOne)
passwordOneEl.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        copyPasswordOne()
    }
})

passwordTwoEl.addEventListener("click", copyPasswordTwo)
passwordTwoEl.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        copyPasswordTwo()
    }
})

function copyPasswordOne() {
    if(passwordOneEl.textContent.length > 0) {
        navigator.clipboard.writeText(passwordOneEl.textContent);
        statusMsgEl.textContent = "✅ Password one has been successfully copied to your clipboard!"
        setTimeout(function() {
            statusMsgEl.textContent = ""
        }, 3000)
    } else {
        statusMsgEl.textContent = "❌ Generate a password to copy it to your clipboard"
    }
}

function copyPasswordTwo() {
    if(passwordTwoEl.textContent.length > 0) {
        navigator.clipboard.writeText(passwordTwoEl.textContent);
        statusMsgEl.textContent = "✅ Password two has been successfully copied to your clipboard!"
        setTimeout(function() {
            statusMsgEl.textContent = ""
        }, 3000)
    } else {
        statusMsgEl.textContent = "❌ Generate a password to copy it to your clipboard"
    }
}

function generatePassword(length, allowChars) {
    let password = ""
    if (allowChars) {
        format = characters
    } else {
        format = letters
    }
    for (let i = 0; i < length; i++) {
        let randomPosition = Math.floor(Math.random() * format.length)
        password += format[randomPosition]
    }
    return password
}