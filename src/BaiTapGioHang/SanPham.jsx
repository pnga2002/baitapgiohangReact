import React, { Component } from 'react'

export default class SanPham extends Component {
  render() {
    const {shoe,themGioHang} = this.props;
    return (
      <div className='card'>
        <img src={shoe.image} alt="..." className='w-100' height={420} style={{objectFit:'cover'}}/>
        <div className="card-body">
            <p>{shoe.name}</p>
            <p>{shoe.price}</p>
            <button className='btn btn-danger'onClick={()=>{
                themGioHang(shoe)
            }}
            >Them vao gio hang <i className="fa fa-cart-plus"></i></button>
        </div>
      </div>
    )
  }
}
