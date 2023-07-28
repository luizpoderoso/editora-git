import './css/components.css';
import Item from './Item';
import ItemLittler from './ItemLittler';

const Catalog = () => {
  const texts = require('../../api/texts.json');
  const books = require('../../api/books.json');
  const size = { width: window.innerWidth, height: window.innerHeight };

  const list = books.map(book => (size.width >= 768) ?  <Item book={book} key={book.isbn} /> : <ItemLittler key={book.isbn} book={book} />);

  return (
    <>
      <div className='md:relative w-full inline-flex justify-center md:justify-normal'>
        { size.width >= 768 && <h1 className='w-fit text-4xl 2xl:text-5xl'>{texts['catalog-title']}</h1>}
        <div className='md:absolute flex md:mt-4 right-0'>
          <label htmlFor='form' className='font-medium mr-2'>{texts['search-label']}</label>
          <form name='form' className='border rounded-lg text-base xl:text-xl 2xl:text-3xl bg-zinc-50 border-zinc-200'>
            <input disabled className='px-1 rounded-l-lg appearance-none' />
            <span className='px-1 rounded-r-lg text-zinc-400 bg-zinc-50 cursor-pointer'>&#10095;</span>
          </form>
        </div>
      </div>

      <ul className='my-5 w-full md:w-fit h-full grid justify-center sm:grid-cols-3 md:grid-cols-none lg:grid-cols-2 3xl:grid-cols-3 lg:gap-x-3 xl:gap-x-2 1.5xl:gap-x-14 2xl:gap-x-24 3xl:gap-x-14 gap-y-10 lg:gap-y-10 xl:gap-y-20 overflow-y-auto no-scroll'>
        {list}
      </ul>
    </>
  );
};

export default Catalog;