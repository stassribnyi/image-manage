import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchImage, resetImage } from '../../../actions/imageActions';

import imagePlaceholderDefault from '../../../assets/image-placeholder.svg';

import './Image.css';

class ImageNew extends Component {

  componentDidMount() {
    if (this.props.match.params.id !== undefined) {
      this.props.fetchImage(this.props.match.params.id);
    }

    this.unlisten = this.props.history.listen(this.props.resetImage);
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const { image } = this.props;
    const imagePlaceholder = image.url || imagePlaceholderDefault;

    const placeholderStyle = {
      style: {
        backgroundImage: `url("${imagePlaceholder}")`
      }
    };

    return (
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="card">
            <div className="card-img-top">
              <span className="placeholder" {...placeholderStyle}></span>
            </div>
            <div className="card-body">
              <form >
                <div className="form-group row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
                    <label className="form-check-label" htmlFor="showTooltip">
                      Show tooltip
                  </label>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
                    <div className="form-check">
                      <input id="showTooltip"
                        name="showTooltip"
                        className="form-check-input"
                        type="checkbox" value={image.showTooltip} />
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="tooltip" className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 col-form-label">Tooltip</label>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
                    <input id="tooltip"
                      name="tooltip"
                      type="text"
                      className="form-control"
                      placeholder="Some tooltip"
                      value={image.tooltip} />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col">
                    <button type="submit" className="btn btn-primary float-right">Add image</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  image: state.currentImage
});

export default connect(
  mapStateToProps,
  { fetchImage, resetImage }
)(ImageNew);