import React, { Component } from "react";
import "./App.css";
import fire from "./components/Fire";
// import TodoList from "./components/TodoList";
import Login from "./components/LoginRegister";
import Home from "./components/Home";

// export default App;

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return <div>{this.state.user ? <Home /> : <Login />}</div>;
  }
}

export default App;
