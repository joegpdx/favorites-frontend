import React, { Component } from 'react'
import List from './List';
import request from 'superagent';

export default class Search extends Component {
    // initialize state
    state = { 
        characters: [], // we need to display searched-for characters
        favorites: [], // we need to know if these characters are already favorited
        input: '', // we need to know the search input
    }

    componentDidMount = async () => {
        const faves = await request.get('https://evening-dusk-favorites.herokuapp.com/api/me/favorites')
        .set('Authorization', this.props.user.token);

        // fetch faves on mount to decide whether to put a star or a make favorite button
        this.setState({ favorites: faves.body })
    }


    handleSearch = async (e) => {
        e.preventDefault();

        const data = await request.get(`https://rickandmortyapi.com/api/character/?name=${this.state.input}`)

        console.log(data.body)
        this.setState({
            characters: data.body.results,
            loading: false
        });
    }



    render() {
        return (
            <div>
                {/* on submit, call the handlSearch function */}
                <form onSubmit={this.handleSearch}>
                {/* on change, update the input in state */}
                <input value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />
                {/* disable the button if loading */}
                <button disabled={this.state.loading}>Search!</button>
                </form>
                {
                    // if loading, show loading, else, show list
                    this.state.loading 
                    ? "loading!!"
                    : <List 
                    characters={this.state.characters} 
                    favorites={this.state.favorites}
                    user={this.props.user} />

                }
            </div>
        )
    }
}