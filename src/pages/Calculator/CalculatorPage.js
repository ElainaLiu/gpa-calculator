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
            <table>
                <tr>
                    <td><TextInput/></td>
                    <td><TextInput/></td>
                </tr>
                <tr>
                    <td><TextInput/></td>
                    <td><TextInput/></td>
                </tr>
            </table>
            
            </header>
        </div>
        );
    }
}

export default CalculatorPage;