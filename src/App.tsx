// App.js
import { Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./components/Home"; // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <div className="flex flex-col w-full">
      <header className="flex items-center py-4 px-5 lg:px-12 shadow-lg ">
        <Link to={"/"}>
          <img
            src="/convertImage.png"
            alt="FileConverter logo"
            className="h-12"
          />
        </Link>

        <Navbar />
      </header>

      {/* Renderiza Home en la ruta raíz */}
      <Home />
    </div>
  );
};

export default App;
