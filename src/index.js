import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './components/button';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
    
    };
  }
  
 render() {
   return (
     <div>
       <h1>Hello World!</h1>
        <Button 
          title="Tap Here!"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
