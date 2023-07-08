// import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Contact from "./components/Portfolio/homepage/contact";
import Projects from "./components/Portfolio/homepage/projects";
import About from "./components/Portfolio/homepage/about";
import HomePage from "./components/Portfolio/homepage";
import Services from "./components/Portfolio/homepage/services/indes";
import Skills from "./components/Portfolio/homepage/skils/Skils";

import SingleHomePage from "./components/Portfolio/SingleHomePage";
import SingleHomePageProfile from "./components/Portfolio/SingleHomePage/Profile";
import SingleHomePageSkills from "./components/Portfolio/SingleHomePage/skils/Skils";
import SingleHomePageServices from "./components/Portfolio/SingleHomePage/services/indes";
import { Navigate, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SingleHomePage />}>
          <Route path="Home" index element={<><SingleHomePageProfile /><SingleHomePageSkills /></>} />
          <Route path="Skills" element={<Skills />} />
          {/* <Route path="Services" element={<Services />} /> */}
          <Route path="Contact" element={<Contact />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="About" element={<About />} />
        </Route>
        <Route path="*" element={<Navigate to="Home" replace={true} />} />
      </Routes>
      </HashRouter>
  );
}




export default App;
