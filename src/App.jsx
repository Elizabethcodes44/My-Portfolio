import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Main from "./components/Home.jsx";
import Footer from "./components/footer";
import Form from "./components/form";
import Projects from "./components/projects.jsx";
import About from "./components/About.jsx";
function App() {
  return (
    <>
      <div className="app-Container">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Form />} />
        </Routes>

        <Footer></Footer>
      </div>
    </>
  );
}
export default App;
