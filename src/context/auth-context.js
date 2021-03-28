import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;

// We are not using this now. MODULE 7 : Lecture 30 for more information