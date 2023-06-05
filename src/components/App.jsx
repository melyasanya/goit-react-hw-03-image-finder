import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';
import './styles.css';
import { getImages } from 'services/getImages';

export class App extends Component {
  state = {
    input: '',
    images: [],
    status: 'idle',
    error: '',
    pageNumber: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.input !== this.state.input) {
      this.setState({ status: 'pending' });
      getImages(this.state.input, this.state.pageNumber)
        .then(response => response.json())
        .then(images =>
          this.setState({ images: images.hits, status: 'resolved' })
        )
        .catch(error => {
          this.setState({ error, status: 'rejected' });
        });
    }

    if (this.state.pageNumber > prevState.pageNumber) {
      getImages(this.state.input, this.state.pageNumber)
        .then(response => response.json())
        .then(load =>
          this.setState(prev => {
            return {
              images: [...prev.images, ...load.hits],
            };
          })
        );
    }
  }
  onClickLoad = () => {
    this.setState(prev => {
      return { pageNumber: prev.pageNumber + 1 };
    });
  };

  handleSubmit = input => {
    this.setState({ input, pageNumber: 1 });
  };

  render() {
    return (
      <>
        <SearchBar handleSubmit={this.handleSubmit} />
        <ImageGallery onClick={this.onClickLoad} state={this.state} />
      </>
    );
  }
}
