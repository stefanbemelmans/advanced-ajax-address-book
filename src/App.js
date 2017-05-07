import React, { Component } from "react";
import "./App.css";
import UserDetailContainer from "./containers/UserDetailContainer";
import ListOfUsersContainer from "./containers/ListOfUsersContainer";
import SearchBox from "./components/SearchBox";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    fetch("/users")
    .then(function (response) {
      return response.json();
    }).then(function (users) {
      
    });
  }
  render() {
    return (
      <div>
        <SearchBox />
        <ListOfUsersContainer />
        <UserDetailContainer />
      </div>
    );
  }
}
