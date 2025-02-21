import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";
import AssignTask from "./components/AssignTask";
function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={
                    <main className="relative min-h-screen w-screen overflow-x-hidden scroll-smooth">
                        <Hero id="home" />
                        <About id="about" />
                        <Projects id="projects" />
                        <Resume id="resume" />
                        <Contact id="contact" />
                        <Footer />
                    </main>
                } />
                <Route path="/services" element={<Services />} />
                <Route path="/assign-task" element={<AssignTask />} />
            </Routes>
        </Router>
    );
}

export default App;
