import React, { Component } from "react";
import fire from "./Fire";
import TodoList from "./TodoList";
// import LoginRegister from "./LoginRegister"

class Home extends Component {
  logout = () => {
    fire.auth().signOut();
  };

  render() {
    return (
      <div>
        <h1>You are home!</h1>
        <div>
          {" "}
          <TodoList />{" "}
        </div>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Home;
