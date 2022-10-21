import React from 'react';
import '../input/index.css';
class Input extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
    <input 
      className="input"
      type="search"
      value={ value }
      onChange={ onChange }
    />
    );
  }
}
export default Input;