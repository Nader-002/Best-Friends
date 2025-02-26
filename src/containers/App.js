import React, { Component } from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { friends } from '../friends';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            friends: friends,
            searchField: ''
        }
    }



    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }
    
    render() {
        const { friends , searchField } = this.state;
        const filteredFriends =friends.filter(friend =>{
            return friend.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !friends.length ? 
            <h1>Loading</h1>:
            (
                    <div className="tc">
                        <h1 className="f1">Best Friends</h1>
                        <SearchBox  searchChange={this.onSearchChange}/>
                        <Scroll>
                            <CardList friends={filteredFriends} />                          
                        </Scroll>
                    </div>
            );
        }
    }


export default App;