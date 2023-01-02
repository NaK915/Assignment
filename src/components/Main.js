import React, { Component } from 'react'
import Comp from './component1/Comp'
import Comp2 from './component2/Comp2'
import './main.css';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state={value:''};
        this.setValue=this.setValue.bind(this);
    }
    async setValue(e){
        // console.log(e);
        await this.setState({ value:e });
    }
  render() {
    return (
      <div className='main'>
        <Comp setValue={this.setValue}/>
        <Comp2 value={this.state.value}/>
      </div>
    )
  }
}
