import React, { Component } from 'react';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom'
import Student from './Student';
import StudentInsertion from './StudentInsertion';
import Home from './Home'

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <Switch>
                     <Route path='/' exact={true} component={Home}/>
                     <Route path='/students' exact={true} component={Student}/>
                     <Route path='/studentsinsertion' exact={true} component={StudentInsertion}/>
                </Switch>
             </Router>
         );
    }
}
 
export default App;