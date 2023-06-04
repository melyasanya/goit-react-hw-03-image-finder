import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';
import './styles.css';

export class App extends Component {
  state = {
    input: '',
  };

  handleSubmit = (e, input) => {
    e.preventDefault();

    this.setState({ input });
  };

  render() {
    return (
      <>
        <SearchBar handleSubmit={this.handleSubmit} />
        <ImageGallery searchQuery={this.state.input} />
      </>
    );
  }
}
