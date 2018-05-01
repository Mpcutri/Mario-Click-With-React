import React, { Component } from "react";
import Card from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./package.json";
import image from "./images/marioShuffle.png";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters: characters,
    score: 0,
    losses: 0,
    charactersClicked: ""
  };

  shuffleCharacters = (clickedLast) => {

    console.log("Click Worked!" + " " + clickedLast);
    console.log(this.state.lastClicked + " was clicked last");
    const newOrder = this.shuffle(this.state.characters);
    this.setState({ characters: newOrder, lastClicked: clickedLast});
    if (this.state.lastClicked === clickedLast) {
      this.state.losses++;
      this.state.score = 0;
    } else {
      this.state.score++
    }
  };

  shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  removeCharacter = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const characters = this.state.characters.filter(character => character.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ characters: characters, score: this.state.score++ });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log(characters, "characters shuffled!");
    return (
      <Wrapper>
        <div style={{ textAlign: "center" }}>
          <img src={image} style={{ width: "70%" }} />
        </div>
        <section className="text-box" style={{ display: "block", textAlign: "center", width: "100%"}}>
          <p>Built in React</p>
          <h3>
            Try not to click the same character twice in a row!
          </h3>
        </section>
        <section className="score" style={{ display: "block", textAlign: "center", width: "100%"}}>
          <p>
            Score: {this.state.score} &emsp; &emsp; &emsp; &emsp; Losses: {this.state.losses}
          </p>
        </section>

        {this.state.characters.map(character => (
          <Card
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            occupation={character.occupation}
            shuffle={this.shuffleCharacters}
          />
        ))}
      </Wrapper>
    );
  }
}


export default App;
