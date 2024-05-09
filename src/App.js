import React, { Component } from 'react'
import PvvProductList from './components/PvvProductList';
import PvvProductAdd from './components/PvvProductAdd';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      products :[
        {title:'phan viết vượng',id:2210900085,status:1},
        {title:'garlic',id:2,status:0},
        {title:'apple',id:3,status:0},
        {title:'samsung',id:4,status:1},
      ]
    }
  }
  pvvHandldSumit=(param)=>{
    console.log("App:",param);
    let {products}=this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>phan viet vuong -render data -event form</h1>
        <hr/>
        <PvvProductList renderProducts={this.state.products}/>
        <hr/>
        <PvvProductAdd onSummit={this.pvvHandldSumit}/>
      </div>
    )
  }
}
