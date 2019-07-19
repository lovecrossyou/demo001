import React from 'react';
import './index.css';
import logo from "../logo.svg"

const PanelItem = ({ icon, title, bgColor }) => {
  const style = {
    backgroundColor: bgColor
  }
  return <div className="panel_item" style={style}>
    <img className="panel_item_img" src={logo} alt='' mode="aspectFill" />
    <div className="panel_item_title">{title}</div>
  </div>
}


const Panel = () => {
  return (
    <div className="panel_wrapper">
      <PanelItem title="ZERO ISSUES" bgColor="#D86D3C" ></PanelItem>
      <PanelItem title="40 TASK IN CHECK" bgColor="#8E8D3E"></PanelItem>
      <PanelItem title="200K PENDING ISSUES" bgColor="#FF2C70"></PanelItem>
    </div>
  )
}


export default Panel;