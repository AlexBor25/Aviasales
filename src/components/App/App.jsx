import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';
import "antd/dist/antd.css";

import Transfers from "../Transfers/Transfers";
import Header from "../Header/Header";
import Filters from "../Filters/Filters";
import CardList from '../CardList/CardList';
import Loader from '../Loader/Loader';

import { getId } from '../../redux/actions/actionCreators';

function App() {

  const dispatch = useDispatch();
  const stopped  = useSelector((state) => state.tickets.stop);

  React.useEffect(() => {
    dispatch(getId());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <Header />
      { !stopped ? <Loader /> : null }
      <div className="app__container">
        <Transfers />
        <div className="content">
          <Filters />
          <CardList />
        </div>
      </div>
    </div>
  );
}

export default App;
