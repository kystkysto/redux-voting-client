import PureRenderMixin from 'react-addons-pure-render-mixin';
import React, { Component } from 'react';

export default class Winner extends Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return <div className="winner">
      Winner is {this.props.winner}!
    </div>;
  }
}