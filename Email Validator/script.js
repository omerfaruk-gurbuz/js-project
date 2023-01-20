const email = document.querySelector("#email")
const button = document.querySelector('.button')

button.addEventListener('click', function() {
    const splittedAdress = email.value.split('@').join('.').split('.');
    
    if(splittedAdress.length === 3) {
        if(splittedAdress[2].length > 1 && splittedAdress[2].length) {
            console.log('valid')
        } else {
            console.log('invalid')
        }
   } else {
    console.log('invalid')
    }
})