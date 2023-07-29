import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import axios from "axios";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import BookPage from "./components/BookPage";
import FilteredPage from "./components/FilteredPage";
import NotFound from "./components/NotFound";

const App = () => {
  const [texts, setTexts] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const API = async () => {
      try {
        const {data: text} = await axios.get('../api/texts.json');
        const {data: book} = await axios.get('../api/books.json');
        setTexts(text);
        setBooks(book);
      }
      catch (error) {
        console.log(`Erro: ${error}`);
      }
    }
    API();
  }, []);

  return (
    <div className="min-w-screen min-h-screen flex flex-col bg-zinc-100">
      <Navigation texts={texts} />

      <main className="px-1 md:px-8 lg:px-16 xl:px-32">
        <hr className="border-zinc-400"></hr>

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