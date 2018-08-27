import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Alert.css';

class Alert extends Component {

    componentWillMount() {
       this.root = document.createElement('div');
       document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    render() {
        return ReactDOM.createPortal(
            <div className="Alert">
                { this.props.children }
            </div>,
            this.root
        );
    }
}

export default Alert;