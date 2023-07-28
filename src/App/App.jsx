import { Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Category from "./components/Category";
import Author from "./components/Author";
import BookPage from "./components/BookPage";

const App = () => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col bg-zinc-100">
      <Navigation />

      <main className="px-32">
        <hr className="border-zinc-400"></hr>

        <div className="py-4 px-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/livros/:isbn" element={<BookPage />} />
            <Route path="/categoria/:category" element={<Category />} />
            <Route path="/autor/:name" element={<Author />} />
          </Routes>
        </div>
      </main>

    </div>
  );
};

export default App;