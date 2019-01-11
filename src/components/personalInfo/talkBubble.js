import React from 'react';
import next from '../../static/next.png'

const Info = props => {
    return(
        <div style={{display: props.display}} className="personalInfo-bubble balloon from-left" >
        <img className={"next "+props.class} src={next} />
            <p className="textbubble">
               {props.children}
            </p>
        </div>
    )
}

export default Info;