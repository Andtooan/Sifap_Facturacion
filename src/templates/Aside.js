const Aside = () => {
  const country = localStorage.getItem('identification_type');
  let view = `
    <picture class="aside-logo">
      <source media="(min-width: 1024px)" srcset="https://i.ibb.co/BZq1pjn/factura-master.png">
      <img src="https://i.ibb.co/h1hs05Y/IMG-20210526-183604-2.png" alt="factura master image">
    </picture>
    <figure>
      <img src="https://img.icons8.com/doodle/48/000000/user-male-circle.png" alt="user image">
    </figure>
    <nav>
      <ul class="nav-aside">
        <li>${country == 1 ? `<img src="https://img.icons8.com/color/48/000000/mexico.png"/>`: `<h2>country flag</h2>`} </li>
        <li><a href="https://andtooan.github.io/Sifap_Facturacion/#/dash"><picture>
          <source media="(min-width: 1024px)" srcset="https://i.ibb.co/zP8J9Lt/white-home-icon.png">
          <img src="https://i.ibb.co/RykyPxL/home-icon.png" alt="home-icon">
        </picture></a></li>

        <li><a href=""><picture>
          <source media="(min-width: 1024px)" srcset="https://i.ibb.co/5T6djP6/white-notification-icon.png">
          <img src="https://i.ibb.co/r0tvszM/notification-icon.png" alt="notifications icon">
        </picture></a></li>

        <li><picture id="btnLogOut">
          <source media="(min-width: 1024px)" srcset="https://i.ibb.co/x8kFPX0/white-exit-icon.png">
          <img src="https://i.ibb.co/0r5cZCf/exit-icon.png" alt="log out icon" >
        </picture></li>
      </ul>
    </nav>
  `;
  return view;
};
export default Aside;
