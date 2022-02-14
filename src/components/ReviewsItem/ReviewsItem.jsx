import PropTypes from 'prop-types';
import {
  ReviewsItemTag,
  ReviewsItemWrapper,
  ReviewsNameWrapper,
  ReviewsRating,
  ReviewsText,
  ReviewsName,
  ReviewsDate,
} from './StyledReviewsItem';

export default function ReviewsItem({ username, rating, created, content }) {
  return (
    <ReviewsItemTag>
      <ReviewsItemWrapper>
        <ReviewsNameWrapper>
          <ReviewsName>{username}</ReviewsName>
          {rating && <ReviewsRating>{rating}/10</ReviewsRating>}
        </ReviewsNameWrapper>

        <ReviewsDate>{created}</ReviewsDate>
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
