import Aside from '../templates/Aside'

const Statistics = () => {
  let view = `
    <div class="main-statistics">
    <aside>
      ${Aside()}
    </aside>
    <div class="statistic-content">
      <img src="https://i.ibb.co/h1hs05Y/factura-master2.png" alt="Factura master logo">
      <div class="statistics-card-container">
        <div class="statistics-card-ingresos">
          <div class="card-ingresos-header">
            <h2>Ingresos</h2>
            <p>Ene - Mar 2021 <span></span></p>
          </div>
          <picture>
            <source media="(min-width: 768px)" srcset="https://i.ibb.co/cXCzJdZ/statistic-desktop.png">
            <img src="https://i.ibb.co/dDfYfKq/statistic-mobile.png" alt="income statistic">
          </picture>
          <div class="card-ingresos-total">
            <p>Total de Ingresos</p>
            <h2>$76,685.41</h2>
            <h3>+ 7.00%</h3>
          </div>
        </div>
        <div class="circle-card_container">
          <div class="statistics-card-circle">
            <h2>Servicios y productos</h2>
            <img src="https://i.ibb.co/wCzjqhf/circle-statistic.png" alt="Circle statistic">
            <div class="statistics-card-graphic">
              <p><span></span> cliente 1</p>
              <p><span></span> cliente 2</p>
              <p><span></span> cliente 3</p>
              <p><span></span> cliente 4</p>
            </div>
          </div>
          <div class="statistics-card-circle">
            <h2>Clientes</h2>
            <img src="https://i.ibb.co/wCzjqhf/circle-statistic.png" alt="Circle statistic">
            <div class="statistics-card-graphic">
              <p><span></span> cliente 1</p>
              <p><span></span> cliente 2</p>
              <p><span></span> cliente 3</p>
              <p><span></span> cliente 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
  return view;
};

export default Statistics;