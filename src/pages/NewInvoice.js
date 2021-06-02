import Aside from '../templates/Aside'
const NewInvoice = () => {
  const view = `
    <div class="main-newinvoice">
      <aside>
        ${Aside()}
      </aside>
      <section class="newinvoice-content">
        <img src="https://i.ibb.co/h1hs05Y/IMG-20210526-183604-2.png" alt="factura master logo" class="logo-body-newinvoice">
        <h1>Generar Factura</h1>
        <div class="logo-generate">
          <figure>
            <img src="https://i.ibb.co/0rPGjKC/blue-upload-icon.png" alt="upload logo icon">
          </figure>
          <p>Agregar logo</p>
        </div>
        <div class="formulario-newinvoice">
          <form action="">
            <h2>Datos cliente</h2>
            <input type="text" placeholder="Name">
            <input type="adress" placeholder="Direcciòn">
            <input type="list" placeholder="Paìs">
            <input type="id" placeholder="ID">
            <h2>Conceptos</h2>
            <input type="text" placeholder="Producto o servicio">
            <input type="text" placeholder="Descripcion">
            <input type="text" placeholder="Cantidad">
            <input type="text" placeholder="Precio unitario">
          </form>
        </div>
        <div class="form-newinvoice-buttons">
          <button>Cancelar</button>
          <button>Generar</button>
        </div>
      </section>
    </div>
  `;

  return view;
};

export default NewInvoice;
