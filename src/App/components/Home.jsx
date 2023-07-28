import { Link } from 'react-router-dom';
import ItemLittler from './ItemLittler';
import { correctCategory } from '../../js/auxMethods';
const texts = require('../../api/texts.json');

const Home = () => {

  return (
    <>
      <div className='w-fit'>
        <h1 className='text-4xl'>{texts['home-title']} &#9825;</h1>
        <hr className='mt-1 border-black'></hr>
        <h2 className='text-lg font-medium'>{texts['home-subtitle']}</h2>
      </div>

      <section className='mt-10 space-y-20'>
        <Sect category="programacao" />
        <Sect category="design" />
        <Sect category="frontend" />
      </section>
    </>
  );
}

export default Home;

const Sect = props => {
  const category = props.category;

  return (
    <div>
      <Link className='transition duration-300 ease-in-out hover:text-red-600' to={`/categoria/${category}`}>
        <h3 className='text-2xl font-medium uppercase'>{correctCategory(category)} &#10030;</h3>
      </Link>
      <hr className='mt-1 border-zinc-200'></hr>
      <ul className='mt-2 inline-flex space-x-10'>
        <BookList category={category} />
      </ul>
      <hr className='mt-1'></hr>
    </div>
  )
}

const BookList = props => {
  const books = require('../../api/books.json');
  const content = [];

  let aux = 0;
  for (const book of books) {
    if (book.categoria === props.category) {
      content.push(<ItemLittler book={book} />);
      aux++;
    }
    if (aux === 6) break;
  }

  return (
    <>
      {content}
    </>
  );
};