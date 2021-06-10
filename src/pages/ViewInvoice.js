const ViewInvoice = () => {
  let view = `
    <div class="main-viewinvoice">
      <div class="header-viewinvoice">
        <picture class="aside-logo">
          <source
            media="(min-width: 1024px)"
            srcset="https://i.ibb.co/BZq1pjn/factura-master.png"
          />
          <img
            src="https://i.ibb.co/h1hs05Y/IMG-20210526-183604-2.png"
            alt="factura master image"
          />
        </picture>
        <figure class="figure">
          <img src="https://i.ibb.co/NsBQLL2/circle-user.png" alt="user image" />
        </figure>
        <nav>
          <ul class="nav-aside">
            <li>
              <img
                src="https://i.ibb.co/q5tF18r/ecuador-flag-icon.png"
                alt="ecuador flag"
              />
            </li>
            <li>
              <a href="/"
                ><picture>
                  <source
                    media="(min-width: 1024px)"
                    srcset="https://i.ibb.co/zP8J9Lt/white-home-icon.png"
                  />
                  <img
                    src="https://i.ibb.co/RykyPxL/home-icon.png"
                    alt="home-icon"
                  /> </picture
              ></a>
            </li>
            <li>
              <a href=""
                ><picture>
                  <source
                    media="(min-width: 1024px)"
                    srcset="https://i.ibb.co/5T6djP6/white-notification-icon.png"
                  />
                  <img
                    src="https://i.ibb.co/r0tvszM/notification-icon.png"
                    alt="notifications icon"
                  /> </picture
              ></a>
            </li>
            <li>
              <a href=""
                ><picture>
                  <source
                    media="(min-width: 1024px)"
                    srcset="https://i.ibb.co/x8kFPX0/white-exit-icon.png"
                  />
                  <img
                    src="https://i.ibb.co/0r5cZCf/exit-icon.png"
                    alt="log out icon"
                  /> </picture
              ></a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="graphic__products">
        <div class="graphic__products--items">
          <p>Ultima Factura</p>
          <img src="doc.png" />
          <button>Mostrar Factura</button>
        </div>
      </div>
    </div>
  `
  return view
};
export default ViewInvoice;
