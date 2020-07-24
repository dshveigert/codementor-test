export interface ISurvey {
    answer: string;
    question: string;
}
export interface ISurveyAnswer {
    question: string;
    type: EAnswerType;
}
export enum EAnswerType {
    message = 'message',
    error = 'error',
    success = 'success'
}
