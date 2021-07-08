import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

    // ComponentDidCatch() test
    // if (true) {
    //     throw new Error("boohoo");
    // }

    return (
        <div>
            {
                robots.map((robot, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robot.id} 
                            name={robot.name} 
                            email={robot.email} 
                            />
                    );
                })
            }
        </div>
    );
}

export default CardList;