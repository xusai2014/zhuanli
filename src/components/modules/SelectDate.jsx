import React from 'react';

export default class SelectDate extends React.Component{
    render(){
        return(
            <div className="controls">
                <span>{this.props.content}</span>
                <input type="text" className="input-xlarge" placeholder={this.props.placeholder}/>
                <span>到</span>
                <input type="text"  className="input-xlarge" />
            </div>
        )
    }
}