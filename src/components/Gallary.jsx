import React from 'react';
import './Gallery.css';
import Footer from "./footer";
import Menu from "./Menu";
import gallery1 from '../assets/img1.png';
import gallery2 from '../assets/img2.webp';
import gallery3 from '../assets/img3.jpg';
import gallery4 from '../assets/img4.jpg';
import gallery5 from '../assets/img5.jpeg';
import gallery6 from '../assets/img1.png';

const Gallery = () => {
    return (
        <section className="gallery-section">
        <Menu/>
            <h2>Our Work in Pictures</h2>
            <div className="gallery-container">
                <img src={gallery1} alt="Gallery 1" className="gallery-item" />
                <img src={gallery2} alt="Gallery 2" className="gallery-item" />
                <img src={gallery3} alt="Gallery 3" className="gallery-item" />
                <img src={gallery4} alt="Gallery 4" className="gallery-item" />
                <img src={gallery5} alt="Gallery 5" className="gallery-item" />
                <img src={gallery6} alt="Gallery 6" className="gallery-item" />
                <img src={gallery3} alt="Gallery 3" className="gallery-item" />
                <img src={gallery4} alt="Gallery 4" className="gallery-item" />
                <img src={gallery5} alt="Gallery 5" className="gallery-item" />
                <img src={gallery6} alt="Gallery 6" className="gallery-item" />
            </div>
            <Footer/>
        </section>
    );
};

export default Gallery;
