import React from 'react';

/**
 * Card element
 */
class Card extends React.Component {
  static defaultProps= {
    width: '100%',
    shadow: false
  }
  render() {
    const { width, height, shadow } = this.props
    const style = {
      padding: 16,
      border: shadow ? undefined : '1px #e8e8e8 solid',
      borderRadius: 3,
      width: width,
      height: height,
      boxSizing: 'border-box',
      boxShadow: shadow ? 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px' : undefined
    }
    return (
      <div style={style}>Card</div>
    );
  }
}
export default Card;