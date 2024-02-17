import React, { Component } from 'react';

import css from './Filter.module.scss';

class Filter extends Component {
  onFilterChange = (e) => {
    this.props.setFilter(e.target.value);
  };

  render() {
    return (
      <label className={css.label}>
        Find contacts by name:{' '}
        <input
          type="text"
          onChange={this.onFilterChange}
          value={this.props.filterValue}
        />
      </label>
    );
  }
}

export default React.memo(Filter);
