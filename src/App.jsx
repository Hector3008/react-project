import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NAVBAR from "./components/navbar/navbar";
import FOOTER from "./components/footer/footer";
import ScheduleAd from "./components/NAVBAR/ScheduleAd";

function App() {
  let nombre = "hector";

  return (
    <>
      <ScheduleAd />
      <NAVBAR />
      <div className="testing">hola {nombre}</div>
      <FOOTER />
    </>
  );
}

export default App;
