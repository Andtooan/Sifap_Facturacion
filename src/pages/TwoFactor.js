const TwoFactor = () => {
  let view = `
    <div class="main-twoFactor">
      <section class="main-twoFactor__card">
        <img src="https://i.ibb.co/GCfLQ7V/security.png" alt="security shield logo">
        <h2 class="main-twoFactor__title">Autentica tu cuenta</h2>
        <p class="main-twoFactor__text">Tu seguridad es nuestra prioridad. <br> Confirme su cuenta ingresando el código de autorización enviado a tu correo</p>
        <form class="main-twoFactor__input" id="two-factor-form">
          <input type="text" maxlength="1" name="char1"></input>
          <input type="text" maxlength="1" name="char2"></input>
          <input type="text" maxlength="1" name="char3"></input>
          <input type="text" maxlength="1" name="char4"></input>
        </form>
        <button class="main-twoFactor__button" type="button" id="btn-twoFactor">Enviar</button>
      </section>
    </div>
  `
  return view
};
export default TwoFactor;