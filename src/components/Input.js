import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super()
        this.state = {

        }
    }
    render() {
        console.log(this.props.onChange)
        return (
            <div>
                <label htmlFor="fruit-filter">Filter these fruits</label>
                <input type="text"
                    value={this.props.value}
                    handleFilter={this.props.handleFilter}
                    name="fruit-filter" />
            </div>
        )
    }
}
export default Input;