
import style from './App.module.css';
import DoubleDouble from './img/flower/DoubleDouble.avif';
import BlackberryPie from './img/flower/BlackberryPie.avif'
import CremeDeMenthe from './img/flower/CremeDeMenthe.avif'
import FunkyFresh from './img/flower/FunkyFresh.avif'
function App() {
 

return (
  <><div className={style.App}>
    <nav class="navbar navbar-dark bg-dark fixed-top shadow-lg p-3 mb-5">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Pot Paradise</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Pot Paradise</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button class="btn btn-success" type="submit">Search</button>
        </form>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Menu
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="/">All</a></li>
              <li>
                <hr class="dropdown-divider"></hr>
              </li>
              <li><a class="dropdown-item" href="/">Flower</a></li>
              <li><a class="dropdown-item" href="/">Edibles</a></li>
              <li><a class="dropdown-item" href="/">Extract</a></li>
              <li><a class="dropdown-item" href="/">Pre-Rolls</a></li>
              <li><a class="dropdown-item" href="/">Vape</a></li>
              <li><a class="dropdown-item" href="/">Topical</a></li>
              <li><a class="dropdown-item" href="/">Tincture</a></li>
              <li><a class="dropdown-item" href="/">Gear</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Locations</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Contact Us</a>
          </li>

        

        </ul>
      </div>
    </div>
  </div>
</nav>
</div>




  <div className={style.Flexcontainer}>
  <div className={style.FlexItem}>
  <div class="card" >
  <img src={DoubleDouble} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Double Double</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">1g - $10</li>
    <li class="list-group-item">1/8 - $25</li>
    <li class="list-group-item">1/5 - $40</li>
  </ul>
  <div class="card-body">
  <button type="button" class="btn btn-primary">Shop</button>&nbsp;&nbsp;
  <button type="button" class="btn btn-secondary">Details</button>&nbsp;&nbsp;
  </div>
</div>
  </div>
  <div className={style.FlexItem}>
  <div class="card" >
  <img src={BlackberryPie} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Blackberry Pie</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">1g - $10</li>
    <li class="list-group-item">1/8 - $25</li>
    <li class="list-group-item">1/5 - $40</li>
  </ul>
  <div class="card-body">
  <button type="button" class="btn btn-primary">Shop</button>&nbsp;&nbsp;
  <button type="button" class="btn btn-secondary">Details</button>&nbsp;&nbsp;
  </div>
</div>
  </div>
  <div className={style.FlexItem}>
  <div class="card" >
  <img src={CremeDeMenthe} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Creme De Menthe</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">1g - $10</li>
    <li class="list-group-item">1/8 - $25</li>
    <li class="list-group-item">1/5 - $40</li>
  </ul>
  <div class="card-body">
  <button type="button" class="btn btn-primary">Shop</button>&nbsp;&nbsp;
  <button type="button" class="btn btn-secondary">Details</button>&nbsp;&nbsp;
  </div>
</div>
  </div>
  <div className={style.FlexItem}>
  <div class="card" >
  <img src={FunkyFresh} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Funky Fresh</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">1g - $10</li>
    <li class="list-group-item">1/8 - $25</li>
    <li class="list-group-item">1/5 - $40</li>
  </ul>
  <div class="card-body">
  <button type="button" class="btn btn-primary">Shop</button>&nbsp;&nbsp;
  <button type="button" class="btn btn-secondary">Details</button>&nbsp;&nbsp;
  </div>
</div>
  </div>
    </div></>








  );
}



export default App;
