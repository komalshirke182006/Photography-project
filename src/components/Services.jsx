import "./Services.css";


function Services() {
  
  // Service data array
  const services = [
    {
      title: "Wedding Photography",
      image: "/images/wedding.jpg",
      description:
        "Our wedding photography focuses on real emotions, candid moments, and cinematic storytelling.",
      price: "From ₹35,000",
    },
    {
      title: "Portrait Photography",
      image: "/images/portrait.jpg",
      description:
        "Professional portrait sessions designed to highlight your personality, confidence, and natural expressions.",
      price: "From ₹3,000",
    },
    {
      title: "Event Photography",
      image: "/images/event.jpg",
      description:
        "Complete event coverage focusing on key moments, candid interactions, and important details.",
      price: "From ₹10,000",
    },
    {
      title: "Pre-Wedding Shoot",
      image: "/images/prewedding.jpg",
      description:
        "Creative pre-wedding photography that beautifully showcases your love story through artistic poses and locations.",
      price: "From ₹20,000",
    },
    {
      title: "Product Photography",
      image: "/images/product.jpg",
      description:
        "High-quality product photography crafted to enhance branding, highlight details, and create visually appealing images.",
      price: "From ₹1,500",
    },
    {
      title: "Fashion Photography",
      image: "/images/fashion.jpg",
      description:
        "Stylish and trend-focused fashion photography using creative lighting and concepts to produce bold, elegant visuals.",
      price: "From ₹15,000",
    },
  ];

  return (
    <section id="services" className="services">
      <h1>Our Services</h1>
      <h6>Professional Photography for Every Occasion</h6><br />

      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p className="service-desc">{service.description}</p><br />

            <div className="service-buttons">
              <button className="price-btn">{service.price}</button>
              
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
}

export default Services;
