var React = require('react');
var ReactDOM = require('react-dom');
import Button from './components/button';

class Hello extends React.Component {
 render() {
    return <div>
      <h1>Hello World!</h1>
      <Button 
        className="btn-default"
        title="Tap Here!"
      />
    </div>
  }
}

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));

