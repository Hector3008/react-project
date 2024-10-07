import "./App.css";
import NAVBAR from "./components/navbar/navbar";
import FOOTER from "./components/footer/footer";
function App() {
  let nombre = "hector";

  return (
    <>
      <NAVBAR />
      <div className="testing">hola {nombre}</div>
      <FOOTER />
    </>
  );
}

export default App;
