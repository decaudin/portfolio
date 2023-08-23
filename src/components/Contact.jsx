import React from "react";
import "../styles/Contact.scss";
import iconeMail from "../assets/icone/iconMail.png";
import iconeLocalisation from "../assets/icone/iconLocalisation.jpg";
import iconePhone from "../assets/icone/iconPhone.png";

const Contact = () => {

    const emailAddress = "xd.decaudin@gmail.com";

    return (
        <div className="contact">
            <h2>Me contacter</h2>
            <div className="contactDescription">
                <p>Je suis ravi que vous ayez pris le temps de visiter mon portfolio !</p>
                <p>N'hésitez pas à me contacter si vous avez des questions, pour discuter de vos projets ou d'éventuelles collaborations.</p>
                <p>Je suis ouvert à toute nouvelle opportunité et serai très heureux de vous lire.</p>
                <p>A très bientôt !</p>
            </div>
            <div className="contactEmail">
                <img className="iconeMail" src={iconeMail} alt="Icone email" />
                <a className="mailTo" href={`mailto:${emailAddress}`}>xd.decaudin@gmail.com</a>
            </div>                
            <div className="contactPhone">
                <img className="iconePhone" src={iconePhone} alt="Icone téléphone portable" />
                <p className="phoneNumber">06.38.05.61.08</p>
            </div>
            <div className="localisation">
                <img className="iconeLocalisation" src={iconeLocalisation} alt="Icone localisation" />
                <a className="toLocalisation" href="https://www.google.com/maps/place/Toulouse" target="_blank"  rel="noopener noreferrer">Toulouse</a>
            </div>
        </div>
    );
};

export default Contact;