import React, { Component } from 'react';
import Header from './Header';
import ProfileList from './ProfileList';
import './App.css';
const Head = () => <h1>Temp fix</h1>;

export default class App extends Component {
    render() {
        console.log('Hello')
        return (
            <div>
                <Header/>
                <ProfileList/>
            </div>
        )
    }
}
