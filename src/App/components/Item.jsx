import './css/components.css';
import { correctCategory } from "../../js/auxMethods";
import { Link } from 'react-router-dom';

const Item = props => {
  const texts = require('../../api/texts.json');
  const book = props.book;
  const imgName = book.isbn.split('-').join('');

  return (
    <li className="w-[700px] h-[420px] shadow-lg inline-flex rounded-xl border">
      <Link className='min-w-[300px] min-h-[420px] overflow-hidden rounded-l-xl' to={`/livros/${book.isbn}`}>
        <img alt='Capa do Livro' src={`/assets/books/${imgName}.jpg`} className="rounded-l-xl transition ease-in-out duration-1000 hover:scale-110"></img>
      </Link>
      <div className="relative px-8 py-6">
        <h6 className="text-lg font-bold uppercase"><Link className='transition ease-in-out hover:text-red-600' to={`/categoria/${book.categoria}`}>{correctCategory(book.categoria)}</Link></h6>
        <h4 className="mt-2 text-xl font-medium overflow-auto line-clamp-2 no-scroll"><Link to={`/livros/${book.isbn}`}>{book.titulo}</Link></h4>
        <h5 className="inline-flex font-medium">{texts['for-author']} &nbsp; <Link to={`/autor/${book.autor}`} className='transition ease-in-out hover:text-red-600'>{book.autor}</Link></h5>
        <p className='absolute top-[85%] text-4xl'>R${book.preco},00</p>
      </div>
    </li>
  );
};

export default Item;