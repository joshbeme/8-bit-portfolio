import React from 'react';

const Container = props => {
    return(
        <div className={props.classname} >
            {props.children}
        </div>
    )   
}

export default Container;