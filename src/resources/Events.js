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
    console.log(response)

    if (response.status === 200) {
      console.log('logueado')
      window.localStorage.setItem("username", inputUsername.value);
      location.href = `https://andtooan.github.io/Sifap_Facturacion/#/2fa`;
    }
  }
}

async function  TwoFactor() {
  const twoFactorForm = document.getElementById('two-factor-form')
  const form = new FormData(twoFactorForm)
  const code = form.get('char1')+form.get('char2')+form.get('char3')+form.get('char4')
  const token = parseInt(code)

  const response = await Resources.TwoFactor(token)
  console.log(JSON.stringify(response));
  console.log(response)

  if (response.status === 200) {
    console.log('autorizado')
    localStorage.setItem("identification_type", response.data.user.identification_type)
    localStorage.setItem("company_id", response.data.user.pk)
    localStorage.setItem("token", response.data.access_token)
    location.href = `https://andtooan.github.io/Sifap_Facturacion/#/dash`;
  }
}

async function RegisterUser() {
  const formulario = document.getElementById('signup-form');
  var formElement = new FormData(formulario)

  const userData = {
    "username": formElement.get('name'),
    "password": formElement.get('password'),
    "email": formElement.get('email'),
    "phone_number": formElement.get('phone'),
    "identification": formElement.get('id'),
    "address": formElement.get('address'),
    "identification_type": parseInt(formElement.get('country-name')),
    "name": formElement.get('company-name')
  }
  console.log(userData)
  const response = await Resources.register(userData);
  console.log(JSON.stringify(response));
  if (response.status == 204) {
    window.localStorage.getItem("username");
    location.href = `https://andtooan.github.io/Sifap_Facturacion/#/dash`;
  }
}

async function NewInvoice() {
  const formNewInvoice = document.getElementById('form-newInvoice')
  const form = new FormData(formNewInvoice)

  const invoiceData = {
    "company_id": parseInt(localStorage.getItem('company_id')),
    "product_name": form.get('product-name'),
    "client_name": form.get('client-name'),
    "identification_id": parseInt(localStorage.getItem('identification_type')),
    "identification": parseInt(form.get('client-id')),
    "product_qty": parseInt(form.get('product-qty')),
    "description": form.get('description'),
    "price": parseFloat(form.get('price')),
    "country_id": parseInt(localStorage.getItem('identification_type'))
  }
  console.log(invoiceData)
  const response = await Resources.GenerateNewInvoice(invoiceData);
  console.log(response);
  if (response.status == 200) {
    location.href = `https://andtooan.github.io/Sifap_Facturacion/#/view/${response.pk} `;
  }
}

async function LogOut() {
  const token = localStorage.getItem('token')
  const response = await Resources.LogOut(token)
  if (response.status == 200) {
    location.href = `https://andtooan.github.io/Sifap_Facturacion`;
  }
}

export { LoginUser, RegisterUser, TwoFactor, NewInvoice, LogOut };
