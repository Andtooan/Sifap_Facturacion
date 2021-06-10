const Resources = require('../resources/Resources');

const Signup = async () => {
  const countryIdsResponse = await Resources.getCountryIdentification()
  const countryIds = countryIdsResponse.data
  console.log(countryIds)

  let view = `
    <div class="main-signup">
      <aside>
        <picture>
          <source media="(min-width: 1024px)" srcset="https://i.ibb.co/BZq1pjn/factura-master.png">
          <img src="https://i.ibb.co/h1hs05Y/factura-master2.png" alt="factura master logo">
        </picture>
        <h1>¿Ya eres cliente?</h1>
        <button><a href="/">INICIA SESIÓN</a></button>
      </aside>
      <div class="signup-content">
        <figure class="signup-illustration">
          <img src="https://i.ibb.co/TvMhzFV/sign-up-illustration-sifap.png" alt="signup illustration">
          <img src="https://i.ibb.co/h1hs05Y/factura-master2.png" alt="factura master logo">
        </figure>
        <form action="" class="signup-form" id="signup-form">
          <input type="text" placeholder="Nombre completo" name="name">
          <input type="text" placeholder="Teléfono" name="phone">
          <input type="email" placeholder="Correo" name="email">
          <input type="password" placeholder="Contraseña" name="password">
          <input type="text" placeholder="Dirección" name="address">
          <select name="country-name" id="">
            ${countryIds.map((identification) => 
              `<option value='${identification.id}'>${identification.country} - ${identification.type}</option>`
            ).join('')}
          </select>
          <input type="text" placeholder="ID" name="id">
          <input type="text" placeholder="name-company" name="company-name">
        </form>
        <div class="buttons-signup">
          <button id="btnRegister">Registrarme</button>
          <button><a href="https://andtooan.github.io/Sifap_Facturacion/">Iniciar sesión</a></button>
        </div>
      </div>
    </div>
  `;
  return view;
};
export default Signup;
