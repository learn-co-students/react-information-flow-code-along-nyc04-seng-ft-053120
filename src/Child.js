import React from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends React.Component {


  render() {
    return (
      <div onClick={() => this.props.handleColorChange(getRandomColor())}
        className="child"
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
}

export default Child
