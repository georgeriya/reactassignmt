import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchContainer from './SearchContainer/SearchContainer.react';
import QuestionContainer from './QuestionContainer/QuestionContainer.react';
import ProfileContainer from './ProfileContainer/ProfileContainer.react';
import QuestionData from './QuestionData/QuestionData.react';
import FetchSearchResult from './FetchSearchResult/FetchSearchResult.react';
function App() {
  return (
    <div className="App">
      <FetchSearchResult></FetchSearchResult>
      <QuestionData></QuestionData>
     
      <ProfileContainer></ProfileContainer>
    </div>
  );
}

export default App;
