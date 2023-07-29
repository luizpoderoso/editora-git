import { Link, useParams } from "react-router-dom";
import { authorsArray, correctCategory } from "../../js/auxMethods";

const BookPage = ({ texts, books }) => {
  const { isbn } = useParams()
  const bookUrl = isbn.split('-').join('');

  const book = books.find(book => book.isbn === isbn);
  if (!book) window.location.href = '/*';

  const authorsList = authorsArray(book.autor);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center lg:inline-flex lg:items-stretch lg:flex-row">
        <img alt="Capa do Livro" className="shadow-lg shadow-zinc-500" src={`/assets/books/${bookUrl}.jpg`}></img>
        <div className="h-full flex flex-col items-center md:items-stretch px-10 py-2">
          <div className="text-center lg:text-left">
            <Link to={`/categoria/${book.categoria}`} className="transition duration-300 ease-in-out hover:text-red-500" >
              <h3 className="text-xl font-semibold uppercase">{correctCategory(book.categoria)}</h3>
            </Link>
            <h1 className="text-2xl font-medium uppercase overflow-y-auto line-clamp-2">{book.titulo}</h1>
            <h2>
              <span>{texts['for-author']} &nbsp;</span>
              {authorsList}
            </h2>
          </div>
          <div className="flex-grow flex flex-col items-center lg:flex-grow lg:flex lg:flex-row lg:items-stretch lg:space-x-8 xl:space-x-20" role="complementary">
            <div className="mt-4 p-2 h-full lg:h-[97%] lg:w-2/5 border">
              <h6 className="text-zinc-800 font-medium uppercase">{texts["book-description"]}</h6>
              <p className="line-clamp-[10] overflow-auto overflow-ellipsis text-justify text-zinc-700">{book.descricao}</p>
            </div>
            <div className="mt-4 p-2 h-full lg:h-[97%] w-full lg:w-2/5 border">
              <h6 className="text-zinc-800 font-medium uppercase">{texts["book-characteristics"]}</h6>
              <ul className="list-inside list-disc">
                <li>{texts["book-year"]} {book.ano}</li>
                <li>{texts["book-pages"]} {book.paginas}</li>
                <li>{texts["book-isbn"]} {book.isbn}</li>
              </ul>
            </div>
          </div>
          <p className="font-semibold mt-2 2xl:mt-14 text-2xl 2xl:text-4xl">R${book.preco},00</p>
        </div>
      </div>
    </div>
  );
};

export default BookPage;