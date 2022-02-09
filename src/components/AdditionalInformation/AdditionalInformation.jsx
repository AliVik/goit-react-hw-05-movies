import { Link } from 'react-router-dom';

export default function AdditionalInformation() {
  return (
    <>
      <h3>Additional information</h3>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
    </>
  );
}
