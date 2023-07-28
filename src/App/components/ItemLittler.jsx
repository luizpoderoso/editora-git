import { Link } from "react-router-dom";

const ItemLittler = props => {
  const book = props.book;
  const imgName = book.isbn.split('-').join('');

  return (
    <Link title={book.titulo} className='max-w-[200px] max-h-[280px] overflow-hidden rounded-xl' to={`/livros/${book.isbn}`}>
      <img alt='Capa do Livro' src={`/assets/books/${imgName}.jpg`} className="rounded-xl transition ease-in-out duration-1000 hover:scale-110"></img>
    </Link>
  );
};

export default ItemLittler;
