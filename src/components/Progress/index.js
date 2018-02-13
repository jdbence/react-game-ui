// @flow
import React, { Component} from 'react';
import { theme } from '../../utility';

type Props = {
  /** The value from 0 - 1 showing percentage 0-100% */
  value?: Number,
  /** The importance of the component*/
  status: string
};

/**
 * Progress bar element
 */
class Progress extends React.Component<Props, State> {
  static defaultProps= {
    value: 1,
    status: 'primary'
  }
  render() {
    const { value, status } = this.props
    const style = {
      display: 'flex',
      flex: 1,
      paddingBottom: '0.2em'
    }
    const styleBar = {
      display: 'flex',
      flex: value,
      height: '1em',
      transition: 'flex 500ms ease-out',
      backgroundColor: theme('color', status)
    }
    return (
      <div style={style}>
        <div style={styleBar} />
      </div>
    );
  }
}
export default Progress;