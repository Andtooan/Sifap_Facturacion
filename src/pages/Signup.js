const Signup = () => {
  let view = `
    <div class="main-signup">
      <aside>
        <picture>
          <source media="(min-width: 1024px)" srcset="https://i.ibb.co/BZq1pjn/factura-master.png">
          <img src="https://i.ibb.co/h1hs05Y/factura-master2.png" alt="factura master logo">
        </picture>
        <h1>¿Ya eres cliente?</h1>
        <button>INICIA SESIÒN</button>
      </aside>
      <div class="signup-content">
        <figure class="signup-illustration">
          <img src="https://i.ibb.co/TvMhzFV/sign-up-illustration-sifap.png" alt="signup illustration">
          <img src="https://i.ibb.co/h1hs05Y/factura-master2.png" alt="factura master logo">
        </figure>
        <form action="" class="signup-form">
          <input type="text" placeholder="Nombre completo">
          <input type="text" placeholder="Telefono">
          <input type="email" placeholder="Correo">
          <input type="text" placeholder="Contraseña">
          <select name="country-name" id="">
            <option>Ecuador</option>
            <option>Mexico</option>
            <option>Colombia</option>
          </select>
          <input type="text" placeholder="ID">
        </form>
        <div class="buttons-signup">
          <button>Registrarme</button>
          <button>Iniciar sesiòn</button>
        </div>
      </div>
    </div>
  `;
  return view;
};
export default Signup;
