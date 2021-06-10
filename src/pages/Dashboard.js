import Aside from '../templates/Aside';
const Resources = require('../resources/Resources')

const Dashboard = async () => {
  const company = localStorage.getItem('company_id')
  const invoices = await Resources.getInvoices(company)
  console.log(invoices)
  const view = `
    <div class="main-dashboard">
      <aside>
        ${Aside()}
      </aside>

      <div class="facturaContent">
        <div class="generarFacturas">
          <h2 class="generar">Generador de Facturas</h2>

          <div class="cuadro">
            <img src="https://i.ibb.co/KxNLBCc/factura.png" />
            <button class="botonFactura"><a href="https://andtooan.github.io/Sifap_Facturacion/#/generate">Generar Factura</a></button>
          </div>
        </div>

        <div class="historialFacturas">
          <h2 class="historial">Historial de Facturas</h2>

          <div class="contenidoTabla">
            <div class="tablaFacturas">
              <table>
                <tbody>
                  ${invoices.map(invoice => `
                    <tr class="lineaTabla">
                      <th>
                        <img
                          class="imagenTabla"
                          src="https://i.ibb.co/KxNLBCc/factura.png"
                        />
                      </th>
                      <td>${invoice.client}</td>
                      <td class="ocultoMobil">${invoice.created_at}</td>
                      <td class="ocultoMobil">$ ${invoice.total_price}</td>
                      <td class="ocultoMobil">
                        <img
                          class="tamanoFlecha"
                          src="https://i.ibb.co/jyWwtFf/Download.png"
                        />
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <div class="imagenEstadisticas">
              <div class="cajitaMobil">
                <img
                  class="estadisticaImagen"
                  src="https://i.ibb.co/jDrFwbK/graph.png"
                />
                <button class="botonEstadisticas"><a href="/#/stats">Ver estadisticas</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  `;

  return view;
}

export default Dashboard;
