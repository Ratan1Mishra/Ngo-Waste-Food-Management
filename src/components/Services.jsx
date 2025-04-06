import React from "react";
import Menu from "./Menu";
import Footer from "./footer";
import './services.css';
const services = [
  {
    icon: "❤️", 
    title: "Save Food, Save Lives",
    description: "Our mission is to deliver surplus food to those in need."
  },
  {
    icon: "🚚", 
    title: "Food Collection & Distribution",
    description: "We collect food from various locations and distribute it to the needy."
  },
  {
    icon: "🍽️", 
    title: "Community Kitchen",
    description: "Our kitchen processes surplus food hygienically and delivers it to the needy."
  },
  {
    icon: "🌿", 
    title: "Sustainability & Awareness",
    description: "We organize workshops to prevent food waste and raise awareness."
  },
  {
    icon: "🙌", 
    title: "Join Us",
    description: "Become a volunteer, donate, or contribute food from your business."
  },
  {
    icon: "📊", 
    title: "Impact Reports",
    description: "We provide transparency with regular reports on how food donations are utilized."
  },
  {
    icon: "🎓", 
    title: "Educational Programs",
    description: "Workshops and training sessions to educate communities on food sustainability."
  }
];

const Services = () => {
  return (
    <section className="py-12 bg-gray-100 text-center">
    <Menu/>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition-all">
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Services;
