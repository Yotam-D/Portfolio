import './App.scss';
import {About, Footer, Header, Skills, Work} from './container'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Footer/>

    </div>
  );
}

export default App;
