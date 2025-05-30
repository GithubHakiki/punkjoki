import mainImage from '../assets/main.avif';

const HeroSection = () => (
  <section id="1" className="hero">
    <div className="container">
      <div className="hero-content">
        <div className="hero-text">
          <p className="judul-cowboy">BEST SOLUTION FOR COWBOY STUDENTS</p>
          <div className="hero-image-m">
            <picture>
              <source media="(min-width: 769px)" srcSet="" />
              <img src={mainImage} className="edu-img-m" alt="education" />
            </picture>
          </div>
          <h1 className="tagline-hero">
            Delegate, chill,<br />
            reclaim your life,<br />
            just PUNK
          </h1>
          <p className="copy-santai">
            Tugas numpuk? Kepala mau meledak? 
            Tenang, kita di sini buat bantu lo pahamin dan kelarin dengan cara yang enak.
            Kualitas? Jelas. Deadline? Kita patuhin. Lo tinggal fokus belajar, kita dampingin!
          </p>
          <button className="btn-main">Find out more</button>
        </div>
        <div className="hero-image">
          <picture>
            <source media="(max-width: 768px)" srcSet="" />
            <img src={mainImage} className="edu-img" alt="education" />
          </picture>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;