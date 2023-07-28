import { Route, Routes } from "react-router";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div>

      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<h1>Início</h1>} />
          <Route path="/catalogo" element={<h1>Catálogo</h1>} />
          <Route path="/livros/:isbn" element={<h1>Página de Livro</h1>} />
          <Route path="/categoria/:category" element={<h1>Página de Livro</h1>} />
        </Routes>
      </main>

    </div>
  );
};

export default App;