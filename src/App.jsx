import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/header";
import Rightmenu from "./components/rightmenu";
import Footer from "./components/footer";
import Form from "./components/form";
function App() {
  return (
    <>
      <div className="app-Container">
        <Header></Header>
        <Main></Main>
        <Routes>
          <Route path="/" element={<Rightmenu />} />

          <Route path="/form" element={<Form />} />
        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
}
export default App;
