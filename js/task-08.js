const formLogin = document.querySelector('.login-form')
console.dir(formLogin);

formLogin.addEventListener('submit', onSubmit)

function onSubmit(evt) {
    evt.preventDefault()
    const { email, password } = evt.currentTarget.elements
    if (formLogin.email.value === '' || formLogin.password.value === '') {
        alert('Please fill in all fields')
    } else {
        const userLogin = {
        email: email.value,
        password: password.value,
        }
    console.dir(userLogin);;
    formLogin.reset();
    }
}
