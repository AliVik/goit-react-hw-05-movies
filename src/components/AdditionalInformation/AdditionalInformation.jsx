import {
  AddInfoLinks,
  AddInfoPointsText,
  AddInfoLinksWrapper,
  AddInfoHeader,
} from './StyledAdditionalInfo';
import { IoPeopleSharp } from 'react-icons/io5';
import { MdOutlineRateReview } from 'react-icons/md';

export default function AdditionalInformation() {
  return (
    <>
      <AddInfoHeader>Additional information</AddInfoHeader>
      <AddInfoLinksWrapper>
        <AddInfoLinks to="cast">
          <IoPeopleSharp />
          <AddInfoPointsText>Cast</AddInfoPointsText>
        </AddInfoLinks>
        <AddInfoLinks to="reviews">
          <MdOutlineRateReview />
          <AddInfoPointsText>Reviews</AddInfoPointsText>
        </AddInfoLinks>
      </AddInfoLinksWrapper>
    </>
  );
}
