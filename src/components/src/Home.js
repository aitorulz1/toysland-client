import React, { Component } from 'react'
import Slider from './Slider'
import AllCategories from './AllCategories'

export default class Home extends Component {
  render() {
    return (
      <div>
        <AllCategories />
        <Slider />
      </div>
    )
  }
}