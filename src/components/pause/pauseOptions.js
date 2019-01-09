import React from 'react';

const Modal = props => {
    return(
            <a onClick={props.click} classname="pauseText" onMouseEnter={props.hover}>
                <input ref={props.makeRef} type="radio" className="radio" name="pause"></input>
                <span>{props.name}</span>
            </a>
    )
}
export default Modal;