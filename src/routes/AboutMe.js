import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import profileImage from "./../assets/assets/fotoagustinmercado.jpg";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./../styles/aboutMe.css";

const AboutMe = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="box-container">
      <div className="d-flex">
        <h1 className="name fs-1">
          Esteban Agustin <span className="important">Mercado</span>
        </h1>

        <div className="image-container2">
          <img
            src={profileImage}
            className="profile-image"
            alt="profile-image"
          />
        </div>
      </div>
      <div className="contact-data fs-5">
        Manuela pedraza 953 · San Miguel de Tucumán, Tucumán CP 4000 · +549 3816619695·{" "}
        <a className="important" href="mailto:agustinmercado1234@gmail.com">
          agustinmercado1234@gmail.com
        </a>
      </div>
      <h4>
          <span className="important">Full stack developer</span>
        </h4>
      <p className="description">
        {language === "en"
          ? "I am passionate about technology, I studied to make my career as a Full Stack MERN developer (Front-end and Back-end). My goals are to join the world of it and improve myself professionally in the field of development. Active, sociable and easy to adapt to groups and situations. Basic English that I continue to study to improve it every day, ready to face the challenges that come my way in the future"
          : "Soy apasionado de la tecnologia, Estudie para hacer mi carrera como Full Stack developer MERN (Front-end and Back-end). Mis metas son incorporarme al mundo de it y perfeccionarme profesionalmente en el campo del desarrollo. Activo, sociable, y de fácil adaptacion a grupos y situaciones. ingles basico que sigo estudiando para mejorarlo cada dia, listo para enfrentar los desafios que me deparen en el futuro"}
      </p>
      <div className="social-icons">
        <a
          className="social-icon"
          target="_blank"
          href="https://www.linkedin.com/in/esteban-agustin-mercado-210b03235/"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="social-icon"
          target="_blank"
          href="https://github.com/wolfagus"
        >
          <AiFillGithub />
        </a>
        <a
          className="social-icon"
          target="_blank"
          href="https://www.facebook.com/esteban.a.mercado"
        >
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
