import React, { Component } from 'react'
// import CharItem from './CharItem';
import request from 'superagent';
import { withRouter } from 'react-router-dom';

export default withRouter(class List extends Component {
    /* whenever youre in a list and clicking on an item has a function that needs access to that item, you need a function that returns a function*/
    makeFavorite = async (char) => {
        console.log('List', this.props)
        // when the user clicks the makeFavorite button, add this character to the favorite list
        const fave = await request.post('https://evening-dusk-favorites.herokuapp.com/api/me/favorites', {
            name: this.props.name,
            status: this.props.status,
            image: this.props.image,
            species: this.props.species
        })
        .set('Authorization', this.props.user.token)

        console.log('fave', fave.body)
    }
    
    renderButtonOrStar = (char) => {
        // check the favorites list if we're on the search page
        const isOnFavoritesList = this.props.favorites.find(person => char.name === person.name);
        if (!isOnFavoritesList) {
            // if they're not on the list, give user option to add them to favorites
            // we are iterarting through a list, and we need the item in a function, so we make an anonymous function that CALLS that function on click with the right arguments
        return <button onClick={ (e) => this.makeFavorite(char)}>Make favorite</button>
        }
        // otherwise, indicate that they ae already on the favorites list
        return <span>⭐</span>
    }

    render() {
        // const SearchNodes = this.props.characters.map(char => <CharItem characters={ char } />)
        console.log('url', this.props)
        return (
            <div className= 'WrapItem'>
                 {
                    // iterate over the characters, and for each character, show their name
                    this.props.characters.map(char => <div key={char.name} className="char-box">
                        <div className= 'CharItem'>
                            <p>Name: { char.name }</p>
                            <p><img alt='' src={ char.image } /></p>
                            <p>Status: { char.status }</p>
                            <p>Species: { char.species }</p>
                        </div>
                        {
                            this.props.location.pathname !== '/favorites' 
                            // only render a button or star on the search page
                                && this.renderButtonOrStar(char)
                        }
                    </div>)
                }
            </div>
        )
    }
})