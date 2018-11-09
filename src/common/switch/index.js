import React, { Component } from 'react'

export default class Switch extends Component {
  constructor(props) {
    super(props)
    this.handleElementClick = this.handleElementClick.bind(this)
    this.state = {
      rotate: 0,
      iconStyle: {},
    }
  }

  handleElementClick() {
    const { handleSwitchClick } = this.props
    if (handleSwitchClick) handleSwitchClick()
    this.setState(prev => ({
      rotate: prev.rotate + 360,
      iconStyle: {
        transform: `rotate(${prev.rotate + 360}deg)`,
      },
    }))
  }

  render() {
    const { className, Icon, text } = this.props
    const { iconStyle } = this.state
    return (
      <button className={className} onClick={this.handleElementClick} type="button">
        <Icon style={iconStyle} />
        {text}
      </button>
    )
  }
}
