import React, { Component } from 'react';
import './App.css';
import Cars from './Cars';
import TrafficSignal from './TrafficSignal';
import MyContext from './MyContext';

class App extends Component {
  constructor() {
    super();
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signalColor: 'red',
    };
  }

  changeSignal(color) {
    this.setState((prevState) => ({
      ...prevState,
      signalColor: color,
    }));
  }

  moveCar(car, side) {
    this.setState((prevState) => ({
      ...prevState,
      cars: { ...prevState.cars, [car]: side },
    }));
  }

  render() {
    const contextValue = {
      cars: this.state.cars,
      signalColor: this.state.signalColor,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    };
    return (
      <MyContext.Provider value={contextValue}>
        <Cars />
        <TrafficSignal />
      </MyContext.Provider>
    );
  }
}

export default App;
