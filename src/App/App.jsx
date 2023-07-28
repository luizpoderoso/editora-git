import { Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import BookPage from "./components/BookPage";
import FilteredPage from "./components/FilteredPage";

const App = () => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col bg-zinc-100">
      <Navigation />

      <main className="px-1 md:px-8 lg:px-16 xl:px-32">
        <hr className="border-zinc-400"></hr>

        <div className="py-4 px-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/livros/:isbn" element={<BookPage />} />
            <Route path="/categoria/:param" element={<FilteredPage filter='categoria' />} />
            <Route path="/autor/:param" element={<FilteredPage filter='autor' />} />
          </Routes>
        </div>
      </main>

    </div>
  );
};

export default App;