import { Component } from 'react';
import { PropTypes } from 'prop-types';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.search.trim() !== '') {
      this.props.onSubmit(this.state.search);
      this.setState({ search: '' });
    }
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autocomplete="off"
            autofocus
            onChange={this.handleChange}
            value={this.state.search}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.protoTypes = {
  onSubmit: PropTypes.func,
};

