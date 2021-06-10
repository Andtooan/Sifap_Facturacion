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
          <form action="" id="form-newInvoice">
            <h2>Datos cliente</h2>
            <input type="text" placeholder="Nombre" name="client-name">
            <input type="adress" placeholder="Dirección" name="client-address">
            <input type="id" placeholder="ID" name="client-id">
            <h2>Conceptos</h2>
            <input type="text" placeholder="Producto o servicio" name="product-name">
            <input type="text" placeholder="Descripción" name="description">
            <input type="text" placeholder="Cantidad" name="product-qty">
            <input type="text" placeholder="Precio unitario" name="price">
          </form>
        </div>
        <div class="form-newinvoice-buttons">
          <button><a href="https://andtooan.github.io/Sifap_Facturacion/#/dash">Cancelar</a></button>
          <button id="btn-newInvoice">Generar</button>
        </div>
      </section>
    </div>
  `;

  return view;
};

export default NewInvoice;
