import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import './../styles/education.css'

const Education = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div className='box-container mt-3 mb-0 pr-3'>
            <h2 className='seccion-title mb-5'>{language === 'en' ? 'Education' : 'Educación'}</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">RollingCode School</h3>
                    <div className="subheading mb-2">{language === 'en' ? 'Full Stack developer' : 'Full Stack developer'}</div>
                    <div>{language === 'en' ? 'Course completed. in the same learning: HTML5, CCS3, Bootstrap, javascript, React, ReactBootstrap, express and MongoDB. This is the page that was presented as a final project: ' : `Curso finalizado. en el mismo aprendi HTML5, CCS3, Bootstrap, javascript, React, ReactBootstrap, express y MongoDB.
                    esta es la pagina que se presento como proyecto final: `}<a href="https://mr-chef.netlify.app/" target="blank" className='text-decoration-none'>Mr Chef</a> </div>
                    <div>{language === 'en' ? 'On the page the following repositories were used: ' : `El la pagina se utilizaron los siguientes repositorios: `}<a href="https://github.com/wolfagus/proyecto-final-front" target="blank" className='text-decoration-none'>Frontend </a> <a href="https://github.com/wolfagus/proyectoFinalBack" target="blank" className='text-decoration-none mx-3'>Backend</a> </div>
                </div>
                
                <div className="flex-shrink-0"><span className="text-primary">{language === 'en' ? '2022-2023' : '2022-2023'}</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Argentina Programa</h3>
                    <div className="subheading mb-2">{language === 'en' ? 'First stage' : 'Primera etapa'}</div>
                    <div>{language === 'en' ? 'After the first stage of Argentina program and currently studying the second stage' : 'Finalizada la primera etapa de argentina programa y actualmente cursando la segunda etapa'} <a href="https://seprogramar.inti.gob.ar/inti/certificates/verify/z5q6tB5I7O9yFUaY" target="blank" className='text-decoration-none'>{language === 'en' ? 'View certificate' : 'ver certificado'}</a></div>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">{language === 'en' ? '2022-present' : '2022-presente'}</span></div>
            </div>
            
        </div>
    )
}

export default Education