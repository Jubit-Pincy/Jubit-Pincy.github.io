import Navbar from "./Components/navbar/navbar";
import Intro from "./Components/intro/intro";
import Skill from "./Components/skills/skill"
import Works from "./Components/works/works"
import Contact from "./Components/contact/contact"
import Footer from "./Components/footer/footer"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
