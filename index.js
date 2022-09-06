const passwordLength = document.getElementById("password-length" )
const generateBtn= document.getElementById("generate-btn")
const passwordDisplay = document.querySelectorAll(".password-display")

const characters =[
    'A','B','C','D','E','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','n','o','p','q','r','s','t','u','v','w','x','y','z','*','&','$','#','!','?','<','>','+', "1","2","3","4","5","6","7","8","9"
    ]

function passwordGenerater(){
    let passwordArray = []

    for (let i=0; i<4; i++){
            randomTextString = " "
            for (let j=0; j<passwordLength.value; j++){
                let randomText = characters[Math.floor(Math.random()*70)]
                randomTextString += randomText
            }
            passwordArray.push(randomTextString)
        }
        return passwordArray
}

function renderPassword() {
    let passwords = passwordGenerater()
    for (let k=0; k<4; k++) {
        passwordDisplay[k].value = passwords[k]
    }
}

generateBtn.addEventListener('click',renderPassword)
