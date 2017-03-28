import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addQuestion } from '../actions/actions_definition';

import Config from './Config';
import Definition from './Definition';

class Content extends Component {

    // Add question to state
    handleQuestionAdded(q) {
        this.props.addQuestion(q);
    }

    handleSaveDefinition() {
        let str = 'data:text/plain;charset=utf-8,' + this.generateDefinitionString();
        const encoded = encodeURI(str);
        let link = document.createElement('a');
        link.setAttribute('href', encoded);
        link.setAttribute('download', 'definition.txt');
        document.body.appendChild(link);
        link.click();
    }

    generateDefinitionString() {
        let def = "";
        if (this.props.text && this.props.text.length > 0) {
            def += "T[qrContact]Registration Information";
            this.props.text.forEach((ques, idx) => {
                if (ques.prompt) {
                    def += `\n-[qrText${idx}`;
                    if (ques.hint) {
                        def += `:${ques.hint}`;                        
                    }
                    def += `]${ques.prompt}`;
                }
            });
            def += "\n\n";
        }

        if (this.props.pickone && this.props.pickone.length > 0) {
            this.props.pickone.forEach((ques, idx) => {
                if (ques.prompt) {
                    def += `O[qrOne${idx}`;
                    if (ques.hint) {
                        def += `:${ques.hint}`;
                    }
                    def += `]${ques.prompt}`;
                    Object.keys(ques.responses).forEach((key, i) => {
                        if (ques.responses[key]) {
                            def += `\n-[qrOne${idx}_${i}]${ques.responses[key]}`;
                        }
                    });
                    def += "\n\n";
                }
            });
        } 

        if (this.props.pickmany && this.props.pickmany.length > 0) {
            this.props.pickmany.forEach((ques, idx) => {
                if (ques.prompt) {
                    def += `M[qrMany${idx}`;
                    if (ques.hint) {
                        def += `:${ques.hint}`;
                    }
                    def += `]${ques.prompt}`;
                    Object.keys(ques.responses).forEach((key, i) => {
                        if (ques.responses[key]) {
                            def += `\n-[qrMany${idx}_${i}]${ques.responses[key]}`;
                        }
                    });
                    def += "\n\n";
                }
            });
        }
        return def;
    }

    render() {
        return (
            <section className="section content-body">
                <div className="container">
                    <div className="columns">
                    <div className="column is-5 is-offset-1">
                        <Config onQuestionAdded={this.handleQuestionAdded.bind(this)} />
                    </div>
                    <div className="column is-4">
                            <Definition def={this.generateDefinitionString()} onSaveDef={this.handleSaveDefinition.bind(this)}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }    
}

const mapStateToProps = (state) => {
    return {
        text : state.definition.text,
        pickone: state.definition.pickone,
        pickmany: state.definition.pickmany
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addQuestion: (q) => dispatch(addQuestion(q))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);