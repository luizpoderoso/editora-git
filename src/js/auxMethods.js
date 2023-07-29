import { Link } from "react-router-dom";

export const correctCategory = (category) => (
  category === 'programacao'
    ? 'Programação'
    : category === 'design'
      ? 'Design'
      : category === 'frontend'
        ? 'Front-End'
        : category
);

export const authorsArray = autor => {
  const authors = autor.split(' / ');
  const authorsList = authors.map((author, index) => (
    <div key={index} className="inline">
      <Link to={`/autor/${author}`} className="text-zinc-600 font-medium transition duration-300 ease-in-out hover:text-red-500">
        {author}
      </Link>
      {index !== (authors.length - 1) && <span>, </span>}
    </div>
  ));
  return authorsList;
}