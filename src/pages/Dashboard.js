import Aside from '../templates/Aside';

const Dashboard = () => {
  const view = `
    <div class="main-dashboard">
      <aside>
        ${Aside()}
      </aside>

      <div class="facturaContent">
          <div class="generarFacturas">
             <h2 class="generar">Generador de Facturas</h2>

             <div class="cuadro">
                <img  src="https://ibb.co/fd8nZmV"/>
                <button class="botonFactura">Generar Factura</button>
             </div>
          </div>

          <div class="historialFacturas">
            <h2 class="historial">Historial de Facturas</h2>

            <div class="contenidoTabla">
              <div class="tablaFacturas"> 

              <table>
              <tbody>
                <tr class="lineaTabla">
                  <th><img class="imagenTabla"  src="https://ibb.co/fd8nZmV"/></th>
                  <td>Factura_Oficina_SA.pdf</td>
                  <td class="ocultoMobil">20/Enero/2021</td>
                  <td class="ocultoMobil">$ 12,400.60</td>
                  <td class="ocultoMobil"><img class="tamanoFlecha" src="https://ibb.co/c6C8qd3" /></td>
                </tr>
               
                <tr class="lineaTabla">
                  <th><img class="imagenTabla"  src="https://ibb.co/fd8nZmV"/></th>
                  <td>Factura_Oficina_SA.pdf</td>
                  <td class="ocultoMobil">20/Enero/2021</td>
                  <td class="ocultoMobil">$ 12,400.60</td>
                  <td class="ocultoMobil"><img class="tamanoFlecha" src="https://ibb.co/c6C8qd3" /></td>
                </tr>

                <tr class="lineaTabla">
                  <th><img class="imagenTabla"  src="https://ibb.co/fd8nZmV"/></th>
                  <td>Factura_Oficina_SA.pdf</td>
                  <td class="ocultoMobil">20/Enero/2021</td>
                  <td class="ocultoMobil">$ 12,400.60</td>
                  <td class="ocultoMobil"><img class="tamanoFlecha" src="https://ibb.co/c6C8qd3" /></td>
                </tr>

                <tr class="lineaTabla">
                <th><img class="imagenTabla"  src="https://ibb.co/fd8nZmV"/></th>
                <td>Factura_Oficina_SA.pdf</td>
                <td class="ocultoMobil">20/Enero/2021</td>
                <td class="ocultoMobil">$ 12,400.60</td>
                <td class="ocultoMobil"><img class="tamanoFlecha" src="https://ibb.co/c6C8qd3" /></td>
              </tr>

              <tr class="lineaTabla">
              <th><img class="imagenTabla"  src="https://ibb.co/fd8nZmV"/></th>
              <td>Factura_Oficina_SA.pdf</td>
              <td class="ocultoMobil">20/Enero/2021</td>
              <td class="ocultoMobil">$ 12,400.60</td>
              <td class="ocultoMobil"><img class="tamanoFlecha" src="https://ibb.co/c6C8qd3" /></td>
            </tr>

            <tr class="lineaTabla">
            <th><img class="imagenTabla"  src="https://ibb.co/fd8nZmV"/></th>
            <td>Factura_Oficina_SA.pdf</td>
            <td class="ocultoMobil">20/Enero/2021</td>
            <td class="ocultoMobil">$ 12,400.60</td>
            <td class="ocultoMobil"><img class="tamanoFlecha" src="https://ibb.co/c6C8qd3" /></td>
          </tr>

          <tr class="lineaTabla">
          <th><img class="imagenTabla"  src="https://ibb.co/fd8nZmV"/></th>
          <td>Factura_Oficina_SA.pdf</td>
          <td class="ocultoMobil">20/Enero/2021</td>
          <td class="ocultoMobil">$ 12,400.60</td>
          <td class="ocultoMobil"><img class="tamanoFlecha" src="https://ibb.co/c6C8qd3" /></td>
        </tr>

        <tr class="lineaTabla">
        <th><img class="imagenTabla"  src="https://ibb.co/fd8nZmV"/></th>
        <td>Factura_Oficina_SA.pdf</td>
        <td class="ocultoMobil">20/Enero/2021</td>
        <td class="ocultoMobil">$ 12,400.60</td>
        <td class="ocultoMobil"><img class="tamanoFlecha" src="https://ibb.co/c6C8qd3" /></td>
      </tr>
              </tbody>
              </table>
    
              </div>

              <div class="imagenEstadisticas"> 
                  <div class="cajitaMobil">
                    <img class="estadisticaImagen" src="https://ibb.co/yqQJkdT"/>
                    <button class="botonEstadisticas">Ver estadisticas</button>
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
