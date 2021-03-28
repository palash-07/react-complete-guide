import classes from './App.css';
import React, {Component} from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        {id: 'abc' ,name: 'Max', age: 28},
        {id: 'def' ,name: 'Manu', age: 29},
        {id: 'xyz' ,name: 'Stephanie', age: 26}
      ],
      otherState: 'some other value',
      showPersons: false,
      changeCounter: 0,
      authenticated: false
    }
  }

  static getDerivedStateFromProps (props,state) {
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }
  
  // componentDidMount(){
  //   console.log('[App.js] componentDidMount');
  // }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
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


    this.setState((prevState,props) => {
      console.log(prevState.changeCounter);
      return {
        persons: persons,
        changeCounter: prevState.changeCounter+1
      };
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  loginHandler = () => {
      this.setState({authenticated:true});
  }

  render() {
    console.log('[App.js] render');

    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            isAuthenticated={this.state.authenticated}/>
      );  
    }

    return (
    <div className={classes.App}>
      <Cockpit 
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        personsLength={this.state.persons.length}
        clicked={this.togglePersonHandler}
        login={this.loginHandler}
        />
      {persons} 
      {/* The above persons is getting rendered when render function is called. it is either null or content*/}

    </div>
    );
    // (M3 : L6) return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi I\'m a react app!'));
  }
}

export default App;

