import React from 'react'

export default class CharItem extends React.Component {
    render() {
        const { characters } = this.props;
        const {
            name,
            status,
            image,
            species
        } = characters;

        return (
            <div className= 'CharItem'>
                <p>Name: { name }</p>
                <p><img alt='' src={ image } /></p>
                <p>Status: { status }</p>
                <p>Species: { species }</p>
            </div>

        )
    }
}