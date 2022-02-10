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

ReviewsItem.defaultProps = {
  username: 'unknown',
  rating: 'N/A',
};
