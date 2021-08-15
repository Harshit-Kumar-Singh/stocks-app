import React, { useRef } from "react";
import { FaReact, FaSyncAlt, FaSave, FaHome } from 'react-icons/fa';

import { MdDone } from 'react-icons/md';

function ContentDisplayBox() {

  let st = false;
  function handleClickEvent() {
    let name;
    st = !st;
    if (st)
      name = "shows";
    else name = "hides";
    let x = document.getElementById('inputContainer');
    // x.childNodes[0].value = "";
    // x.childNodes[1].value = "";
    x.style.animationName = name;
  }

  return <div className="contentDisplayBox">
    <h2>Stocks</h2>
    <div className="listContainer">
      <input className="itm1" placeholder="Search"></input>
      <button className="itm3" onClick={handleClickEvent}>Add +</button>
    </div>
    <div className="rowContainer" id="inputContainer" >
    </div>
    <h2>Items</h2>
  </div>
}

function App() {
  return (
    <div className="inner">
      <div className="leftSideBar">
        <div className="logoDiv"><FaReact className="circularRotation" /></div>
        <div className="leftInnerBar">
          <div className="outerClickableButton">
            <FaHome className="clickableButton" />
          </div>
          <div className="outerClickableButton mgta">
            <FaSave className="clickableButton" />
          </div>
          <div className="outerClickableButton">
            <FaSyncAlt className="clickableButton" />
          </div>
        </div>
      </div>
      <div className="rightPanel">
        <div className="topBar noselect">Inventory</div>
        <div className="lowerPanel">
          <ContentDisplayBox></ContentDisplayBox>
        </div>
      </div>
    </div>
  );
}

export default App;
