/*import React from "react";
import "../styles/Contact.scss";

const Contact = () => {
    return (
        <div className="contact">
            <h2>Me contacter</h2>
            <div className="contactDescription">
                <p>Je suis ravi que vous ayez pris le temps de visiter mon portfolio ! </p>
                <p>N'hésitez pas à me contacter si vous avez des questions, pour discuter de vos projets ou d'éventuelles collaborations.</p>
                <p> Je suis ouvert à toute nouvelle opportunité et serai très heureux de vous lire.</p>
                <p>A très bientôt !</p>
            </div>
        </div>
        
    )
}

export default Contact;*/

import React, { useState } from "react";
import axios from "axios";
import "../styles/Contact.scss";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://portfolio-delta-six-91.vercel.app/send-email", formData);
            console.log("Réponse du serveur:", response.data);
        } catch (error) {
            console.error("Erreur lors de l'envoi de données au serveur:", error);
        }
    };

    return (
        <div className="contact">
            <h2>Me contacter</h2>
            <div className="contactDescription">
                <p>Je suis ravi que vous ayez pris le temps de visiter mon portfolio !</p>
                <p>N'hésitez pas à me contacter via le formulaire si vous avez des questions, pour discuter de vos projets ou d'éventuelles collaborations.</p>
                <p>Je suis ouvert à toute nouvelle opportunité et serai très heureux de vous lire.</p>
                <p>A très bientôt !</p>
            </div>
            <form className="contactForm" onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Votre nom"/>
                </div>
                <div className="formGroup">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Votre e-mail"/>
                </div>
                <div className="formGroup">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Votre message"></textarea>
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default Contact;