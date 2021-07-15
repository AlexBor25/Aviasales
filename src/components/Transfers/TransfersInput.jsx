import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";

import style from './transfers.module.scss';

import { checked } from "../../redux/actions/actionCreators";

const TransfersInput = ({ label, check, name }) => {
  const dispatch = useDispatch();

  const changeCheck = () => {
    dispatch(checked(name));
  };

  return (
    <label className={style.label}>
      <span className={style.checkbox} />
      <input className={style.input}
             name={name}
             onChange={changeCheck}
             checked={check}
             type="checkbox" />
      {label}
    </label>
  );
};

TransfersInput.defaultProps = {
  label: '',
  check: false,
  name: ''
};

TransfersInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  check: PropTypes.bool,
};

export default TransfersInput;
