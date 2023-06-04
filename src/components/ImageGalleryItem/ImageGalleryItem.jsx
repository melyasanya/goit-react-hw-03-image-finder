import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isOpened: false,
  };
  handleClick = () => {
    this.setState({ isOpened: true });
  };
  closeModal = () => {
    this.setState({ isOpened: false });
  };
  render() {
    return (
      <>
        {' '}
        <li className="ImageGalleryItem">
          <img
            src={this.props.el.webformatURL}
            alt=""
            className="ImageGalleryItem-image"
            onClick={this.handleClick}
          />
          {this.state.isOpened && (
            <Modal
              url={this.props.el.largeImageURL}
              closeModal={this.closeModal}
            />
          )}
        </li>
      </>
    );
  }
}
