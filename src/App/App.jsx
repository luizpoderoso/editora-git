import { useState } from "react";
import { Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import BookPage from "./components/BookPage";
import FilteredPage from "./components/FilteredPage";
import NotFound from "./components/NotFound";
import './app.css';
import Login from "./components/Login";

const App = () => {
  const [isModal, setIsModal] = useState(false);
  const texts = require('../api/texts.json');
  const books = require('../api/books.json');

  return (
    <div id="body" className="relative min-w-screen min-h-screen flex flex-col bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-200">
      {isModal && <Login texts={texts} setIsModal={setIsModal} />}

      <Navigation texts={texts} isModal={isModal} setIsModal={setIsModal} />

      <main className="px-1 md:px-8 lg:px-16 xl:px-32">
        <hr className="border-zinc-400 dark:border-zinc-900"></hr>

        <div className="py-4 px-2">
          <Routes>
            <Route path="/" element={<Home texts={texts} books={books} />} />
            <Route path="/catalogo" element={<Catalog texts={texts} books={books} />} />
            <Route path="/livros/:isbn" element={<BookPage texts={texts} books={books} />} />
            <Route path="/categoria/:param" element={<FilteredPage texts={texts} books={books} filterKey='categoria' />} />
            <Route path="/autor/:param" element={<FilteredPage texts={texts} books={books} filterKey='autor' />} />
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </div>
      </main>

    </div>
  );
};

export default App;