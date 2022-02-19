import {
  AddInfoLinks,
  AddInfoPointsText,
  AddInfoLinksWrapper,
  AddInfoHeader,
} from './StyledAdditionalInfo';
import { IoPeopleSharp } from 'react-icons/io5';
import { MdOutlineRateReview } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

export default function AdditionalInformation() {
  const location = useLocation();

  return (
    <>
      <AddInfoHeader>Additional information</AddInfoHeader>
      <AddInfoLinksWrapper>
        <AddInfoLinks to="cast" state={{ from: location?.state?.from ?? '/' }}>
          <IoPeopleSharp />
          <AddInfoPointsText>Cast</AddInfoPointsText>
        </AddInfoLinks>
        <AddInfoLinks
          to="reviews"
          state={{ from: location?.state?.from ?? '/' }}
        >
          <MdOutlineRateReview />
          <AddInfoPointsText>Reviews</AddInfoPointsText>
        </AddInfoLinks>
      </AddInfoLinksWrapper>
    </>
  );
}
