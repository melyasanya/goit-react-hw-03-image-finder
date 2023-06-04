import { Component } from 'react';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { getImages } from 'services/getImages';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

let pageNumber = 1;

export class ImageGallery extends Component {
  state = {
    images: null,
    status: 'idle',
    error: '',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ status: 'pending' });
      getImages(this.props.searchQuery, pageNumber)
        .then(response => response.json())
        .then(images =>
          this.setState({ images: images.hits, status: 'resolved' })
        )
        .catch(error => {
          this.setState({ error, status: 'rejected' });
        });
    }
  }
  onClickLoad = () => {
    pageNumber += 1;
    getImages(this.props.searchQuery, pageNumber)
      .then(response => response.json())
      .then(load =>
        this.setState(prev => {
          return { images: [...prev.images, ...load.hits] };
        })
      );
  };
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
          {this.state.images && <Button onClickLoad={this.onClickLoad} />}
        </>
      );
    }
    if (this.state.status === 'pending') {
      return <Loader />;
    }
  }
}
