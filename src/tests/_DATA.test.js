import { _saveQuestion,_saveQuestionAnswer } from "../utils/_DATA";

describe('_saveQuestion Unit tests',() => {
    test('_saveQuestion returns saved question on valid inputs', async () => {
        const optionOneText = 'Be a Cloud Developer';
        const optionTwoText = 'Be a Cloud Infrastructure Engineer';
        const author = 'sarahedo';
        const savedQuestion = await _saveQuestion({optionOneText, optionTwoText,author})
        expect(savedQuestion.optionOne.text).toEqual(optionOneText)
        expect(savedQuestion.optionTwo.text).toEqual(optionTwoText)
        expect(savedQuestion.author).toEqual(author)
    })
    
    test('_saveQuestion rejects with error message on invalid inputs', async () => {
        const optionOneText = 'Be a Cloud Developer';
        const optionTwoText = 'Be a Cloud Infrastructure Engineer';
        await expect(_saveQuestion({optionOneText, optionTwoText})).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
    });
})



describe('_saveQuestionAnswer Unit tests',() => {
    test('_saveQuestionAnswer returns saved question answer on valid inputs', async() => {
        const answer = 'optionOne';
        const qid = 'vthrdm985a262al8qx3do';
        const authedUser = 'sarahedo';
        const result = await _saveQuestionAnswer({answer, authedUser, qid});
        expect(result).toEqual(true)
    })

    test('_saveQuestionAnswer rejects with error message on invalid inputs', async () => {
        const answer = 'optionOne';
        const authedUser = 'sarahedo';
        await expect(_saveQuestionAnswer({answer, authedUser})).rejects.toEqual('Please provide authedUser, qid, and answer')
    })
})