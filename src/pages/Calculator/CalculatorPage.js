import React, { Component } from 'react';
import { TextInput } from '../../components/TextInput';
import './styles.css';
import logo from '../../logo.svg';

const gradeTable = {
    "A": 4.0,
    "A-": 3.7,
    "B+": 3.3,
    "B": 3.0,
    "B-": 2.7,
    "C+": 2.3,
    "C": 2.0,
    "C-": 1.7,
    "D+": 1.3,
    "D": 1.0,
    "E": 0.0
}

class CalculatorPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            rows: [
                {
                    grade: '',
                    hours: ''
                }
            ]
        };
        this.addRow = this.addRow.bind(this);
    }
    handleChange(e) {
        let index = e.target.className;
        let key = e.target.name;
        let newRows = this.state.rows;
        newRows[index][key] = e.target.value;
        this.setState({rows: newRows});
    }
    handleSubmit(e){
        let i = 0;
        let gpa = 0;
        let totalHours = 0;
        for(i=0; i<this.state.rows.length;++i){
            let grade = this.state.rows[i]["grade"];
            let hours = this.state.rows[i]["hours"];
            if(hours == '' || !(grade in gradeTable) || hours <= 0 || isNaN(hours)){
                return;
            }
            hours = Number(hours);
            grade = gradeTable[grade];
            let result = grade * hours;
            totalHours = totalHours + hours;
            gpa = gpa + result;
        }
        gpa = gpa/totalHours;
        let gpa_round = gpa.toFixed(3);
        document.getElementById("out").innerHTML = gpa_round;
    }
    handleClear(e){
        let newRows = [{
            grade: '',
            hours: ''
        }]
        this.setState({rows: newRows});
        document.getElementById("out").innerHTML = '';
    }
    renderTable() {
        return this.state.rows.map((j, i) => {
            return (
                <tr>
                    <td>
                        <input name='grade' className={i} type='text' value={this.state.rows[i]["grade"]} onChange={this.handleChange.bind(this)}></input>
                    </td>
                    <td>
                        <input name='hours' className={i} type='text' value={this.state.rows[i]["hours"]} onChange={this.handleChange.bind(this)}></input>
                    </td>
                </tr>
            )
        })
    }
    addRow() {
        let newRows = this.state.rows;
        newRows.push({
            grade: '',
            hours: ''
        });
        this.setState({rows: newRows});
    }
    render() {
        return (
        <div className="App">
            <header className="App-header">
            <h1>GPA Calculator</h1>
            <table>
                <tr>
                    <th>Grade</th>
                    <th>Credit Hours</th>
                </tr>
               {this.renderTable()}
            </table>
            <button type='button' onClick={this.addRow}>+</button>
            <button type='button' onClick={this.handleSubmit.bind(this)}>Click to submit</button>
            <button type='button' onClick={this.handleClear.bind(this)}>Click to reset</button>
            <output id='out'></output>
            </header>
        </div>
        );
    }
}

export default CalculatorPage;