import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

// class App extends Component {
  class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

 
  ShuffleFriend = (arr) => {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
}

handleShuffle = event => {
  event.preventDefault();
  this.ShuffleFriend(this.state.friends);
  this.setState({ friends: this.state.friends});
};

//Then how to write the new array back to the state?????

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            handleShuffle={this.handleShuffle}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
