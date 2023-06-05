import PropTypes from 'prop-types';

import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleESC);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleESC);
  }
  handleESC = e => {
    if (e.code === 'Escape') {
      return this.props.closeModal();
    }
  };
  handleOverlay = e => {
    if (e.target.className === 'Overlay') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleOverlay}>
        <div className="Modal">
          <img src={this.props.url} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string,
  closeModal: PropTypes.func,
};
