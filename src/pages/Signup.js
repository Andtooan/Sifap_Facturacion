const Signup = () => {
  let view = `
    <div class="main-signup">
      <aside>
        <picture>
          <source media="(min-width: 1024px)" srcset="https://i.ibb.co/BZq1pjn/factura-master.png">
          <img src="https://i.ibb.co/h1hs05Y/factura-master2.png" alt="factura master logo">
        </picture>
        <h1>¿Ya eres cliente?</h1>
        <button><a href="/">INICIA SESIÒN</a></button>
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
          <input type="text" placeholder="Contraseña" name="password">
          <select name="country-name" id="">
            <option value="">Ecuador</option>
            <option value="">México</option>
            <option>Colombia</option>
          </select>
          <input type="text" placeholder="ID">
        </form>
        <div class="buttons-signup">
          <button id="btnRegister">Registrarme</button>
          <button><a href="/">Iniciar sesión</a></button>
        </div>
      </div>
    </div>
  `;
  return view;
};
export default Signup;
