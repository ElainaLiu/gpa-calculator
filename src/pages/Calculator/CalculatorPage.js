import React, { Component } from 'react';
import { TextInput } from '../../components/TextInput';
import './styles.css';
import logo from '../../logo.svg';

class CalculatorPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            x: '',
        };
    }
    render() {
        return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                <TextInput/>
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            </header>
        </div>
        );
    }
}

export default CalculatorPage;