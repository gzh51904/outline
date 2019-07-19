import React,{Component} from 'react';

import {withStorage} from '@/hoc'

import './Cart.scss';

@withStorage        // 等效于 Cart = withStorage(Cart) || Cart
class Cart extends Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         token:''
    //     }
    // }
    // componentWillMount(){
    //     let token = localStorage.getItem('Authorization');

    //     this.setState({
    //         token
    //     })
    // }
    render(){
        return <div>
            Cart {this.props.token}
        </div>
    }
}

// Cart = withStorage(Cart)

export default Cart;