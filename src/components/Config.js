import React, { Component } from 'react';

import Response from './Response';

class Config extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questionType: "T",
            questionPrompt: "",
            responseCount: 1,
            responseObj: {}
        };
    }

    resetForm() {
        this.setState({
            questionType: "T",
            questionPrompt: "",
            responseCount: 1,
            responseObj: {}
        });
    }

    renderResponseCount() {
        if (this.state.questionType === "M" || this.state.questionType === "O") {
            return (
                <div className="field">
                    <label htmlFor="responseCount" className="label">Total Responses</label>
                    <p className="control">
                        <span className="select">
                            <select id="responseCount" value={this.state.responseCount} onChange={(ev)=> this.setState({responseCount: ev.target.value})}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                            </select>
                        </span>
                    </p>
                </div>
            );
        }
    }

    updateResponseObject(id, val) {
        let responseObj = Object.assign({}, this.state.responseObj, { [id] : val } );
        this.setState({
            responseObj
        });
    }

    renderResponses() {
        if (this.state.questionType === "M" || this.state.questionType === "O") {
            let responses = [];
            for(let i = 1; i <= this.state.responseCount; i++) {
                responses.push(
                    <Response key={i} id={i} 
                        val={this.state.responseObj[i] || ""} 
                        handleResponseChange={this.updateResponseObject.bind(this)}    
                    />
                );
            }
            return responses;
        }
    }

    addQuestion() {
        // Create value to add to definition...

        // Reset the form... 
        this.resetForm();
    }

    render() {
        return (
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">Add New Field</p>
                </header>
                <div className="card-content">
                    <div className="content">
                        
                        <div className="field">
                            <label htmlFor="questionType" className="label">Question Type</label>
                            <p className="control">
                                <span className="select">
                                    <select id="questionType" 
                                        value={this.state.questionType} 
                                        onChange={(ev)=> this.setState({questionType: ev.target.value})}
                                    >
                                        <option value="T">Text</option>
                                        <option value="O">Pick One</option>
                                        <option value="M">Pick Many</option>
                                    </select>
                                </span>
                            </p>
                        </div>

                        <div className="field">
                            <label className="label" htmlFor="prompt">Question Prompt</label>
                            <p className="control">
                                <input className="input" id="prompt" type="text" 
                                    placeholder="Question prompt..." 
                                    value={this.state.questionPrompt}
                                    onChange={(ev) => this.setState({ questionPrompt: ev.target.value })}
                                />
                            </p>
                        </div>

                        <div className="response-section">
                            {
                                this.renderResponseCount()                                                            
                            }                            
                            {
                                this.renderResponses()
                            }
                        </div>                                           

                    </div>
                </div>
                <footer className="card-footer">
                    <a className="card-footer-item" onClick={this.addQuestion.bind(this)}>Add Question to Definition</a>
                </footer>
            </div>
        );
    }
}

export default Config;