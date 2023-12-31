import React, { useEffect, useState } from "react";
import "../styles/Banner.scss";
import banner_img from "../assets/banner_img.webp";

const Banner = () => {
    const [animationClass, setAnimationClass] = useState("");
  
    useEffect(() => {
      // Ajoute la classe d'animation après un court délai pour déclencher l'effet
      const animationTimeout = setTimeout(() => {
        setAnimationClass("animate");
      }, 100);
  
      // Nettoie le timeout lorsque le composant est démonté
      return () => {
        clearTimeout(animationTimeout);
      };
    }, []);
  
    return (
      <div className={`banner ${animationClass}`}>
        <img className="bannerImg" src={banner_img} alt="développeur web" />
        <div className="description">
          <h2>Bonjour et bienvenue sur mon site portfolio !</h2>
          <p>Venez y découvrir mes projets et ma passion pour la création de contenus web modernes et attrayants.</p>
          <p>Désireux de développer des interfaces de qualité offrant une expérience utilisateur optimale, j'espère que mon travail vous plaira.</p>
        </div>
      </div>
    );
  };

export default Banner;


