// @flow
import React, { Component} from 'react';
import { isFunction } from '../../utility';

type Props = {
  /** The amount of times to repeate the element */
  value?: Number,
  /** The String or Function that returns the element */
  element?: mixed,
};

type State = {
  key: number
}

/**
 * Repeats an element on the screen
 */
class Repeat extends React.Component<Props, State> {
  static defaultProps= {
    value: 5,
    element: "⭐"
  }
  forceRender = () => {
    this.setState({key: Math.random()})
  }
  render() {
    const { value, element } = this.props
    const generator: any = isFunction(element) ? element : () => element
    const steps = [...Array(value)].map(generator)
    return (
      <div>{ steps }</div>
    );
  }
}
export default Repeat;