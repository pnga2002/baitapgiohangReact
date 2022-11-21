import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'

export default class BaiTapGioHang extends Component {
    state ={
      gioHang:[
        {
          id: 12,
          name: "Nike Air Max 270 React",
          alias: "nike-air-max-270-react",
          price: 750,
          description: "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
          shortDescription: "Paul George is the rare high-percentage shooter",
          quantity: 445,
          image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
          soLuong:1
        } 
      ]
    }
    xoaGioHang=(maSPClick)=>{
      console.log(maSPClick)
      let gioHang = this.state.gioHang;
      let index = gioHang.findIndex(sp=>sp.maSP===maSPClick);
      if(index!==-1){
          gioHang.splice(index,1);
      }
      this.setState({
          gioHang:gioHang
      })
  }
    themGioHang=(spClick)=>{
      spClick={...spClick,soLuong:1}
      console.log(spClick)
      let gioHang = this.state.gioHang;
      // //xet xem san pham da co trong gio hang hay chua
      let spGH = gioHang.find(sp=>sp.id===spClick.id);
      if(spGH){
          spGH.soLuong=spGH.soLuong+1;

      }else{
          gioHang.push(spClick);
      }
      //setState
      this.setState({
          gioHang:gioHang
      })

  }
  render() {
    return <>
      <h3>BÀI TẬP GIỎ HÀNG</h3>
      <GioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang}/> 
      <DanhSachSanPham themGioHang={this.themGioHang}/>
    </>
  }
}
