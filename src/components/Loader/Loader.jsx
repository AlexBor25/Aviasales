import React from 'react';
import { Alert, Spin } from 'antd';

function Loader() {
  return (
    <Spin tip="Loading...">
      <Alert
        message="Подождите идет загрузка всех билетов."
        description="Но вы уже можете найти нужный вам билет ;)"
        type="info"
      />
    </Spin>
  );
}

export default Loader;