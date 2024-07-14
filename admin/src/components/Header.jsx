import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#ddd]">
      <nav>
        <ul className="flex justify-center">
          <li>
            <Link to="/" className="px-4 py-3 block hover:bg-[#bbb]">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/predicas" className="px-4 py-3 block hover:bg-[#bbb]">
              Predicas
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
