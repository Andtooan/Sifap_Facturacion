const TwoFactor = () => {
  let view = `
    <div class="main-twoFactor">
      <section class="main-twoFactor__card">
        <img src="https://i.ibb.co/GCfLQ7V/security.png" alt="security shield logo">
        <h2 class="main-twoFactor__title">Autentica tu cuenta</h2>
        <p class="main-twoFactor__text">Tu seguridad es nuestra prioridad. Confirme su cuenta ingresando el código de autorización enviado a *******@***</p>
        <section class="main-twoFactor__input">
          <input type="text"></input>
          <input type="text"></input>
          <input type="text"></input>
          <input type="text"></input>
        </section>
        <button class="main-twoFactor__button" type="button">Enviar</button>
        <button class="main-twoFactor__button" type="button">Reenviar código</button>
      </section>
     </div>
  `
  return view
};
export default TwoFactor;