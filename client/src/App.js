import React, { Component } from 'react';
import Popular from './components/Popular';
import Avatar from './util/avatar.png';

class App extends Component {
    render() {
        return (
            <div className="App">
            <img  className='avatar'
                  src={Avatar}
                />
                <h2>Stock Archives</h2>
            <Popular />
      </div>
        );
    }
}

export default App;