import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addQuestion } from '../actions/actions_definition';

import Config from './Config';
import Definition from './Definition';

class Content extends Component {

    // Add question to state
    handleQuestionAdded(q) {
        console.log(q);
        this.props.addQuestion(q);
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
            def += "\n";
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
                            <Definition def={this.generateDefinitionString()}/>
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