// import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Contact from "./components/Portfolio/homepage/contact";
import Projects from "./components/Portfolio/homepage/projects";
import About from "./components/Portfolio/homepage/about";
import HomePage from "./components/Portfolio/homepage";
import Services from "./components/Portfolio/homepage/services/indes";
import Skills from "./components/Portfolio/homepage/skils/Skils";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Portfolio/homepage/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/Home" element={<Profile/> }/>
          <Route path="Skills" element={<Skills />} />
          <Route path="Services" element={<Services />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="About" element={<About />} />
        </Route>
        <Route path="*" element={<NoMatch />} /> {/* Optional: Render a "NoMatch" component for invalid routes */}
      </Routes>
    </BrowserRouter>
  );
}

function NoMatch() {
  return <h1>404 Not Found</h1>;
  {
    /* Optional: Define a "NoMatch" component */
  }
}

export default App;
