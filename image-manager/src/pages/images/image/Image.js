import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fetchImage,
  resetImage,
  editImage,
  updateImage,
  addImage
} from '../../../actions/imageActions';

import imagePlaceholderDefault from '../../../assets/image-placeholder.svg';

import './Image.css';

class Image extends Component {
  componentDidMount() {
    if (this.props.match.params.id !== undefined) {
      this.props.fetchImage(this.props.match.params.id);
    }

    this.unlisten = this.props.history.listen(this.props.resetImage);
  }

  componentWillUnmount() {
    this.unlisten();
  }

  handleSubmit = event => {
    const result = event.target.checkValidity();
    event.preventDefault();

    if (!result) {
      return;
    }

    const { image } = this.props;

    const response =
      image.id !== undefined
        ? this.props.updateImage(image)
        : this.props.addImage(image);

    response.then(_ => this.props.history.push('/'));

    // TODO Need to find better solution as push doen't call listen callback
    this.props.resetImage();
  };

  handleChange = event => {
    const { name, value, checked, type } = event.target;
    const result = type === 'checkbox' ? checked : value;

    this.props.editImage({ ...this.props.image, [name]: result });
  };

  handleFileChange = event => {
    if (typeof window.FileReader !== 'function') {
      throw new Error("The file API isn't supported on this browser.");
    }

    const { files } = event.target;
    if (!files) {
      throw new Error(
        'This browser does not support the `files` property of the file input.'
      );
    }

    const file = files[0];

    if (!file) {
      return undefined;
    }

    let reader = new FileReader();
    reader.onload = progressEvent => {
      this.props.editImage({
        ...this.props.image,
        url: progressEvent.target.result
      });
    };

    reader.readAsDataURL(file);
  };

  render() {
    const { image } = this.props;
    const imagePlaceholder = image.url || imagePlaceholderDefault;

    const placeholderStyle = {
      style: {
        backgroundImage: `url("${imagePlaceholder}")`
      }
    };

    const submitBtnName = image.id !== undefined ? 'Update' : 'Upload';

    return (
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="card">
            <div className="card-img-top">
              <span className="placeholder" {...placeholderStyle} />
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                  <label
                    htmlFor="image"
                    className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 col-form-label"
                  >
                    Image
                  </label>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
                    <input
                      id="image"
                      name="image"
                      type="file"
                      accept="image/*"
                      className="form-control"
                      required
                      onChange={this.handleFileChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
                    <label className="form-check-label" htmlFor="showTooltip">
                      Show tooltip
                    </label>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
                    <div className="form-check">
                      <input
                        id="showTooltip"
                        name="showTooltip"
                        className="form-check-input"
                        type="checkbox"
                        checked={image.showTooltip}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                {image.showTooltip ? (
                  <div className="form-group row">
                    <label
                      htmlFor="tooltip"
                      className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 col-form-label"
                    >
                      Tooltip
                    </label>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
                      <input
                        id="tooltip"
                        name="tooltip"
                        type="text"
                        className="form-control"
                        placeholder="Some tooltip"
                        required
                        value={image.tooltip}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                ) : null}
                <div className="form-group row">
                  <div className="col">
                    <button
                      type="submit"
                      className="btn btn-primary float-right"
                    >
                      {submitBtnName}
                    </button>
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
  { fetchImage, resetImage, editImage, updateImage, addImage }
)(Image);
