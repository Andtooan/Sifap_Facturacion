import Aside from '../templates/Aside'
const NewInvoice = () => {
  const view = `
    <div class="main-newinvoice">
      <section>
        <h1>Generar Factura</h1>
        <div class="logo-generate">
          <figure>
            <img src="" alt="">
          </figure>
          <p>Agregar logo</p>
        </div>
        <div class="formulario">
          <form action="">
            <h2>Datos cliente</h2>
            <input type="text" placeholder="Name">
            <input type="adress" placeholder="Direcciòn">
            <input type="list" placeholder="paìs">
            <input type="id" placeholder="ID">
          </form>
          <form action="">
            <h2>Conceptos</h2>
            <input type="text" placeholder="Producto o servicio">
            <input type="text" placeholder="Descripcion">
            <input type="text" placeholder="Cantidad">
            <input type="text" placeholder="Precio unitario">
          </form>
        </div>
        <button>Cancelar</button>
        <button>Generar</button>
      </section>
    </div>
  `;

  return view;
};

export default NewInvoice;
