export const ADD_TEXT = 'ADD_TEXT';
export const ADD_PICKONE = 'ADD_PICKONE';
export const ADD_PICKMANY = 'ADD_PICKMANY';

export function addQuestion(question) {
    return function(dispatch) {
        if (question.questionType === "T") {
            dispatch(addText(question));
        } else {
            
            
        }
    }
}

function addText(question) {
    let obj = { prompt: question.questionPrompt, hint: question.questionHint };
    return {
        type: ADD_TEXT,
        payload: obj
    };
}

function addPickOne() {
    return {
        type: ADD_PICKONE,
    };
}

function addPickMany() {
    return {
        type: ADD_PICKMANY
    };
}