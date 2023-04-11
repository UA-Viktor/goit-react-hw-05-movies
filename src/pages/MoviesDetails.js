import { Link, Outlet, useParams } from 'react-router-dom';

const MoviesDetails = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return (
    <>
      <h1>MoviesDetails: {movieId}</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
