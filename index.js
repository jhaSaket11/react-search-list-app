import React, { Component } from "react";
import { render } from "react-dom";
import TableComponent from "./TableComponent";
import SearchComponent from "./SearchComponent";
import axios from "axios";
import "./style.css";
import data from "./search-list.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tableData: data,
      searchText: ""
    };
    this.getSearchText = this.getSearchText.bind(this);
  }

  getSearchText(newText) {
    this.setState({ searchText: newText });
  }

  render() {
    let tabledata = this.state.tableData.filter((value) => {
      return value.name.toLowerCase().includes(this.state.searchText.toLowerCase());
    });
    return (
      <div>
        <h1>React Machine Test</h1>
        <SearchComponent onChangeSearchText={this.getSearchText} />
        <TableComponent tableData={tabledata} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
