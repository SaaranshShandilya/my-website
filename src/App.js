import './App.css';
import Intro from './components/Intro';
import About from './components/About'
import Education from './components/Education';
import Itprof from './components/Itprof';
import Experience from './components/Experience';
import Projects from './components/Projects';
function App() {
  return (
    <div>
      <div >
        <div >
        <Intro/>
        </div>
        <div >
          <About/>
        </div>
        <div>
          <Education/>
        </div>
        <div>
          <Itprof/>
        </div>
        <div>
          <Experience/>
        </div>
        <div>
          <Projects/>
        </div>
        <footer>
        <div className={ 'spacer darklayer' }></div>
        <div id="contact" className="bg-neutral-900 md:p-10 md:grid md:grid-cols-2 text-white">
          <div>
            <h1 className="text-4xl md:ml-20 ml-4 pt-4 mb-10 text-teal-500">QUICK LINKS:</h1>
            <p className="text-2xl md:ml-20 ml-4 mb-10 " ><a href="#about">About</a></p>
            <p className="text-2xl md:ml-20 ml-4 mb-10"><a href="#quali">Educational Qualifications</a></p>
            <p className="text-2xl md:ml-20 ml-4 mb-10"><a href="#itprof">IT Proficiency</a></p>
            <p className="text-2xl md:ml-20 ml-4 mb-10"><a href="#job">Experience</a></p>
            <p className="text-2xl md:ml-20 ml-4 mb-10"><a href="#projects">Projects</a></p>
          </div>
          <div>
            <h1 className="text-4xl md:ml-20 ml-4 mb-10 text-teal-500">FIND ME:</h1>
            <a href="https://github.com/SaaranshShandilya" className='fa fa-github text-5xl md:ml-20 ml-4'></a>
            <a href="https://www.facebook.com/Saaranshsundi47" className='fa fa-facebook text-5xl ml-10'></a>
            <a href="https://www.instagram.com/whyyysaaransh/" className='fa fa-instagram text-5xl ml-10'></a>
            <a href="https://www.linkedin.com/in/saaransh-shandilya-799b441b5/" className='fa fa-linkedin text-5xl ml-10'></a>
            <a href="mailto:saaranshshandilya@gmail.com" className='fa fa-google text-5xl ml-10'></a>

            <h1 className="text-4xl mt-10 md:ml-20 ml-4 mb-10 text-teal-500">CONTACT ME:</h1>
            <p className="text-2xl md:ml-20 ml-4 mb-10 ">Phone: +91-7289009286</p>
            <p className="text-2xl md:ml-20 ml-4 mb-10 ">Email: saaranshshandilya@gmail.com</p>
            <p className="text-2xl md:ml-20 ml-4 mb-10 ">Address: 101, Om Residency, Laxman Vihar, Phase-2</p>
            <p className="text-2xl md:ml-20 ml-4 mb-10 ">Gali no.4, Gurgaon, Haryana</p>



          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;
