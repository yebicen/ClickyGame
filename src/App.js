import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SubTitle from "./components/SubTitle";
import friends from "./friends.json";
import "./App.css";

// class App extends Component {
  class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clicked: [], 
    score: 0,
    slogan:""
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

handleShuffle = id => {
  this.ShuffleFriend(this.state.friends);
  if(this.state.clicked.indexOf(id) === -1) {
    this.setState({score: this.state.score + 1});
    this.setState({slogan: "You guessed correctly!"});
    this.setState({ clicked: [...this.state.clicked, id]});
  } else {
    this.setState({
      friends,
      clicked: [], 
      score: 0,
      slogan:"You guessed incorrectly!"
    });
  }
};


  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <SubTitle>
        <p>Score: {this.state.score}</p>
        <p>{this.state.slogan}</p>
        </SubTitle>
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
