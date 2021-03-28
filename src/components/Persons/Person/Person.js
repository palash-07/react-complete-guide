import React from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';

const person = (props) => {
    console.log('[Person js] rendering..');
    return (
        <div className={classes.Person}>
            {props.isAuth ? <p>authenticated</p> : <p>Please Login!</p>}
            <p onClick = {props.click}>I'm {props.name} and I am {props.age} years old ! </p>
            <input 
                type="text" 
                onChange={props.changed} 
                value={props.name}></input>
            <p>{props.children}</p>
        </div>
    )
};

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default person;