import React, { Component } from 'react';
import HomeSlider from './home_slider';

import {connect} from 'react-redux';
import {getProductsBySell} from '../../actions/product_actions';
import CardBlock from '../utils/card_block';



class Home extends Component {

    componentDidMount(){
        this.props.dispatch(getProductsBySell());
    }

    render () {
        return (
            <div>
               <HomeSlider/>
               <CardBlock
                   list={this.props.products.bySell}
                   title="Most Popular Dishes"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Home);