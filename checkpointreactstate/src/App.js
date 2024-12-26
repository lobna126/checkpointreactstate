import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "lobna",
        bio: "etudiante",
        imgSrc: "https://via.placeholder.com/150",
        profession: "rien pour le moment",
      },
      shows: false,
      timeSinceMount: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ timeSinceMount: prevState.timeSinceMount + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState(prevState => ({ shows: !prevState.shows }));
  }

  render() {
    const { person, shows, timeSinceMount } = this.state;
    return (
      <div className="App">
        <h1>Profil de la personne</h1>
        <button onClick={this.toggleShow}>
          {shows ? "Masquer le profil" : "Afficher le profil"}
        </button>
        {shows && (
          <div>
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>Profession : {person.profession}</p>
          </div>
        )}
        <p>Temps écoulé : {timeSinceMount} secondes</p>
      </div>
    );
  }
}

export default App;
