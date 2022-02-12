import PropTypes from 'prop-types';
import {
  ReviewsItemTag,
  ReviewsItemWrapper,
  ReviewsNameWrapper,
  ReviewsRating,
  ReviewsText,
} from './StyledReviewsItem';

export default function ReviewsItem({ username, rating, created, content }) {
  return (
    <ReviewsItemTag>
      <ReviewsItemWrapper>
        <ReviewsNameWrapper>
          <h2>{username}</h2>
          {rating && <ReviewsRating>{rating}/10</ReviewsRating>}
        </ReviewsNameWrapper>

        <span>{created}</span>
      </ReviewsItemWrapper>

      <ReviewsText>{content}</ReviewsText>
    </ReviewsItemTag>
  );
}

ReviewsItem.propTypes = {
  username: PropTypes.string.isRequired,
  rating: PropTypes.number,
  created: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.string.isRequired,
};
