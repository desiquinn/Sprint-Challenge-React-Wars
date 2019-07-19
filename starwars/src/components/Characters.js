import React from "react";
import { Card } from 'semantic-ui-react'

const Characters= (props) => {

    console.log(props)
    console.log(props.character.name)
    console.log(props.character.birth_year)
    console.log(props.character.gender)
    console.log(props.character.species)

    return (
        <div>
            <Card.Group itemsPerRow="2">
            <Card centered raised color="teal">
                {/* <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} /> */}
            <Card.Content>
            <Card.Header>{props.character.name}</Card.Header>
            <Card.Meta>
                <span className='date'>{props.character.gender} Born: {props.character.birth_year}</span>
            </Card.Meta>
            {/* <Card.Description>
                Matthew is a musician living in Nashville.
            </Card.Description> */}
            </Card.Content>
            </Card>
            </Card.Group>

        </div>
    )

}

export default Characters;
