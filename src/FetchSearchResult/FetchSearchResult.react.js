import React from 'react';
import face from '../face.png';
import './FetchSearchResult.css';

class FetchSearchResult extends React.Component {
    url="http://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow";
    constructor(props) {
        super(props);
        this.state = {
            tags:[],
            loaded:false,
            tagName:""
        }
        
    }

    onClickSubmit=()=>{
        fetch(this.url+ this.tagName).then(data=>data.json()).
        then(tags=>this.setState({tags:tags,loaded:true}));
    }

    onChangeOfInputField=(event)=>{
        this.setState({tagName:event.target.value})
    }
    render() {
        if(!this.state.loaded){
        return (
            <div className='fetchsearchresult_wrapper'>
                    <h1>StackOverflow Search</h1>
                    <input onChange={this.onChangeofInputField} placeholder="ENTER VALUE HERE" value={this.state.tags}></input>
                    <button onClick={this.onClickSubmit}>Search</button>
                
            </div>
        );
    }
    else{
        return(
            <div>
                <h2>{this.state.items.title}</h2>
            </div>
        )
    }
}}

export default FetchSearchResult;