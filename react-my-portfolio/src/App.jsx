import "./App.css";
import Main from "./components/Main";
import Header from "./components/header";
import Rightmenu from "./components/rightmenu";
function App() {
  return (
    <>
      <div className="app-Container">
        <Header></Header>
        <Main></Main>
        <Rightmenu></Rightmenu>
      </div>
    </>
  );
}
export default App;
