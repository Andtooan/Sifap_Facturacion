import Resources from './Resources';

async function LoginUser() {
    const inputUsername = document.getElementById('username-login') || null;
    const inputPassword = document.getElementById('password-login') || null;

    if (inputUsername && inputPassword) {
        const userData = {
            "username": inputUsername.value,
            "password": inputPassword.value
        }

        const response = await Resources.loginUser(userData);
        console.log(JSON.stringify(response));
        console.log(response.status)

        if (response.status === 200) {
          console.log('logueado')
          window.localStorage.setItem("username", inputUsername.value);
          location.href = `http://localhost:8080/#/dash`;
        }
    }
}
async function RegisterUser() {
  const formulario = document.getElementById('signup-form');
  var formElement = new FormData(formulario)

  if (inputUsername && inputPassword) {
    const userData = {
      "username": formElement.get('name'),
      "password": formElement.get('password'),
      "email": formElement.get('email'),
      "phone_number": formElement.get('phone'),
      "identification": formElement.get('id'),
      "address": formElement.get('address')
    }
  }
}

export { LoginUser, RegisterUser };
