import './css/components.css';
import Item from './Item';

const Catalog = () => {
  const books = require('../../api/books.json');

  const list = books.map(book => <Item book={book} key={book.isbn} />)

  return (
    <>
      <div className='relative w-full inline-flex'>
        <h1 className='text-4xl'>Todo nosso catálogo...</h1>
        <div className='absolute flex mt-4 right-20'>
          <label htmlFor='form' className='font-medium mr-2'>Search:</label>
          <form name='form' className='border rounded-lg bg-zinc-50 border-zinc-200'>
            <input disabled className='px-1 rounded-l-lg appearance-none' />
            <span className='px-1 rounded-r-lg text-zinc-400 bg-zinc-50 cursor-pointer'>&#10095;</span>
          </form>
        </div>
      </div>
      <ul className='my-5 w-fit h-full grid grid-cols-2 gap-x-24 gap-y-20 overflow-y-auto no-scroll'>
        {list}
      </ul>
    </>
  );
};

export default Catalog;