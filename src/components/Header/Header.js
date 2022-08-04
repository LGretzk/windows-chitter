import {Link} from 'react-router-dom';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from './../LoginForm/LoginForm'

import cat from './cat.png'
import './Header.css'

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-light shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand row p-2" href="/peeps">
          <div class="col"><img class="" src={cat} alt="cat" height="50"></img></div>
          <div class="col d-flex align-items-center p-0 pt-1"><h1>Chitter</h1></div>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="col">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link className="nav-link active" to="">Home</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link active" to="peeps">Peeps</Link>
            </li>
          </ul>
          </div>
          <div class="col text-end">
            <button class="btn btn-sm m-2 grey"  data-bs-toggle="modal" data-bs-target="#loginModal">Login<LoginForm /></button>
            <button class="btn btn-sm m-2 grey" data-bs-toggle="modal" data-bs-target="#registerModal">Register<RegistrationForm /></button>
          </div> 
        </div>  
      </div>
      {/* <Link to="register">Register</Link><br></br>
      <Link to="login">Login</Link> */}
    </nav>
  );
}

export default Header;