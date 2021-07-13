import React from "react";
import { useSelector } from 'react-redux';
import { Alert } from 'antd';

import './App.scss';
import "antd/dist/antd.css";

import Transfers from "../Transfers/Transfers";
import Header from "../Header/Header";
import Filters from "../Filters/Filters";
import Pagination from "../Pagination/Pagination";
import CardList from '../CardList/CardList';


function App() {

  const {checkboxs} = useSelector(({checkboxs}) => ({checkboxs}));

  const warning = checkboxs.every(checkbox => !checkbox.check);

  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <Transfers />
        <div className="content">
          <Filters />
          { warning
            ? <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="warning" showIcon closable />
            : <CardList /> }
          { warning ? null : <Pagination />}
        </div>
      </div>
    </div>
  );
}

export default App;
