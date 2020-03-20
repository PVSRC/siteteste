import React, { Component } from 'react';
import AppNav from './AppNav';
import './App.css'


class StudentInsertion extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <AppNav/>
                <Container>
                    <Form>
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name"></input>
                    </Form>
                </Container>
            </div> 
         );
    }
}
 
export default StudentInsertion;