import React, { Component } from 'react'

export default class PvvProductAdd extends Component {
    constructor(props){
        super(props);
        this.state={
            id:0,
            title:'',
            status:0
        }

    }
    pvvHandleChange =(event)=>{
        let name =event.target.name;
        let value =event.target.value;
        this.setState({
            [name]:value
        })
    }
    //submid form
    pvvHandleSubmit=(ev)=>{
        ev.preventDafault();
        this.props.onSummit(this.state);
    }
  render() {
    return (
      <div>
        <h2>them moi san pham</h2>
        <form className='col-md-6'>
           
            <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">
    Id
  </span>
  <input
    type="text"
    className="form-control"
   
    name='id'
    value={this.state.id}
    onChange={this.pvvHandleChange}
  />
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="title">
    Title
  </span>
  <input
    type="text"
    className="form-control"
   
    name='title'
    value={this.state.title}
    onChange={this.pvvHandleChange}

  />
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="title">
    State
  </span>
  <input
    type="text"
    className="form-control"
   
    name='state'
    value={this.state.title}
    onChange={this.pvvHandleChange}

  />
</div>
<button className='btn btn-success'onClick={this.pvvHandleSubmit}>ghi lai</button>

        </form>
      </div>
    )
  }
}
