import {useContext} from 'react'
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaBootstrap,
    FaReact,
    FaNodeJs,
    FaGit,
    FaGithub,
    FaTrello,
    FaCheck,
    FaAngular,
} from 'react-icons/fa'
import { DiMysql } from "react-icons/di";
import {DiMongodb} from 'react-icons/di'
import './../styles/skills.css'
import { LanguageContext } from '../context/LanguageContext'

const Skills = () => {
    const {language} = useContext(LanguageContext)
    return (
        <div className='box-container mt-3 mb-0 pr-3'>
            <h2 className='seccion-title mb-5'>{language==='en'?'Skills':'Habilidades'}</h2>
            <div className="subheading mb-2">{language==='en'?'Programming languages & tools':'Lenguajes de programación y herramientas'}</div>
            <ul className='dev-icons pl-4'>
                <li className='dev-icon d-flex flex-column align-items-center'><FaHtml5/> <span className='dev-icon-name'>HTML 5</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><FaCss3Alt/><span className='dev-icon-name'>CSS 3</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><FaJsSquare/><span className='dev-icon-name'>JAVASCRIPT</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><FaBootstrap/><span className='dev-icon-name'>BOOTSTRAP</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><FaReact/><span className='dev-icon-name'>REACT JS</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><FaAngular/><span className='dev-icon-name'>ANGULAR</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><FaNodeJs/><span className='dev-icon-name'>NODE JS</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><DiMongodb/><span className='dev-icon-name'>MONGO DB</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><DiMysql/><span className='dev-icon-name'>MySQL</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><FaGit/><span className='dev-icon-name'>GIT</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><FaGithub/><span className='dev-icon-name'>GITHUB</span></li>
                <li className='dev-icon d-flex flex-column align-items-center'><FaTrello/><span className='dev-icon-name'>TRELLO</span></li>


            </ul>
            <div className="subheading mb-2">{language==='en'?'Workflow':'Flujo de trabajo'}</div>
            <ul className='u-list'>
                <li className=''><FaCheck/> {language==='en'?'Mobile-first, responsive design':'Mobile-first, diseños responsive'}</li>
                <li className=''><FaCheck/> {language==='en'?'Agile Development & Scrum':'Metodologías ágiles - Scrum'}</li>
            </ul>
            <div className="subheading mb-2">{language==='en'?'Languages':'Idiomas'}</div>
            <ul className='u-list'>
                <li className=''><FaCheck/> {language==='en'?'Spanish (native)':'Español (nativo)'}</li>
                <li className=''><FaCheck/> {language==='en'?'English (basic)':'Ingles (basico)'}</li>
            </ul>
        </div>
    )
}

export default Skills