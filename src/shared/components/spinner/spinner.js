import React from 'react';
import style from './spinner.module.scss';
import { SyncLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

function Spinner({ loading }) {
  const color = '#015394';

  return (
    <>
      <div className={`${style.spinnerContainer}`}>
        <SyncLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={8}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
}

export default Spinner;
