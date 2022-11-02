import "./App.css";
import Paginas from "./Modulos/Blog.js";
import Pt1 from "./Modulos/Pt1-bruno";
import Wenten from "./Modulos/wenten";
import Julieta from './Modulos/Juli';
import Santi from './Modulos/Santy';
import Azul from './Modulos/Azul';
import Gon_maca from "./Modulos/Gonza-maca";
import Teo from "./Modulos/Teo";
import Pedro from "./Modulos/Pedro";

function App() {
  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
      </style>
      <header className="App-header">
        <ul className="header-dad">
          <p className="titulo-header">Las Islas Malvinas</p>
          <img
            className="arg-icon"
            src={require("./img/arg-icon.png")}
            alt="argentina icono"
          />
        </ul>
      </header>
      <div className="inicio">
        <img src={require("./img/bandera.png")} alt="imagen ushuaia" />
      </div>
      <div className="Pading">
        <Pt1 />
        <Wenten />
        <Julieta />
        <Santi />
        <Azul />
        <Gon_maca />
        <Teo />
        <Pedro />
      </div>

      <footer></footer>
    </div>
  );
}

export default App;
