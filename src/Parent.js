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

  handleClick = (newChildColor) => {
    this.setState( {
      color: getRandomColor(),
      childrenColor: newChildColor
      // why can't children color's value be getRandomColor()?
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child action={this.handleClick} color={this.state.childrenColor}/>
        <Child action={this.handleClick} color={this.state.childrenColor}/>
      </div>
    )
  }
}

export default Parent
