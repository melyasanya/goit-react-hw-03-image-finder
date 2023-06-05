import { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
  state = {
    input: '',
  };
  handleInput = e => {
    this.setState({ input: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.input);
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
            value={this.state.input}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  handleSubmit: PropTypes.func,
};
