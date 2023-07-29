import { Link } from 'react-router-dom';
import ItemLittler from './ItemLittler';
import { correctCategory } from '../../js/auxMethods';

const Home = ({ texts, books }) => {
  const size = { width: window.innerWidth, height: window.innerHeight };
  const limit = setLimit(size.width);

  return (
    <>
      <div className='w-fit'>
        <h1 className='text-xl md:text-4xl'>{texts['home-title']} &#9825;</h1>
        {size.width > 425 && <hr className='mt-1 border-black'></hr>}
        {size.width > 425 && <h2 className='text-lg font-medium'>{texts['home-subtitle']}</h2>}
      </div>

      <section className='mt-4 md:mt-10 space-y-8 md:space-y-20'>
        <Sect limit={limit} category="programacao" books={books} />
        <Sect limit={limit} category="design" books={books} />
        <Sect limit={limit} category="frontend" books={books} />
      </section>
    </>
  );
}

export default Home;

const Sect = ({ limit, category, books }) => {
  return (
    <div>
      <Link className='transition duration-300 ease-in-out hover:text-red-600' to={`/categoria/${category}`}>
        <h3 className='text-2xl font-medium uppercase'>{correctCategory(category)} &#10030;</h3>
      </Link>
      <hr className='mt-1 border-zinc-200'></hr>
      <ul className='mt-2 inline-flex space-x-5 md:space-x-10'>
        <BookList limit={limit} category={category} books={books} />
      </ul>
      <hr className='mt-1'></hr>
    </div>
  )
}

const BookList = ({ limit, category, books }) => {
  const content = [];

  let aux = 0;
  for (const book of books) {
    if (book.categoria === category) {
      content.push(<ItemLittler key={book.isbn} book={book} />);
      aux++;
    }
    if (aux === (limit ?? 6)) break;
  }

  return (
    <>
      {content}
    </>
  );
};

const setLimit = (width) => (
  (width < 2560)
    ? (width < 2196)
      ? (width < 1800)
        ? (width < 1024)
          ? (width < 768)
            ? (width < 425)
              ? 3
              : 4
            : 5
          : 6
        : 7
      : 8
    : 9
)