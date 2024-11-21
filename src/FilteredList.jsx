import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    // Add "type" state variable with a default value of "All"
    this.state = {
      search: "",
      type: "All" // Default filter type
    };
  }

  // Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  // Sets the "type" state variable based on dropdown selection
  onFilter = (type) => {
    this.setState({ type }); // Updates the type state variable
  };

  // Filters items based on both "search" and "type"
  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().includes(this.state.search);
    const matchesType =
      this.state.type === "All" || item.type === this.state.type;
    return matchesSearch && matchesType;
  };

  render() {
    return (
      <div className="filter-list">
        {/* Dropdown Menu */}
        <DropdownButton
          id="dropdown-basic-button"
          title={`Filter by: ${this.state.type}`}
          onSelect={this.onFilter}
        >
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="Vegetable">Vegetables</Dropdown.Item>
        </DropdownButton>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search"
          onChange={this.onSearch}
        />

        {/* Filtered List */}
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
