import React,{Component} from 'react';
import { withStorage } from '../hoc';

class Mine extends Component{

    render(){
        return <div>
            Mine {this.props.token}
        </div>
    }
}

Mine = withStorage(Mine);

export default Mine;