import React,{Component} from 'react';

class Goods extends Component{
    render(){
        console.log('goods:',this.props)
        return <div>
            Goods {this.props.match.params.id}
        </div>
    }
}

export default Goods;