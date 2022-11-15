import './Header.css';
import Logo from './images/logo.png';

const Header = () => (
  <header className="header my-flex">
    <div className="logo my-flex">
      <img src={Logo} alt="logo" className="logo-img" />
      <h1 className="logo-title">Space Travelers&apos; Hub</h1>
    </div>
    <nav className="navbar">
      <ul className="nav-list my-flex">
        <li>Rockets</li>
        <li>Missions</li>
        |
        <li>My Profile</li>
      </ul>
    </nav>
  </header>
);

export default Header;
