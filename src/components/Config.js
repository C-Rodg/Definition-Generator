import React, { Component } from 'react';

import Response from './Response';

const responseCounts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
let dataHints = [
    {
        hint: "FIRSTNAME",
        name: "First Name"
    },
    {
        hint: "LASTNAME",
        name: "Last Name"
    },
    {
        hint: "COMPANY",
        name: "Company"
    },
    {
        hint: "EMAIL",
        name: "Email Address"
    },
    {
        hint: "PHONE",
        name: "Phone"
    },
    {
        hint: "TITLE",
        name: "Title"
    },
    {
        hint: "ADDRESS1",
        name: "Address 1"
    },
    {
        hint: "ADDRESS2",
        name: "Address 2"
    },
    {
        hint: "CITY",
        name: "City"
    },
    {
        hint: "STATE",
        name: "State"
    },
    {
        hint: "POSTALCODE",
        name: "Zip Code"
    },
    {
        hint: "COUNTRY",
        name: "Country"
    },
    {
        hint: "FAX",
        name: "Fax"
    },
    {
        hint: "LEADRANKING",
        name: "Lead Ranking"
    }
];

class Config extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questionType: "T",
            questionPrompt: "",
            questionHint: "",
            responseCount: 1,
            responseObj: {}
        };
    }

    resetForm() {
        this.setState({
            questionType: "T",
            questionPrompt: "",
            questionHint: "",
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
                                { responseCounts.map((item) => {
                                    return <option key={item} value={item}>{item}</option>;
                                })
                                }
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
        this.props.onQuestionAdded( Object.assign({}, this.state) );
        if (this.state.questionHint) {
            dataHints = dataHints.filter((item) => {
                return item.hint !== this.state.questionHint;
            });
        }
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
                        
                        <div className="columns">
                            <div className="column">
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
                            </div>
                            <div className="column">
                                <div className="field">
                                    <label htmlFor="questionHint" className="label">Question Data Hint</label>
                                    <p className="control">
                                        <span className="select">
                                            <select id="questionHint" 
                                                value={this.state.questionHint} 
                                                onChange={(ev)=> this.setState({questionHint: ev.target.value})}
                                            >
                                                <option value="">None</option>
                                                {
                                                    dataHints.map((h) => {
                                                        return <option key={h.hint} value={h.hint}>{h.name}</option>
                                                    })
                                                }
                                            </select>
                                        </span>
                                    </p>
                                </div>
                            </div>
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