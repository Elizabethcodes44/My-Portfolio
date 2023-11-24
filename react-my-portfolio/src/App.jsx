import "./App.css";
import Main from "./components/Main";
import Header from "./components/header";
import Rightmenu from "./components/rightmenu";
import Footer from "./components/footer"
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
