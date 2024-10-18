import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navb from "./components/NAVBAR/Navb";
import FOOTER from "./components/footer/footer";
import Mains__slider from "./components/SECTION/Main__slider";

function App() {

  return (
    <>
      <Navb />
      <Mains__slider/>
            <main className="main-content">
        {/* Aquí va tu contenido principal */}
        <p>Hola, esto es el contenido del main</p>
      </main>
    <FOOTER></FOOTER>
    </>
  );
}

export default App;
