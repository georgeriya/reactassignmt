import React from 'react';
import face from '../face.png';
import './QuestionAnswer.css';

class QuestionAnswer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='questionanswer_wrapper'>
            <a href="/">BACK TO SEARCH</a>
            <h2>Question Title</h2>
            <div className="container">
                <div>
                    <div>
                        <span>
                            Votes
                        </span>
                        <span>
                            <img className="rounded" src = {face} alt="AuthorDP" width="100"/>
                            <p className="text-muted"><small>Author Name</small></p>
                        </span>
                        <p>Question Details...</p>
                    </div>
                </div>
            </div>
            <h6>Answers</h6>
            <div className="container">
                <div>
                    <div>
                        <span>
                            Votes
                        </span>
                        <span>
                            <img className="rounded" src = {face} alt="AuthorDP" width="100"/>
                        </span>
                        <p className='font-weight-bold'>Answer Title goes here...</p>
                        <p className="text-muted">by Author Name</p>
                        
                        <p>Answer Text</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default QuestionAnswer;