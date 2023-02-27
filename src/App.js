import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import './App.css';
import AboutMe from './routes/AboutMe'
import Education from './routes/Education'
import Menu from './components/Menu/Menu';
import Skills from './routes/Skills';
import LanguageProvider from './context/LanguageContext';

function App() {
  return (
      <Router>
        <LanguageProvider>
        <div className='main-container'>
        <Menu/>
        <Routes>
          <Route exact path='/' element={<AboutMe/>}/>
          <Route exact path='/education' element={<Education/>}/>
          <Route exact path='/skills' element={<Skills/>}/>
        </Routes>
        </div>
        </LanguageProvider>
      </Router>
  );
}

export default App;
