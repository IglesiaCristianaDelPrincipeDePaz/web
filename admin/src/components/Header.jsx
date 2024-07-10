import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className="link">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/predicas" className="link">
              Predicas
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
