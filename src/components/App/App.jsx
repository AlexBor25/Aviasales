import React from "react";

import './App.scss';

import Transfers from "../Transfers/Transfers";
import Header from "../Header/Header";
import Filters from "../Filters/Filters";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <Transfers />
        <div className="content">
          <Filters />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default App;
