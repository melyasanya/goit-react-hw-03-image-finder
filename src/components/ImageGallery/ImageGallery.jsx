import { Component } from 'react';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { getImages } from 'services/getImages';
import { Loader } from 'components/Loader/Loader';

export class ImageGallery extends Component {
  state = {
    images: null,
    status: 'idle',
    error: '',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ status: 'pending' });
      getImages(this.props.searchQuery)
        .then(response => response.json())
        .then(images =>
          this.setState({ images: images.hits, status: 'resolved' })
        )
        .catch(error => {
          this.setState({ error, status: 'rejected' });
        });
    }
  }
  render() {
    if (this.state.status === 'resolved') {
      return (
        <>
          <ul className="ImageGallery">
            {this.state.images &&
              this.state.images.map(el => {
                return <ImageGalleryItem el={el} key={el.id} />;
              })}
          </ul>
        </>
      );
    }
    if (this.state.status === 'pending') {
      return <Loader />;
    }
  }
}
