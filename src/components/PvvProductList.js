import React, { Component } from 'react'

export default class PvvProductList extends Component {

  render() {
    let {renderProducts}=this.props;
    console.log("Products:",renderProducts);
    let fnStatus=(param)=>{
      if (param===1){
        return'Active';

      }
      return'NonActive';
    }
    let elementProduct =renderProducts.map((item,index)=>{
        return(
            <>
                <tr key={index}>
                    <th>{item.id}</th>
                    <th>{item.title}</th>
                    {/* <th>{item.status===1?'Active':'NonActive'}</th> */}
                    <td>
                     {fnStatus(item.status)}
                    </td>
                </tr>
            </>
        )
    })
    return (
      <div>
        <h2>danh sach san pham</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>status</th>
                </tr>
            </thead>
            <tbody>
               {elementProduct}
            </tbody>
        </table>
      </div>
    )
  }
}
