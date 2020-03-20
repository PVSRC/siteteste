import React, { Component } from 'react';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom'
import Student from './Student';
import Home from './Home'

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <Switch>
                     <Route path='/' exact={true} component={Home}/>
                     <Route path='/students' exact={true} component={Student}/>
                </Switch>
             </Router>
         );
    }
}
 
export default App;