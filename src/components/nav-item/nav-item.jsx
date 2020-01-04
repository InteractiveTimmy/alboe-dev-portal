import React, { Component } from 'react';

export default class NavItem extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const {text} = this.props;

    return (
      <div>{text}</div>
    )
  }
}
