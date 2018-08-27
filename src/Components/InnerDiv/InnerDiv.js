import React from 'react';
import './InnerDiv.css';

const InnerDiv = (props) => {
    const { divState, onInnerDivClick } = props;
    const divClasses = `InnerDiv ${divState}`;
    return (
        <div className={divClasses} onClick={(e) => onInnerDivClick(e)}>
            {divState}
        </div>
    )
};

export default InnerDiv;