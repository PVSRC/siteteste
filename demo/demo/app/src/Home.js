import React, { Component } from 'react';
import AppNav from './AppNav';
import { Title, Background } from './Components';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Background>
                    <AppNav />
                    <Title>
                        <h2>
                            This is a test application made for studying purposes
                        </h2>
                    </Title>
                </Background>
            </div>
         );
    }
}
 
export default Home;