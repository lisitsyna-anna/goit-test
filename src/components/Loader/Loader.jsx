import { Comment } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = isLoading => {
  return (
    <LoaderWrapper>
      <Comment
        visible={isLoading}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        color="#fff"
        backgroundColor="#471CA9"
      />
    </LoaderWrapper>
  );
};

export default Loader;
