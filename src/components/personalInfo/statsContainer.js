import React from 'react';
import Stat from './infoStats';

const statsContainer = props => {
    return(
        <div className="personalInfo-statsContainer " >
            <Stat header="Name" >Joshua Owens</Stat>
            <Stat header="Location" >Norwalk</Stat>
            <Stat header="School" >Cerritos College</Stat>
            <Stat header="Age" >23</Stat>
            <Stat header="Degree" >Computer Science</Stat>
            <Stat header="Focus" >JavaScript Fullstack</Stat>
            <Stat header="Experience" >1 Year</Stat>


        </div>
    )   
}

export default statsContainer;