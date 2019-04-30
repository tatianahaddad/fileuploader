import React, { Component } from 'react'

export class FilterOptions extends Component {
  render() {
    const { filterOption } = this.props;
    return (
      <div className='FilterOptions'>
        <div className='FilterOptions--option'>
          <label htmlFor='filter-all'>
          <input type="radio" value="All" id="filter_all" name="filter" checked={filterOption ==="All"}/>
            All
          </label>
        </div>
        <div className='FilterOptions--options'>
          <label htmlFor='filter-uploaded'>
          <input type="radio" value="Uploaded" id="filter_uploaded" name="filter" checked={filterOption ==="Uploaded"}/>
            Uploaded
          </label>
        </div>
        <div className="FilterOptions--option">  
          <label htmlFor="filter-synced">
            <input type="radio" value="Synced" id="filter-synced" name="filter" checked={filterOption ==="Synced"}/>
          Synced
          </label>
        </div>
        <div className="FilterOptions--option">  
          <label htmlFor="filter-new">
          <input type="radio" value="New" id="filter_new" name="filter" checked={filterOption ==="New"}/>
          New
          </label>
        </div>
      </div>
    )
  }
}

export default FilterOptions
