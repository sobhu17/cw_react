import React, { Component } from 'react';

class List extends Component {
    renderList() {
        // Use the map function to generate HTML list items
        const items = this.props.items.map((item) => {
            return <li key={item.name}>{item.name}</li>;
        });
        return items;
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

export default List;
