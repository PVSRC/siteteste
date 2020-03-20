import React, { Component } from 'react';
import AppNav from './AppNav';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <AppNav />
                <h2>
                    This is a test application made for studying purposes
                </h2>
            </div>
         );
    }
}
 
export default Home;