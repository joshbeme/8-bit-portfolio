import React from 'react';

const Info = props => {
    return(
        <div className="personalInfo-bubble balloon from-left" >
            <p className="textbubble">
               {props.children}
            </p>
        </div>
    )
}

export default Info;