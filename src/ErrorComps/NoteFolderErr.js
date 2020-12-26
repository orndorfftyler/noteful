import React from 'react';
import PropTypes from 'prop-types';

export default function NoteFolderErr(props) {
  if(props.message) {
    return (
      <div className="error">{props.message}</div>
    );
  }

  return <></>
}

NoteFolderErr.propTypes = {
  message: PropTypes.string
};