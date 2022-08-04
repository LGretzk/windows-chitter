import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>This the header</h1>
      <Link to="">Home</Link><br></br>
      <Link to="peeps">Peeps</Link><br></br>
      <Link to="register">Register</Link><br></br>
      <Link to="login">Login</Link>
    </div>
  );
}

export default Header;