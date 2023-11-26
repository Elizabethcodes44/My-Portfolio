import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
        <Rightmenu></Rightmenu>
        <Footer></Footer>
      </div>
    </>
  );
}
export default App;
