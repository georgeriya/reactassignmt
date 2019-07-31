import React from 'react';
import face from '../face.png';
import './ShowUserProfile.css';

class ShowUserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='showuserprofile_wrapper'>
               <div className="container">
                    <span>
                        <img src={face} className="rounded" width="150" />
                    </span>
                    <div>
                        <p>User Details go here</p>
                    </div>
                </div>
                <div className="container">
                    <h6>Recent Answers</h6>
                    <div>
                        <div className="card-body">
                            <span className="float-left">
                                Votes
                            </span>
                            <p>Answer Title goes here...</p>                       
                            <p>Answer Text</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowUserProfile;