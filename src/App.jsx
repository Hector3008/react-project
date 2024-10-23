import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/HEADER/Header";
import FOOTER from "./components/footer/footer";
import Presentacion from "./components/SECTION/Presentacion/Presentacion";
import Curiers from "./components/SECTION/Curiers/Curiers";

function App() {

  return (
    <>
      <Header />
      <Presentacion />
      <Curiers/>
      <main className="main-content">

        {/* Aquí va tu contenido principal */}
        <p>Hola, esto es el contenido del main</p>
      </main>
      
      <FOOTER/>
    </>
  );
}

export default App;
