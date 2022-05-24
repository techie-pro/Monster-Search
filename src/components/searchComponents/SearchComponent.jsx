import React, { Component } from 'react';
import './search-box.css';
export class SearchComponent extends Component {
  render() {
    return (
      <div>
        <input
          className='search-box '
          type='search'
          placeholder='Search for monster'
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchComponent;
