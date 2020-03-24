import React, { Component } from 'react';
import AppNav from './AppNav';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import styled from 'styled-components';
import { Title, Background, Center } from './Components';

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
                    <Background>
                        <AppNav/>
                        <Title>
                            <h2>Students</h2>
                        </Title>
                        <Table>
                            <tr >
                                <th style={{paddingRight:"10px"}}>Students' name</th>
                                <th style={{paddingRight:"10px"}}>Students' subject</th>
                                <th style={{paddingRight:"10px"}}>Remove student</th>
                                
                                
                            </tr>
                            {
                                Students.map( student => 
                                    <tr>
                                        <td>{student.name}</td>
                                        <td>{student.materia}</td>
                                        <td><Button onClick={((e) => this.handleRemove(e, student))}>Delete</Button></td>
                                        
                                    </tr>
                                )

                            }
                        </Table>
                        
                    </Background>
                </div>
         );
    }
}

const Table = styled.header`
    margin-left:38%;
`;
 
export default Student;