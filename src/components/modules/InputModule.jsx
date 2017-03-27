import React from 'react';

export default class InputModule extends React.Component{
    render(){
        return(
            <div className="controls">
                <span>{this.props.content}</span>
                <input type="text" placeholder={this.props.placeholder} className="input-xlarge" />
            </div>
        )
    }
}