import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as imageActions from '../../../actions/currentImageAction';
import { showPreview } from '../../../actions/previewModalActions';

import imagePlaceholderDefault from '../../../assets/placeholder.png';

import Preview from '../../../components/preview';

import './Image.css';

const AttrRow = props => {
  return (
    <div className="form-group row">
      <label
        htmlFor={props.htmlFor}
        className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-form-label"
      >
        {props.name}
      </label>
      <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
        {props.children}
      </div>
    </div>
  );
};

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

    // TODO Need to find better solution as push doesn't call listen callback
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

  showPreview = event => {
    event.preventDefault();

    this.props.showPreview(<Preview {...this.props.image} />);
  };

  render() {
    const { image } = this.props;

    const isNew = image.id === undefined;
    const isPreviewPossible = !image.url;
    const imagePlaceholder = image.url || imagePlaceholderDefault;

    const placeholderStyle = {
      style: {
        backgroundImage: `url("${imagePlaceholder}")`
      }
    };

    const imageRow = isNew ? (
      <AttrRow htmlFor="image" name="Image">
        <input
          required
          id="image"
          type="file"
          name="image"
          accept="image/*"
          className="form-control"
          onChange={this.handleFileChange}
        />
      </AttrRow>
    ) : null;

    const tooltipRow = image.showTooltip ? (
      <AttrRow htmlFor="tooltip" name="Tooltip">
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
      </AttrRow>
    ) : null;

    const submitBtnName = isNew ? 'Upload' : 'Update';

    return (
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6">
          <div className="card">
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group row image-row">
                  <div className="col image-col">
                    <div className="placeholder-container">
                      <span className="placeholder" {...placeholderStyle} />
                    </div>
                  </div>
                  <div className="col image-attrs-col">
                    {imageRow}
                    <AttrRow htmlFor="showTooltip" name="Show tooltip">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="showTooltip"
                          name="showTooltip"
                          className="form-check-input"
                          checked={image.showTooltip}
                          onChange={this.handleChange}
                        />
                      </div>
                    </AttrRow>
                    {tooltipRow}
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col">
                    <button
                      className="btn btn-info float-right"
                      disabled={isPreviewPossible}
                      onClick={this.showPreview}
                    >
                      Preview
                    </button>
                    <button
                      type="submit"
                      className="btn btn-success float-right mr-3"
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

const mapDispatchToProps = {
  ...imageActions,
  showPreview
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Image);
