import React from 'react';

const Info = props => {
    return(
        <div className="personalInfo-info balloon from-left" >
            <p>
               {props.children}
            </p>
        </div>
    )
}

export default Info;