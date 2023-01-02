import React, { Component } from 'react'

export default class Comp extends Component {
    constructor(props){
        super(props);
        this.state={value:''};
        this.onSelect=this.onSelect.bind(this);
    }
    async onSelect(e){
        await this.setState({ value: e.target.value });
        this.props.setValue(this.state.value);
        // console.log(this.state.value);
    }
  render() {
    return (
      <div>
        <select name='dropdown' value={this.state.value} onChange={this.onSelect}>
            <option value='' defaultValue>Select Something</option>
            <option value="1">1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
        </select>
      </div>
    )
  }
}
