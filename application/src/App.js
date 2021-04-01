import logo from './logo.svg';
import './App.css';
import Candidate from "./components/candidate/Candidate";
import Skills from "./components/skills/Skill";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";

function App() {
  return (
      <div class="main-content relative">
        <div class="container">
          <Candidate />

          <Skills />

          <Experience />

          <Education />

          <Contact />

          <footer class="footer-sec sec-pad-top-sm sec-pad-bottom text-center">
            <h4>thank you for visiting.</h4>
            <p class="mt-10">Thiago Santos 2021. All rights reserved.</p>
            <ul class="social-icons mt-10">
              <li>
                <a class="facebook-link" href="#">
                  <i id="tt6" class="zmdi zmdi-facebook"></i>
                  <div class="mdl-tooltip" data-mdl-for="tt6">
                    facebook
                  </div>
                </a>
              </li>
              <li>
                <a class="twitter-link" href="#">
                  <i id="tt7" class="zmdi zmdi-twitter"></i>
                  <div class="mdl-tooltip" data-mdl-for="tt7">
                    twitter
                  </div>
                </a>
              </li>
              <li>
                <a class="linkedin-link" href="#">
                  <i id="tt8" class="zmdi zmdi-linkedin"></i>
                  <div class="mdl-tooltip" data-mdl-for="tt8">
                    linkedin
                  </div>
                </a>
              </li>
              <li>
                <a class="dribbble-link" href="#">
                  <i id="tt9" class="zmdi zmdi-dribbble"></i>
                  <div class="mdl-tooltip" data-mdl-for="tt9">
                    dribbble
                  </div>
                </a>
              </li>
              <li>
                <a class="instagram-link" href="#">
                  <i id="tt10" class="zmdi zmdi-instagram"></i>
                  <div class="mdl-tooltip" data-mdl-for="tt10">
                    instagram
                  </div>
                </a>
              </li>
            </ul>

          </footer>
        </div>
      </div>
  );
}

export default App;
