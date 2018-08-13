import React, { Component } from 'react';

import './Preview.css';

export default class Preview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTooltip: false
    };
  }

  toggleTooltip = () => {
    this.setState(prevState => {
      return {
        showTooltip: !prevState.showTooltip
      };
    });
  };

  render() {
    const { url, tooltip, showTooltip } = this.props;

    const bgImage = {
      style: {
        backgroundImage: `url("${url}")`
      }
    };

    return (
      <div className="position-relative preview-image-container text-center">
        <span className="preview-image" {...bgImage} />
        {showTooltip ? (
          <span
            className={`preview-image-tooltip ${this.state.showTooltip ? 'active' : ''}`}
            tabIndex="-1"
            title={tooltip}
            onClick={this.toggleTooltip}
          />
        ) : null}
      </div>
    );
  }
}
