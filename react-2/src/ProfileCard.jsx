import React from 'react';
import PropTypes from 'prop-types';

function ProfileCard({name, age, isMember, hobbies, onHobbyClick}) {
     // we can pass props or destructure it directly (props)
    // const sum=props.num + 2;

    return (
        <div>

            {/* <div>   
                <h3>Name: {props.name} </h3>
                <h3>Age: {props.age}</h3>
                <h3>Num: {props.num} - {sum}</h3>
                {/* <h3>Member: {props.isMember}</h3> */} {/* this will print as string }
                <h3>Member: {props.isMember ? "Yes" : "No"}</h3>
               </div> */}

             <div>
                <h3>Name: {name}</h3>
                <h3>Age: {age}</h3>
                <h3>Member: {isMember ? "Yes" : "No"}</h3>
                <h3>Hobbies</h3>
                <ul>
                    {
                        hobbies && hobbies.map((hobby, index) => {
                            return <li key={index}  
                            onClick={() => onHobbyClick(hobby)}>{hobby} </li>;
         })
                    }
                </ul>
             </div>
             
        </div>
    );
}

ProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isMember: PropTypes.bool.isRequired,
    hobbies: PropTypes.arrayOf(PropTypes.string)
};

export default ProfileCard;