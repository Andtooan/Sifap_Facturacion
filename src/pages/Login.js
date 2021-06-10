const Login = () => {
  const view = `
    <div class="main-login">
      <aside class="aside">
        <picture>
          <source media="(min-width: 1024px)" srcset="https://i.ibb.co/BZq1pjn/factura-master.png">
          <img src="https://i.ibb.co/h1hs05Y/factura-master2.png" alt="factura master logo">
        </picture>}
        <h2 class="subtitulo">¿Aún no eres cliente?</h2>
        <button class="registro" type="submit">
          <a href="/#/signup">Registrarme</a>
        </button>
      </aside>

      <div class="registroContent">
        <img class="imagenLogin" src="https://i.ibb.co/9qCDBv1/finance.png" />
        <figure class="logo-login">
          <img src="https://i.ibb.co/h1hs05Y/factura-master2.png" alt="logo master">
        </figure>
        <div class="formulario">
          <form>
            <input type="text" placeholder="Usuario" id="username-login" /><br />

            <input type="password" placeholder="Password" id="password-login" /><br />

            <button class="registro tablet" type="submit">
            <a href="/#/signup">Registrarme</a>
          </button>
          </form>
          <button class="iniciarSesionbtn" id="btnLogin">Iniciar Sesión</button>
          <button class="registroMobilbtn" type="submit">Registrarme</button>
        </div>
      </div>
    </div>

  `;

  return view;
};

export default Login;
