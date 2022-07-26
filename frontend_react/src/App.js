import './App.scss';
import {About, Footer, Header, Skills, Testimonial, Work} from './container'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Skills/>
      <Testimonial/>
      <Footer/>

    </div>
  );
}

export default App;
