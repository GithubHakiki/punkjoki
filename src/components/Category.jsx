import cloudImg from '../assets/category/cloud.avif';
import dataImg from '../assets/category/data.avif';
import mlImg from '../assets/category/ml.avif';
import webImg from '../assets/category/web.avif';

const CategorySection = () => {
  const categories = [
    {
      icon: cloudImg,
      title: "Cloud Computing",
      description: "Resource di Cloud ribet? Kita bantu kelola biar sistem ga terkendala."
    },
    {
      icon: dataImg,
      title: "Data Analytics",
      description: "Kita dampingin olah data dan bikin visual biar insight gampang dibaca."
    },
    {
      icon: mlImg,
      title: "Machine Learning",
      description: "Model akurat, belajar pola sendiri, minim error, siap diaplikasikan."
    },
    {
      icon: webImg,
      title: "Web Programming",
      description: "Web berat? Kode ga efisien? Tenang, kita bantu minify."
    }
  ];

  return (
    <section id="2" className="category-section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">CATEGORY</p>
          <h2 className="section-title">Support Jalan Kualitas Aman</h2>
        </div>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="card-icon">
                <img src={category.icon} alt={category.title} />
              </div>
              <h3 className="card-title">{category.title}</h3>
              <p className="card-desc">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;