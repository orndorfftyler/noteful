import React from 'react';
import PropTypes from 'prop-types';

export default function FolderNameErr(props) {
  if(props.message) {
    return (
      <div className="error">{props.message}</div>
    );
  }

  return <></>
}

FolderNameErr.propTypes = {
  message: PropTypes.string
};