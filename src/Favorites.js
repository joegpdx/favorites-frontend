import React, { Component } from 'react'
import List from './List';

export default class Favorites extends Component {
    state = { 
        characters: []
    }
    render() {
        return (
            <div>
                <List characters={ this.state.characters }/>
            </div>
        )
    }
}