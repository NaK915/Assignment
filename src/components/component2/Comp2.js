import React, { Component } from 'react';
import './comp2.css';
import Row from './Row';

export default class Comp2 extends Component {
  render() {
    return (
      <div className="cmp2">
        <div className="headrow">
          <span>Pending Orders</span>
          <span>Delivered Orders</span>
          <span>Assigned Logistics</span>
          <span>Refund Transaction</span>
          <div className="filters">
            <select name="time" id="time">
              <option defaultValue>Today</option>
              <option>Tomorrow</option>
            </select>
            <select name="store" id="store">
              <option defaultValue>All Stores</option>
              <option>Nike</option>
              <option>Adidas</option>
            </select>
            <select name="place" id="place">
              <option defaultValue>All Cities</option>
              <option>Bangalore</option>
              <option>Mumbai</option>
            </select>
          </div>
        </div>
        <hr />
        <div className="card">
          <div className="area">
            <div className="search">
              <input type="text" placeholder="Search Order ID"></input>
              <select name="sort" id="sort">
                <option defaultValue>Sort By</option>
              </select>
            </div>
            <div className="headers">
              <div className="headings">
                <span>Order ID</span>
                <span>Store Name/Pickup Address</span>
                <span>Delivery Address</span>
                <span>Ext. Distance</span>
                <span>Expected Pickup</span>
                <span>Expected Delivery</span>
                <span>Ext. Charge</span>
                <span>Delivery Partner</span>
              </div>
              <hr />
            </div>
            <div className="rows">
                <Row text={this.props.value} partner='Dunzo'/>
                <Row text={this.props.value} partner='Dunzo'/>
                <Row text={this.props.value} partner='Dunzo'/>
            </div>
          </div>
          <div className="foot">
            <button>Download Data</button>
          </div>
        </div>
        <h1>The selected Number is - {this.props.value}</h1>
      </div>
    );
  }
}
