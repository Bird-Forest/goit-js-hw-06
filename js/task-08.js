const formLogin = document.querySelector('.login-form')
formLogin.addEventListener('submit', onSubmit)

function onSubmit(evt) {
    evt.preventDefault()
    const  {email, password} = evt.currentTarget.elements
    
    const userLogin = {
        email: email.value,
        password: password.value,
    }
    console.dir(userLogin);;
    formLogin.reset();
}
