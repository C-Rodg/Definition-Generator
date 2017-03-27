import React, { Component } from 'react';

class Config extends Component {
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
                                    <select id="questionType">
                                        <option value=""></option>
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
                                <input className="input" id="prompt" type="text" placeholder="Question prompt..." />
                            </p>
                        </div>

                        <div className="field">
                            <label htmlFor="responseCount" className="label">Total Responses</label>
                            <p className="control">
                                <span className="select">
                                    <select id="responseCount">
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

                        <div className="field">
                            <label className="label" htmlFor="r1">Response 1</label>
                            <p className="control">
                                <input className="input" id="r1" type="text" placeholder="Response 1..." />
                            </p>
                        </div>
                        <div className="field">
                            <label className="label" htmlFor="r2">Response 2</label>
                            <p className="control">
                                <input className="input" id="r2" type="text" placeholder="Response 2..." />
                            </p>
                        </div>
                        <div className="field">
                            <label className="label" htmlFor="r3">Response 3</label>
                            <p className="control">
                                <input className="input" id="r3" type="text" placeholder="Response 3..." />
                            </p>
                        </div>
                        <div className="field">
                            <label className="label" htmlFor="r4">Response 4</label>
                            <p className="control">
                                <input className="input" id="r4" type="text" placeholder="Response 4..." />
                            </p>
                        </div>

                    </div>
                </div>
                <footer className="card-footer">
                    <a className="card-footer-item">Add Question to Definition</a>
                </footer>
            </div>
        );
    }
}

export default Config;