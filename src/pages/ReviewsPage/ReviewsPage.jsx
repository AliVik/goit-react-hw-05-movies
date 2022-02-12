import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../helpers/requestsToAPI';
import ReviewsList from '../../components/ReviewsList';
import formatDate from 'helpers/formatDate';
import NoReviews from '../../components/NoReviews';
import * as Scroll from 'react-scroll';

export default function ReviewsPage() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const scroll = Scroll.animateScroll;

  useEffect(() => {
    async function getReviews() {
      try {
        const reviews = await getMovieReviews(movieId);

        setReviews(
          reviews.map(review => {
            const { rating, username } = review.author_details;

            return {
              author_details: {
                rating,
                username,
              },

              content: review.content,
              created: formatDate(review.updated_at),
              id: review.id,
            };
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieId]);
  scroll.scrollTo(500);
  return (
    <>
      {reviews.length > 0 ? <ReviewsList reviews={reviews} /> : <NoReviews />}
    </>
  );
}
