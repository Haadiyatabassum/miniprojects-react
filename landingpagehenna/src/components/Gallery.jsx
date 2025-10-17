import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css"; 

const images = [
  "/images/bridal.jpg",
  "/images/mehendi.jpg",
  "/images/m1.jpg",
  "/images/m3.jpg",
  "/images/mm.jpg",

];


const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Henna Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <motion.div
            className="gallery-item"
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img src={img} alt={`Henna ${index}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
