import './App.css';
import React, {Component} from 'react';
import styled from 'styled-components';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'abc' ,name: 'Max', age: 28},
      {id: 'def' ,name: 'Manu', age: 29},
      {id: 'xyz' ,name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // (M3 : L18) DON't do this this.state.persons[0].name = 'Maximilian'; use below
    this.setState({
      persons: [
        {id: 'abc' ,name: newName, age: 28},
        {id: 'def',name: 'Manu', age: 29},
        {id:'xyz',name: 'Stephanie', age: 27}
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons]; // always use spread operator to copy arrays otherwise you know that objects and arrays are copied as pointer types so original array would be changed 
      persons.splice(personIndex,1); // deleting 1 element at personIndex
      this.setState({persons:persons})
  }

  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // console.log(personIndex);

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
              return (
                <Person 
                    click={this.deletePersonHandler.bind(this,index)}
                    name = {person.name}
                    age = {person.age} 
                    key = {person.id}
                    changed = {(event) => this.nameChangeHandler(event,person.id)}/>
              )
          })}
        </div>
      );
    }

    const classes = []; // converting to a string 'red bold'
    if (this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }



    return (
    <div className="App">
      <h1>Hi,I'm a react App</h1>
      <p className={classes.join(' ')}>This is really working</p>
      <button onClick={this.switchNameHandler.bind(this,'Maximilian')}>Switch Name</button> {/*M3 : L22*/}
      <br></br>
      <button
        className="button"
        onClick={this.togglePersonHandler}>Show/Hide Persons</button> {/*M4 : L2*/} 
      
      {persons} 
      {/* The above persons is getting rendered when render function is called. it is either null or content*/}

    </div>
    );
    // (M3 : L6) return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi I\'m a react app!'));
  }
}

export default App;

