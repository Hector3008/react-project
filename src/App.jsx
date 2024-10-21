import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/HEADER/Header";
import FOOTER from "./components/footer/footer";
import Mains__slider from "./components/SECTION/Main__slider";

function App() {

  return (
    <>
      <Header />
      <Mains__slider />
      <main className="main-content">
        {/* Aquí va tu contenido principal */}
        <p>Hola, esto es el contenido del main</p>
      </main>
      
      <FOOTER/>
    </>
  );
}

export default App;
