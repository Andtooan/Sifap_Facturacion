const Login = () => {
  const view = `
    <div class="main-login">
      <aside class="aside">
          <div>
            <h2 class="titulo">Factura Master</h2>
            <hr>
          </div>

          <h2 class="subtitulo">¿Aún no eres cliente?</h2>

          <button class="registro" type="submit"><a href="/#/signup">Registrarme</a></button>


      </aside>

      <div class="registroContent">
          <img class="imagenLogin" src="./src/assets/Img/login.svg"/>
          <h2 class="tituloMobil">Factura Master</h2>
          <hr class="barraMobil">
         <div class="formulario">
            <form>
              <input type="text" placeholder="Usuario"><br>

              <input type="password" placeholder="Password"><br>

              
              <button class="iniciarSesion" type="submit"><a href="/#/dash">Iniciar Sesión</a></button>
              <button class="registroMobil" type="submit"><a href="/#/signup">Registrarme</a></button>
            </form>
         </div>
      </div>
    </div>


  `;

  return view;
};

export default Login;
