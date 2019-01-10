import React from 'react';

const Container = props => {
    return(
        <div id={props.id} className={props.classname} >

            {props.children}
        </div>
    )   
}

export default Container;