import React, { Component } from 'react'
import './comp.css'

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
      <div className='select'>
        <select name='dropdown' value={this.state.value} onChange={this.onSelect}>
            <option value='' defaultValue>Select Company Name</option>
            <option value="Colorbar, HSR">ColorBar</option>
            <option value='Nike, Whitefield'>Nike</option>
            <option value='Adidas, BTM'>Adidas</option>
        </select>
      </div>
    )
  }
}
