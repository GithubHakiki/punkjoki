import logo25 from '../assets/punk/25.webp';
import logoBlackFlag from '../assets/punk/Black_Flag_logo.webp';
import logoDK from '../assets/punk/Dead-Kennedys-Logo1.webp';
import logoSLCP from '../assets/punk/SLCPPrimaryLogoTransparent.webp';
import logoUnnamed from '../assets/punk/unnamed (1).webp';
import logoWeirdPunk from '../assets/punk/WeirdPunkHorrorLogo.webp';

const PartnersSection = () => {
  const partnerLogos = [
    logoSLCP,
    logoDK,
    logoBlackFlag,
    logoWeirdPunk,
    logoUnnamed
  ];

  return (
    <section id="4" className="partners-section">
      <div className="container">
        <p className="section-label">PARTNERSHIP</p>
        <h2 className="section-title">Trusted by</h2>
        <div className="logo-lineup">
          {partnerLogos.map((logo, index) => (
            <img key={index} src={logo} alt="Partner Logo" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;