import React, { Component } from 'react'
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';
  

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'December',
      filterOption: 'Uploaded'
    };
  }
  render() {
    return (
      <div className='App'>
        <SearchBar 
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          />
        <FilterableList 
          files={this.props.files} 
          filterOption={this.state.filterOption}
          searchTerm= {this.state.searchTerm}
        />
      </div>
    )
  }
}

export default App

