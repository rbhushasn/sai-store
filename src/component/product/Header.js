import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

class Header extends Component {
  render() {
    let { products } = this.props;
    return (
      <nav className="breadcrumb"
        className={'navbar navbar-expand-sm navbar-dark bg-dark p-4'}>
        <Link
          to={'/'}
          className={'navbar-brand'}>
          {'Home'}
        </Link>
        <div
          className={'collapse navbar-collapse'}>
          <ul
            className={'navbar-nav mr-auto'}>
            <li
              className={'nav-item'}>
              <Link
                to={'/Add'}
                className={'nav-link'}>
                {'Add Product'}
              </Link>
              </li>
             
          </ul>
        </div>
      </nav>
    );
  }
};

export default connect((state)=> {
  return {
    products: state.products
  };
})(Header);