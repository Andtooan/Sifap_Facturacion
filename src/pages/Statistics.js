const Statistics = () => {
  let view = `
  <header class="header">
    
  <picture class="aside-logo">
    <source media="(min-width: 1024px)" srcset="https://i.ibb.co/BZq1pjn/factura-master.png">
    <img src="https://i.ibb.co/h1hs05Y/IMG-20210526-183604-2.png" alt="factura master image">
  </picture>
  <figure class="figure">
    <img src="https://i.ibb.co/NsBQLL2/circle-user.png" alt="user image">
  </figure>
      <nav>
          <ul class="nav-aside">
              <li><img src="https://i.ibb.co/q5tF18r/ecuador-flag-icon.png" alt="ecuador flag"></li>
              <li><a href="/"><picture>
    <source media="(min-width: 1024px)" srcset="https://i.ibb.co/zP8J9Lt/white-home-icon.png">
    <img src="https://i.ibb.co/RykyPxL/home-icon.png" alt="home-icon">
    </picture></a></li>
              <li><a href=""><picture>
    <source media="(min-width: 1024px)" srcset="https://i.ibb.co/5T6djP6/white-notification-icon.png">
    <img src="https://i.ibb.co/r0tvszM/notification-icon.png" alt="notifications icon">
    </picture></a></li>
              <li><a href=""><picture>
    <source media="(min-width: 1024px)" srcset="https://i.ibb.co/x8kFPX0/white-exit-icon.png">
    <img src="https://i.ibb.co/0r5cZCf/exit-icon.png" alt="log out icon">
    </picture></a></li>
          </ul>
      </nav>
</header>    
 
  <div class="stadistics"> 
    <div class="stadistics__items"> 
        <h1>Ingresos</h1>
          <button class="btn"> Ene-Mar 2021 </button> 
        <p> Total de Ingresos </p>
        <h2> $76 666 </h2>
            
        <img src="chart.png"> 
    </div>     
  </div>
  <div class="graphic__products"> 
    <div class="graphic__products--items">
      <img src="Widget 3.png" >
    </div>
  </div>

  <div class="graphic__costumers"> 
    <div class="graphic__costumers--items">
       <img src="Widget 3.png" >
    </div>
  </div>

  <div class="graphic__costumers2"> 
    <div class="graphic__costumers2--items"> 
       <img src="Widget 3.png" >
    </div>  
  </div>
  `
  return view
};
export default Statistics;