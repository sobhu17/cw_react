import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 5 // Initial state
        };
    }

    // Method to increment count
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1 // Increment the count by 1
        });
    };

    render() {
        return (
            <div className="counter">
                {/* Display the value of count */}
                <h1>{this.state.count}</h1>

                {/* Add a button that calls incrementCount() when clicked */}
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
}

export default Counter;
