import { useParams } from "react-router-dom";
import Item from "./Item";

const Author = () => {
  const { name } = useParams();
  const books = require('../../api/books.json');

  const list = books.filter(book => book.autor === name).map(book => <Item book={book} key={book.isbn} />)

  return (
    <>
      <h1 className='text-4xl'>{name}</h1>
      <ul className='my-5 w-fit h-full grid grid-cols-2 gap-x-24 gap-y-20 overflow-y-auto no-scroll'>
        {list}
      </ul>
    </>
  );
};

export default Author;