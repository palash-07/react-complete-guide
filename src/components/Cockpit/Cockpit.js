import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    // useEffect(() => {
    //   console.log('[Cockpit.js] useEffect');
    //   // Http request ....
    //   setTimeout(()=>{
    //       alert('Saved data to cloud!');
    //   },1000);
    // },[]);

    const assignedClasses = []; // converting to a string 'red bold'
    let buttonClass = '';

    if (props.showPersons){
        buttonClass = classes.Red;
    }
    if (props.personsLength <= 2){
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button
            className={buttonClass}
            onClick={props.clicked}>Show/Hide Persons</button>
        <button onClick={props.login}>Log In</button>
      </div>
    );
};

export default React.memo(Cockpit);