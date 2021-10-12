import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <div className="App">
        <Navbar title="Text Modifier" about="About" />
      </div>
      <div>
        <TextForm heading="Modify your text here" />
      </div>
    </>
  );
}

export default App;
