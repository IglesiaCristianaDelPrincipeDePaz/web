import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/predicas">Predicas</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
