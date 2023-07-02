import './App.css';
import Navbar from "./components/section/navbar/Navbar"
import Presentation from "./components/section/presentation/Presentation"
import Skills from "./components/section/skills/Skills"
import Projects from "./components/section/projects/Projects"
import Footer from "./components/section/footer/Footer"




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>
      
    </div>
  );
}

export default App;
