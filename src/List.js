import React, { Component } from 'react'
import CharItem from './CharItem';

export default class List extends Component {
    render() {
        const nodes = this.props.characters.map(char => <CharItem characters={ char } />)
        return (
            <div className= 'WrapItem'>
               {nodes} 
            </div>
        )
    }
}