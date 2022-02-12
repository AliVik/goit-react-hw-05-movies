import ReviewsItem from '../ReviewsItem';
import { ReviewListTag } from './StyledReviewList';
import PropTypes from 'prop-types';

export default function ReviewsList({ reviews }) {
  return (
    <ReviewListTag>
      {reviews.map(review => {
        const { id, created, content } = review;
        const { rating, username } = review.author_details;
        return (
          <ReviewsItem
            key={id}
            created={created}
            content={content}
            username={username}
            rating={rating}
          />
        );
      })}
    </ReviewListTag>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author_details: PropTypes.object,
    })
  ),
};
