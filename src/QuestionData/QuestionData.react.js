import React from 'react';

import './QuestionData.css';
import FetchQuestions from '../FetchQuestions/FetchQuestions.react';

const QuestionData = () => {

    return (
        <div className='questiondata_wrapper'>
           <h3>Questions</h3>
           <FetchQuestions></FetchQuestions>
        </div>
    );

    }
export default QuestionData;