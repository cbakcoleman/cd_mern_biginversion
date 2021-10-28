import React from 'react';

const PersonCard = props => {
    return(
        <div>
            <h3>{ props.lastName }, { props.firstName }</h3>
            <h6>Age: {props.age}</h6>
            <h6>Hair Color: {props.hairColor}</h6>
        </div>
    );
}

export default PersonCard;