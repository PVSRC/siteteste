import React, { Component } from 'react';
import AppNav from './AppNav';

class Student extends Component {

    state = {  
        isLoading : true,
        Students : []
    }
 
    async componentDidMount(){
        const response=await fetch('/students');
        const body = await response.json();
        console.log(body);
        this.setState({Students : body._embedded.students , isLoading: false});
    }

    render() { 
        const {Students , isLoading} = this.state;
        if(isLoading) 
            return (<div>Loading...</div>);
        
        return ( 
            
                <div>
                    <AppNav/>
                    <h2>Students</h2>
                    {
                        Students.map( student => 
                            <div id={student.id}>
                                {student.name}
                            </div>
                        )

                    }

                </div>
         );
    }
}
 
export default Student;