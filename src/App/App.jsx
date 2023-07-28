import { Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-zinc-100">
      <Navigation />

      <main className="px-32">
        <hr className="border-zinc-400"></hr>

        <div className="py-4 px-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<h1>Catálogo</h1>} />
            <Route path="/livros/:isbn" element={<h1>Página de Livro</h1>} />
            <Route path="/categoria/:category" element={<h1>Categoria</h1>} />
          </Routes>
        </div>
      </main>

    </div>
  );
};

export default App;