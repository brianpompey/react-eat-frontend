import React, { Component } from 'react';
import Header from './Header.js';
import UserForm from './UserForm.js';

class HomePage extends Component {

    render(){
        return(
            <>
            <Header/>
            <UserForm />
            </>
        )
    }

}

export default HomePage;