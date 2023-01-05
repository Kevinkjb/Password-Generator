let passOne = document.getElementById("password-one")
let passTwo = document.getElementById("password-two")
let buttonGenerator = document.getElementById("button-gen")
let copyPassOne = document.getElementById("copy-pass-one")
let copyPassTwo = document.getElementById("copy-pass-two")


buttonGenerator.addEventListener("click", function(){
    let randomChars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 15

    for(let i = 0; i <= passwordLength; i++){
        let randomPassOne = Math.floor(Math.random() * randomChars.length) 
        let randomPassTwo = Math.floor(Math.random() * randomChars.length)
        passOne.textContent +=  randomChars.substring(randomPassOne, randomPassOne +1); 
        passTwo.textContent +=  randomChars.substring(randomPassTwo, randomPassTwo +1); 
    }
})
// function copyItem(){
//     let copyText = document.getElementById("myInput")
//     copyText.select();
//     navigator.clipboard.writeText(copyText.value)
// }



