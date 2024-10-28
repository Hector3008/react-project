import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/HEADER/Header";
import FOOTER from "./components/footer/footer";
import Landing from "./components/PAGES/Landing";
import Starters__and__Componets from "./components/SECTION/starters/Starters__and__Componets";

function App() {
  return (
    
    <>
      <Header />
      <Landing />
      <Starters__and__Componets />
      <FOOTER />
    </>
  );
}

export default App;
