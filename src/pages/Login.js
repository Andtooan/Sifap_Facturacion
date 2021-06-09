const Login = () => {
  const view = `
    <div class="main-login">
      <aside class="aside">
        <figure class="logo-login">
          <img src="https://ibb.co/hWDq6HY" alt="logo master">
        </figure>
        <h2 class="subtitulo">¿Aún no eres cliente?</h2>
        <button class="registro" type="submit">
          <a href="/#/signup">Registrarme</a>
        </button>
      </aside>

      <div class="registroContent">
        <img class="imagenLogin" src="https://ibb.co/FBjrcWy" />
        <figure class="logo-login">
          <img src="https://i.ibb.co/h1hs05Y/factura-master2.png" alt="logo master">
        </figure>
        <div class="formulario">
          <form>
            <input type="text" placeholder="Usuario" /><br />

            <input type="password" placeholder="Password" /><br />

            <button class="iniciarSesion" type="submit">
              <a href="/#/dash">Iniciar Sesión</a>
            </button>
            <button class="registroMobil" type="submit">
              <a href="/#/signup">Registrarme</a>
            </button>

            <button class="registro tablet" type="submit">
            <a href="/#/signup">Registrarme</a>
          </button>
          </form>
        </div>
      </div>
    </div>

  `;

  return view;
};

export default Login;
