import logoImg from '../assets/logo4.png';

const Header = () => (
  <header className="header">
    <div className="container">
      <nav className="nav">
        <img src={logoImg} className="logo-img" alt="logo" />
        <a href="https://wa.me/6285175435477" target="_blank" className="btn-contact-us">
          Contact Us
        </a>
      </nav>
    </div>
  </header>
);

export default Header;