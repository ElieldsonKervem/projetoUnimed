'use client'
 
import { useState } from "react"
import styles from './Carrousel.module.css'

const images = [
    '/banner1.png',
    '/banner2.png'
  ];

export default function Carousel(){
   
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };
     
      return(
        <div className={styles.carousel}>
        <div className={styles.carouselInner} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, index) => (
            <div className={styles.carouselItem} key={index}>
              <img src={src} alt={`Imagem ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className={styles.carouselControl} onClick={prevSlide}>&#10094;</button>
        <button className={styles.carouselControl} onClick={nextSlide}>&#10095;</button>
      </div>
    );
  
      
}
