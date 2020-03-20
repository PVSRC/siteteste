import React, { Component } from 'react';
import AppNav from './AppNav';
import './App.css'
import {Container, Input, Button, Form, FormGroup, Label} from 'reactstrap';
import {Link} from 'react-router-dom';

class StudentInsertion extends Component {

    emptyStudent={
        name : '',
        materia : ''
    }

    constructor(props){
        super(props)

        this.state = { 
            student : this.emptyStudent
         }
    
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }

    async handleSubmit(event){
     
        const student = this.state.student;
      
  
        const response = await fetch(`/students`, {
          method : 'POST',
          headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body : JSON.stringify(student),
        });
        const body=response.json();
        this.setState({student : body});
        event.peventDefault();
        this.props.history.push("/students");
      }

      handleChange(event){
        const target= event.target;
        const value= target.value;
        const name = target.name;
        let student={...this.state.student};
        student[name] = value;
        this.setState({student});
        console.log(student);
      }

      async componentDidMount() {
        const responseExp= await fetch('/api/expenses');
        const bodyExp = await responseExp.json();
        this.setState({Expsenses : bodyExp , isLoading :false});
        console.log(bodyExp);
    }
     
    render() { 
        const {student} = this.state;
        
        return (
            <div>
                <AppNav/>
                <Container>
                    <h2>Add Student to database</h2>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="materia">Materia</Label>
                            <Input type="text" name="materia" id="materia" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" type="submit">Save</Button>{' '}
                            <Button color="secondary" tag={Link} to="/" >Cancel</Button>
                        </FormGroup>
                    </Form>
                </Container>
            </div> 
         );
    }
}
 
export default StudentInsertion;