import { Component } from 'react';

export class SearchBar extends Component {
  state = {
    input: '',
  };
  handleInput = e => {
    this.setState({ input: e.target.value });
  };
  render() {
    return (
      <header className="Searchbar">
        <form
          className="SearchForm"
          onSubmit={e => this.props.handleSubmit(e, this.state.input)}
        >
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
