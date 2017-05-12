var React = require('react');
var ReactDOM = require('react-dom');
class Button extends React.Component {
 render() {
    return <button onClick={this.props.whenClicked} className={"btn " + this.props.className} >
      {this.props.title}
      <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
    </button>
  }
}

export default Button;
