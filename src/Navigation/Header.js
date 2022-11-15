import { NavLink } from 'react-router-dom';
import './Header.css';
import Logo from './images/logo.png';

const links = [
  { id: 1, path: '/', text: 'ROCKETS' },
  { id: 2, path: '/missions', text: 'MISSIONS' },
  { id: 3, path: '/myprofile', text: 'MY PROFILE' },
];

const Header = () => (
  <header className="header my-flex">
    <div className="logo my-flex">
      <img src={Logo} alt="logo" className="logo-img" />
      <h1 className="logo-title">Space Travelers&apos; Hub</h1>
    </div>
    <nav className="navbar">
      <ul className="nav-list my-flex">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} activeClassName="active-link" end>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
