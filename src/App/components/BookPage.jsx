import { Link, useParams } from "react-router-dom";
import { correctCategory } from "../../js/auxMethods";

function BookPage() {
  const texts = require('../../api/texts.json');
  const books = require('../../api/books.json');
  const { isbn } = useParams()
  const bookUrl = isbn.split('-').join('');
  const book = books.find(book => book.isbn === isbn);

  return (
    <div className="w-full h-fit">
      <div className="inline-flex">
        <img alt="Capa do Livro" className="shadow-lg shadow-zinc-500" src={`/assets/books/${bookUrl}.jpg`}></img>
        <div className="flex flex-col px-10 py-2">
          <Link to={`/categoria/${book.categoria}`} className="transition duration-300 ease-in-out hover:text-red-500" >
            <h3 className="text-xl font-semibold uppercase">{correctCategory(book.categoria)}</h3>
          </Link>
          <h1 className="text-2xl font-medium uppercase overflow-y-auto line-clamp-2">{book.titulo}</h1>
          <h2>de: &nbsp;
            <Link to={`/autor/${book.autor}`} className="text-zinc-600 font-medium transition duration-300 ease-in-out hover:text-red-500" >{book.autor}</Link>
          </h2>
          <div className="flex-grow inline-flex space-x-20" role="complementary">
            <div className="mt-4 p-2 h-[97%] w-2/5 border">
              <h6 className="text-zinc-800 font-medium uppercase">{texts["book-description"]}</h6>
              <p className="text-justify text-zinc-700">{book.descricao}</p>
            </div>
            <div className="mt-4 p-2 h-[97%] w-2/5 border">
              <h6 className="text-zinc-800 font-medium uppercase">{texts["book-characteristics"]}</h6>
              <ul className="list-inside list-disc">
                <li>{texts["book-year"]} {book.ano}</li>
                <li>{texts["book-pages"]} {book.paginas}</li>
                <li>{texts["book-isbn"]} {book.isbn}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;