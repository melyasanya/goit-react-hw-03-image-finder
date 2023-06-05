import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

export const ImageGallery = ({ onClick, state }) => {
  if (state.status === 'resolved') {
    return (
      <>
        <ul className="ImageGallery">
          {state.images &&
            state.images.map(el => {
              return <ImageGalleryItem el={el} key={el.id} />;
            })}
        </ul>
        {state.images.length > 0 && state.images.length % 12 === 0 && (
          <Button onClick={onClick} />
        )}
      </>
    );
  }
  if (state.status === 'pending') {
    return <Loader />;
  }
};

ImageGallery.propTypes = {
  onClick: PropTypes.func,
  state: PropTypes.object,
};
