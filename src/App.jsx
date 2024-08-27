import './App.css';
import Nav from './Components/Nav';
import Intro from './Components/Intro';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

const App = () => {
  return ( 
    <>

    <header>
      <Nav />
    </header>
    <main>
      <Intro />
      <About />
      <Projects />
      <Footer />
    </main>

    </>
   );
}
 
export default App;