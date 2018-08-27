import React, { Component } from 'react';
import InnerDiv from '../InnerDiv/InnerDiv';
import Alert from '../Alert/Alert';
import './OuterDiv.css';

export default class OuterDiv extends Component {

  constructor(props) {
    super(props);
    this.state = {
        innerDivState: 'down',
        isAlertVisible: false
    };
    this.onInnerDivClick = this.onInnerDivClick.bind(this);
    this.onOuterDivClick = this.onOuterDivClick.bind(this);
    this.outerDivRef = React.createRef();
  }

  onInnerDivClick(e) {
    e.stopPropagation();
    const currValue = this.state.innerDivState === 'down' ? 'up' : 'down';
    this.setState({
        innerDivState: currValue,
        isAlertVisible: false
    });
  }

  onOuterDivClick(e) {
    if (!this.state.isAlertVisible) {
        this.setState({ isAlertVisible: true });
    }
  }

  render() {
    return (
      <div className="OuterDiv" ref={this.outerDivRef} onClick={(e) => this.onOuterDivClick(e)}>
        <InnerDiv divState={this.state.innerDivState} 
            onInnerDivClick={this.onInnerDivClick}
        />
        { this.state.isAlertVisible &&
          <Alert>click only on inner div</Alert>  
        }
      </div>
    )
  }
}
