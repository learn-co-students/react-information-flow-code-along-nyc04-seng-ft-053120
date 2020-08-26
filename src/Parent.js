import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: '#FFF'
    }
  }

  changeColor = () => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor
    })
  }

  render() {
    return (
      <div className="parent" 
      style={{backgroundColor: this.state.color}}>
              <Child handleColorChange={this.state.changeColor} handleColorChange={this.state.childrenColor}/>
              <Child handleColorChange={this.state.changeColor} handleColorChange={this.state.childrenColor}/>
      </div>
    )
  }
}

export default Parent
