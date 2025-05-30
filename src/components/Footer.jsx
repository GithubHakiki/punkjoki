import logoImg from '../assets/logo4.png';

const Footer = ({ openModal }) => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logoImg} alt="PUNK Logo" className="footer-logo" />
          <p className="footer-motto">
            Don't drown in work. Own your day, live your way.
          </p>
          <p className="footer-tagline">Burnout? No More. Just PUNK-in</p>
        </div>
        <div className="footer-nav">
          <p className="footer-section-title">Team</p>
          <ul className="footer-links">
            <li><a href="javascript:void(0)" className="footer-link" onClick={() => openModal('about')}>About Us</a></li>
            <li><a href="javascript:void(0)" className="footer-link" onClick={() => openModal('faq')}>FAQ</a></li>
            <li><a href="javascript:void(0)" className="footer-link" onClick={() => openModal('docs')}>How It Works</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">© 2025 PUNK Platform</p>
      </div>
    </div>
  </footer>
);

export default Footer;