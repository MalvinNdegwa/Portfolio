import './index.css';
import Header from './Components/Header';
import Intro from './Components/Intro';
import About from './Components/About';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';



export default function App() {
  return (
    <div>
      <Header/>
      <Intro/>
      <About/>
      <Projects/>
      <Contacts/>
    </div>
  );
}


