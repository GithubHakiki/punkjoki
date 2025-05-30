import choiceCloud from '../assets/choice/choice-cloud.avif';
import choiceData from '../assets/choice/choice-data.avif';
import choiceML from '../assets/choice/choice-ml.avif';
import choiceWeb from '../assets/choice/choice-web.avif';

const ServicesSection = () => {
  const services = [
    {
      image: choiceData,
      name: "Data Visualization",
      price: "Rp. 200K",
      alt: "Data Visualization"
    },
    {
      image: choiceCloud,
      name: "Database Design",
      price: "Rp. 350K",
      alt: "Web Programming"
    },
    {
      image: choiceML,
      name: "Model Regression",
      price: "Rp. 500K",
      alt: "Model Regression"
    }
  ];

  return (
    <section id="3" className="services-section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">TOP SERVICE</p>
          <h2 className="section-title">Cowboy's Best Choice</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-img">
                <img src={service.image} alt={service.alt} />
              </div>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-price">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;