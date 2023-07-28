import './css/components.css';
import { correctCategory } from "../../js/auxMethods";
import { Link } from 'react-router-dom';

const Item = props => {
  const book = props.book;
  const imgName = book.isbn.split('-').join('');

  return (
    <li className="w-[700px] h-[420px] shadow-lg inline-flex rounded-xl border">
      <img src={`/assets/books/${imgName}.jpg`} className="rounded-l-xl"></img>
      <div className="px-8 py-6">
        <h6 className="text-lg font-bold uppercase"><Link to={`/categoria/${book.categoria}`}>{correctCategory(book.categoria)}</Link></h6>
        <h4 className="mt-2 text-xl font-medium overflow-auto line-clamp-2 no-scroll"><Link to={`/livros/${book.isbn}`}>{book.titulo}</Link></h4>
        <h5 className="inline-flex font-medium">de: &nbsp; <Link to={`/autor/${book.autor}`} className='transition ease-in-out hover:text-red-600'>{book.autor}</Link></h5>
      </div>
    </li>
  );
};

export default Item;