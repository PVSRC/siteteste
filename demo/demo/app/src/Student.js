import React, { Component } from 'react';
import AppNav from './AppNav';

class Student extends Component {

    constructor(props){
        super(props)

        this.state = {  
            isLoading : true,
            Students : []
        }
    
        this.handleRemove= this.handleRemove.bind(this);
    }

    async handleRemove(e, student){
        var res = student._links.self.href.split("/");
        var id = res[res.length - 1];

        await fetch(`/students/${id}` , {
            method: 'DELETE' ,
            headers : {
              'Accept' : 'application/json',
              'Content-Type' : 'application/json'
            }
  
          }).then(() => {
            let updatedStudents = [...this.state.Students].filter(i => i.id !== id);
            this.setState({Students : updatedStudents});
            window.location.reload(true);
          });
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
                    <tr>
                        <th style={{paddingRight:"10px"}}>Students' name</th>
                        <th style={{paddingRight:"10px"}}>Students' subject</th>
                        <th>Remove student</th>
                    </tr>
                    {
                        Students.map( student => 
                            <tr>
                                <td>{student.name}</td>
                                <td>{student.materia}</td>
                                <td><button onClick={((e) => this.handleRemove(e, student))}>Delete</button></td>
                            </tr>
                        )

                    }
                </div>
         );
    }
}
 
export default Student;