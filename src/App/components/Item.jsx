import './css/components.css';
import { authorsArray, correctCategory } from "../../js/auxMethods";
import { Link } from 'react-router-dom';

const Item = ({ book, texts }) => {
  const imgName = book.isbn.split('-').join('');

  return (
    <li className="md:w-full md:h-[420px] lg:w-[430px] lg:h-[210px] xl:w-[500px] xl:h-[378px] 2xl:w-[700px] 2xl:h-[420px] shadow-lg inline-flex rounded-xl border">
      <Link className='md:min-w-[300px] md:min-h-full lg:min-w-[150px] lg:min-h-full xl:min-w-[270px] xl:min-h-full 2xl:min-w-[300px] 2xl:min-h-full overflow-hidden rounded-l-xl' to={`/livros/${book.isbn}`}>
        <img alt='Capa do Livro' src={`/assets/books/${imgName}.jpg`} className="w-full h-full rounded-l-xl transition ease-in-out duration-1000 hover:scale-110"></img>
      </Link>
      <div className="relative lg:min-w-[280px] lg:min-h-[210px] xl:min-w-[230px] 2xl:min-w-[400px] px-2 lg:px-1 xl:px-3 2xl:px-8 py-4 lg:py-1 xl:py-5 2xl:py-6">
        <h6 className="text-lg font-bold uppercase"><Link className='transition ease-in-out hover:text-red-600' to={`/categoria/${book.categoria}`}>{correctCategory(book.categoria)}</Link></h6>
        <h4 className="mt-2 text-xl font-medium overflow-auto line-clamp-2 no-scroll"><Link to={`/livros/${book.isbn}`}>{book.titulo}</Link></h4>
        <h5 className="inline-flex font-medium">
          <span>{texts['for-author']} &nbsp;</span>
          {authorsArray(book.autor)}
        </h5>
        <p className='absolute top-[87%] lg:top-[80%] xl:top-[85%] text-4xl'>R${book.preco},00</p>
      </div>
    </li>
  );
};

export default Item;