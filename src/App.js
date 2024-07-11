import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HashRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
