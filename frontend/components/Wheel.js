import React from 'react'
import { connect } from 'react-redux'

function Wheel(props) {
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }} id="0">B</div>
        <div className="cog" style={{ "--i": 1 }} id="1"></div>
        <div className="cog" style={{ "--i": 2 }} id="2"></div>
        <div className="cog" style={{ "--i": 3 }} id="3"></div>
        <div className="cog" style={{ "--i": 4 }} id="4"></div>
        <div className="cog" style={{ "--i": 5 }} id="5"></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" >Counter clockwise</button>
        <button id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    wheel: state.wheel
  }
}

export default connect(mapStateToProps, {})(Wheel);