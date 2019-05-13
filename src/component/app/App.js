import React, {Component,Fragment} from 'react';
import {BrowserRouter as Router, Route, withRouter, Switch} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import 'scss/style.scss';
import Product from '../product/Product';
import AddProduct from '../product/addProduct';
import store from 'helper/store';
import history from 'helper/history';
import Header from '../product/Header';
import productDetails from '../product/productDetails';


export class App extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
          <Router
            basename={'/'}>
            <ConnectedRouter
              store={store}
              history={history}>
              <Fragment>
                <Header />
                <div
                  className={'container-fluid'}>
                  <div
                    className={'row bg-gradient-danger p-3 mb-2 bg-light text-dark'}>
                    <div
                      className={'col-md-8 offset-md-2 mt-3'}>
                      <Switch>
                        <Route
                          component={Product}
                          exact={true}
                          path={'/Cart'}
                        />
                        <Route
                          component={AddProduct}
                          exact={true}
                          path={'/Add'}
                        />
                        <Route
                          component={productDetails}
                          exact={true}
                          path={'/ProductDetails'}
                        />
                        <Route
                          component={Product}
                          exact={true}
                          path={'/'}
                        />
                      </Switch>
                    </div>
                  </div>
                </div>
              </Fragment>
            </ConnectedRouter>
          </Router>
        );
      }
    }

