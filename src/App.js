import logo from './logo.svg';
import './App.scss';
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import About from "./components/About"
import Credits from "./components/Credits"
import SidebarNav from "./components/SidebarNav"

function App() {
  return (
    <div className="App">
        <div className="sections">
          <Intro/>
          <About/>
          <Projects/>
          <Credits/>
        </div>
      <SidebarNav />
    </div>
  );
}

export default App;
