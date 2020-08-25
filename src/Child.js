import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    console.log(this.props.handleColorChange)
    return (
      <div className="child" onClick={() => this.props.handleColorChange(getRandomColor())} style={{backgroundColor: this.props.color}} >
      </div>
    )
  }
}

export default Child