import { Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Catalog from "./components/Catalog";

const App = () => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col bg-zinc-100">
      <Navigation />

      <main className="px-32">
        <hr className="border-zinc-400"></hr>

        <div className="py-4 px-2 [&>h1]:text-4xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/livros/:isbn" element={<h1>Página de Livro</h1>} />
            <Route path="/categoria/:category" element={<h1>Categoria</h1>} />
            <Route path="/autor/:nome" element={<h1>Página de Autor</h1>} />
          </Routes>
        </div>
      </main>

    </div>
  );
};

export default App;