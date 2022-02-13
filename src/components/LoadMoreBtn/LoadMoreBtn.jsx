import { LoadButton } from './StyledLoadMoreBtn';

export default function LoadMoreBtn({ onClick }) {
  return (
    <LoadButton type="button" onClick={() => onClick()}>
      Load more
    </LoadButton>
  );
}
