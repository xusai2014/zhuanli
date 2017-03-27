import React, {Component} from 'react';

export default class Tree extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data || []
        }
    }

    markNode(data) {
        let nodes
        if (Object.prototype.toString.call(data) == "[object Array]") {
            nodes = data.map((v) => {
                let node = (<li key={this.count++}>{v.text}</li>)
                if (v.children && v.children.length) {
                    node = (<li key={this.count++}>
                        <span>{v.text}</span>
                        {this.markNode(v.children)}
                    </li>)
                }
                return node
            })
        }
        return (
            <ul>{nodes}</ul>
        )
    }

    render() {
        this.count = 0
        return this.markNode(this.state.data)
    }
}