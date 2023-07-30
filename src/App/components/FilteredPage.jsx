import { useParams } from 'react-router-dom';
import { correctCategory } from '../../js/auxMethods';
import Item from './Item';
import ItemLittler from './ItemLittler';

const FilteredPage = ({ texts, books, filterKey }) => {
  const { param } = useParams();
  const size = { width: window.innerWidth, height: window.innerHeight };

  const list = books.filter(book => book[filterKey].includes(param))
    .map(book => (size.width >= 768) ? <Item key={book.isbn} book={book} texts={texts} /> : <ItemLittler key={book.isbn} book={book} />);

  if (list.length === 0) window.location.href = '/*';

  return (
    <>
      <h1 className='text-4xl 2xl:text-5xl text-center font-medium uppercase'>{correctCategory(param)}</h1>
      <ul className='my-5 w-full md:w-fit h-full grid justify-center sm:grid-cols-3 md:grid-cols-none lg:grid-cols-2 3xl:grid-cols-3 lg:gap-x-3 xl:gap-x-2 1.5xl:gap-x-14 2xl:gap-x-24 3xl:gap-x-14 gap-y-10 lg:gap-y-10 xl:gap-y-20 overflow-y-auto no-scroll overflow-x-hidden'>
        {list}
      </ul>
    </>
  );
};

export default FilteredPage;