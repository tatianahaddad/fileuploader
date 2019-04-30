import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export class SearchBox extends Component {
  render() {
    return (
      <div className='SearchBox'>
        <FontAwesomeIcon icon={faSearch} />
        <input placeholder='Search Term' value = {this.props.searchTerm} />
      </div>
    )
  }
}

export default SearchBox
