export const ADD_TEXT = 'ADD_TEXT';
export const ADD_PICKONE = 'ADD_PICKONE';
export const ADD_PICKMANY = 'ADD_PICKMANY';

export function addQuestion(question) {
    return function(dispatch) {
        if (question.questionType === "T") {
            dispatch(addText(question));
        } else {
            let obj = { prompt: question.questionPrompt, hint: question.questionHint, responseCount: question.responseCount, responses: question.responseObj };
            if (question.questionType === "O") {
                dispatch(addPickOne(obj));
            } else if (question.questionType === "M") {
                dispatch(addPickMany(obj));
            }
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

function addPickOne(question) {
    return {
        type: ADD_PICKONE,
        payload: question
    };
}

function addPickMany(question) {
    return {
        type: ADD_PICKMANY,
        payload: question
    };
}