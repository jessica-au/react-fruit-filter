import React, { Component } from 'react';
import List from './List';
import Input from './Input'

class FruitContainer extends Component {
    constructor(props) {
        super()
        this.state = {
            fruitsToDisplay: props.fruits,
            filterValue: ''
        };
    }
    handleFilter =(e) => {
        e.preventDefault();
        let filteredValue = e.target.value;
        const fruitFilterList = this.props.fruits.filter(FruitItem => {
            if (FruitItem.includes(filteredValue.toLowerCase())) {
                return true;
            }
        })
        this.setState({
            fruitsToDisplay: fruitFilterList,
            filterValue: filteredValue,

        })
    }
    // if (filteredValue.toLowerCase() === fruitItem.toLowercase())
    render() {
        console.log('------state------');
        console.log(this.state.fruitsToDisplay);
        console.log('------props------');
        console.log(this.props.fruits)
        return (
            <div>
                <Input value={this.state.filterValue} handleFilter={this.handleFilter} />
                <List fruitsToDisplay={this.state.fruitsToDisplay} />
            </div>
        )
    }
}

export default FruitContainer;