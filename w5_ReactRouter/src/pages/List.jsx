import React,{Component} from 'react';
import { withStorage } from '../hoc';

@withStorage
class List extends Component{
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
            List {this.props.token}
        </div>
    }
}

// List = withStorage(List);

export default List;