import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/about";
import Courses from "../src/pages/Courses/courses";
import Contact from "../src/pages/Contact/contact";
import Blog from "../src/pages/Blog/blog";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Team from "./pages/Team/Team";
import InteligenciaEmocional from "./pages/Blog/posts/InteligenciaEmocional";
import SucessoProficional from "./pages/Blog/posts/sucessoProficional";
import AmbienteToxico from "./pages/Blog/posts/ambientesToxicos";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/inteligenciaEmocional" element={<InteligenciaEmocional />} />
        <Route path="/sucessoProficional" element={<SucessoProficional />} />
        <Route path="/ambienteToxico" element={<AmbienteToxico />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
