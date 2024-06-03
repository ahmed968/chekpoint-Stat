import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Ben said Ahmed',
        bio: 'A software developer Tunisia.',
        imgSrc: 'https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-1/301413560_2189295304566819_7567192406144725804_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bcBCEqygTNwQ7kNvgGKFDwv&_nc_ht=scontent.ftun9-1.fna&oh=00_AYD8q6fz3G-iFhcEGo6Lr1wZedE_Zs5sG3w_jnO_GldoqA&oe=6663A94A',
        profession: 'Software Developer',
      },
      shows: false,
      timeInterval: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  }

  render() {
    const { person, shows, timeInterval } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide' : 'Show'} Profile
        </button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.profession}</h2>
          </div>
        )}
        <p>Time since last mounted: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
