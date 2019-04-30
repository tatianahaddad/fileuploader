import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt, faTrashAlt, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';

export class ControlBar extends Component {
  render() {
    return (
      <div className="control-bar">
        <div className="ControlBar__btn"><FontAwesomeIcon icon={faRedoAlt}/></div>
        <div className="ControlBar__btn"><FontAwesomeIcon icon={faTrashAlt}/></div>
        <div className="ControlBar__btn"><FontAwesomeIcon icon={faCloudDownloadAlt}/></div>
      </div>
    )
  }
}

export default ControlBar
